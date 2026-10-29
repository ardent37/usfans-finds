/* ============================================================
   Mis hauls: álbumes de productos favoritos, guardados en la cuenta.
   Se añaden con clic derecho en cualquier producto, y desde dentro del haul se puede buscar en todas las spreadsheets.
   Usa Accounts (sesión y API) y las funciones de app.js (cardFor, openProduct, showMenu…).
   ============================================================ */
Object.assign(I18N.es, {
  toolHauls: 'Mis hauls',
  haulsTitle: 'Mis hauls',
  haulsNew: 'Nuevo',
  haulsEmpty: 'Aún no tienes ningún haul. Crea uno para organizar tus productos favoritos.',
  haulsLoginTitle: 'Guarda tus hauls',
  haulsLoginText: 'Inicia sesión para crear álbumes con tus productos favoritos. Se guardan en tu cuenta.',
  haulsLoginBtn: 'Iniciar sesión',
  haulCount: '{n} productos',
  haulCount1: '1 producto',
  haulNameLabel: 'Nombre del haul',
  haulNamePh: 'Ej: Haul de invierno',
  haulCreate: 'Crear haul',
  haulBack: 'Mis hauls',
  haulSearch: 'Busca productos para añadir…',
  haulEmptyItems: 'Este haul está vacío. Busca productos arriba o añádelos con clic derecho desde la lista.',
  haulNoResults: 'Sin resultados en tus spreadsheets.',
  haulDelete: 'Eliminar haul',
  haulAdd: 'Añadir al haul',
  haulRemove: 'Quitar del haul',
  haulResults: 'Resultados',
  addToHaul: 'Añadir a un haul…',
  addToHaulHead: 'Añadir a…',
  newHaulItem: 'Nuevo haul…',
  haulAdded: 'Añadido a «{name}»',
  haulRemoved: 'Quitado de «{name}»',
  haulMaxHauls: 'Has llegado al máximo de hauls.',
  haulMaxItems: 'Este haul está lleno.',
  haulRename: 'Renombrar',
});
Object.assign(I18N.en, {
  toolHauls: 'My hauls',
  haulsTitle: 'My hauls',
  haulsNew: 'New',
  haulsEmpty: 'You don’t have any hauls yet. Create one to organise your favourite products.',
  haulsLoginTitle: 'Save your hauls',
  haulsLoginText: 'Sign in to create albums with your favourite products. They’re saved to your account.',
  haulsLoginBtn: 'Sign in',
  haulCount: '{n} products',
  haulCount1: '1 product',
  haulNameLabel: 'Haul name',
  haulNamePh: 'e.g. Winter haul',
  haulCreate: 'Create haul',
  haulBack: 'My hauls',
  haulSearch: 'Search products to add…',
  haulEmptyItems: 'This haul is empty. Search for products above or add them with a right-click from the list.',
  haulNoResults: 'No results in your spreadsheets.',
  haulDelete: 'Delete haul',
  haulAdd: 'Add to haul',
  haulRemove: 'Remove from haul',
  haulResults: 'Results',
  addToHaul: 'Add to a haul…',
  addToHaulHead: 'Add to…',
  newHaulItem: 'New haul…',
  haulAdded: 'Added to “{name}”',
  haulRemoved: 'Removed from “{name}”',
  haulMaxHauls: 'You’ve reached the maximum number of hauls.',
  haulMaxItems: 'This haul is full.',
  haulRename: 'Rename',
});

const Hauls = (() => {
  const A = () => window.Accounts;
  const root = () => $('tool-hauls');
  let list = null;      // hauls de la cuenta: { id, name, count, keys, cover }
  let cur = null;       // haul abierto: { id, name, items }
  let query = '';
  let searchTimer = 0;

  /* ---------- Utilidades ---------- */
  const keyOf = (link) => {
    const r = parseProductLink(link);
    return r ? `${r.platform}/${r.id}` : '';
  };

  // Lo que se guarda de un producto: enlace limpio, nombre, foto y precio tal como se veían
  function snapshot(p) {
    const k = keyOf(p.link);
    if (!k) return null;
    return { k, l: `https://usfans.com/product/${k}`, n: p.unnamed ? '' : p.name, i: p.image || '', p: p.priceRaw || '' };
  }

  const itemProduct = (it) => ({
    id: `h${it.k}`, name: it.n || t('importedProduct'), unnamed: !it.n, link: it.l, image: it.i, priceRaw: it.p,
    categories: [], sections: [], src: it.i ? 0 : 1, done: !!it.i, _n: '',
  });

  const errText = (e) => ({ max_hauls: t('haulMaxHauls'), max_items: t('haulMaxItems') }[e.code] || t('errGeneric'));

  function toast(text) {
    let el = $('toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'toast';
      el.className = 'toast';
      el.setAttribute('role', 'status');
      document.body.appendChild(el);
    }
    el.textContent = text;
    el.classList.add('show');
    clearTimeout(toast.t);
    toast.t = setTimeout(() => el.classList.remove('show'), 2200);
  }

  async function load() {
    list = (await A().api('/hauls')).hauls;
  }

  const haulByKey = (k) => list.filter((h) => h.keys.includes(k));

  /* ---------- Añadir desde el clic derecho ---------- */
  async function addMenu(p) {
    if (!A().isLoggedIn()) return A().login(() => addMenu(p));
    const snap = snapshot(p);
    if (!snap) return;
    try { await load(); } catch { return toast(t('errGeneric')); }
    const items = list.map((h) => ({
      icon: h.keys.includes(snap.k) ? '✓' : '＋',
      label: h.name,
      action: () => toggle(h, snap),
    }));
    if (items.length) items.push('-');
    items.push({ icon: '＋', label: t('newHaulItem'), action: () => newHaulModal(snap) });
    showMenu(menuPos.x, menuPos.y, t('addToHaulHead'), items);
  }

  async function toggle(h, snap) {
    try {
      if (h.keys.includes(snap.k)) {
        await A().api(`/hauls/${h.id}/items/${encodeURIComponent(snap.k)}`, { method: 'DELETE' });
        h.keys = h.keys.filter((x) => x !== snap.k);
        h.count--;
        toast(t('haulRemoved', { name: h.name }));
      } else {
        await A().api(`/hauls/${h.id}/items`, { method: 'POST', body: { items: [snap] } });
        h.keys.unshift(snap.k);
        h.count++;
        toast(t('haulAdded', { name: h.name }));
      }
    } catch (e) { toast(errText(e)); }
  }

  /* ---------- Crear haul ---------- */
  function newHaulModal(snap) {
    const { el, openModal, heading, closeBtn, errBox, showErr } = A().ui;
    const err = errBox();
    const input = el('input', { type: 'text', maxlength: '60', placeholder: t('haulNamePh'), 'aria-label': t('haulNameLabel'), required: true });
    const go = el('button', { class: 'btn modal-btn', type: 'submit', text: t('haulCreate') });
    const form = el('form', { class: 'modal-form', novalidate: true }, el('div', { class: 'field' }, input), err, go);
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!input.value.trim()) return;
      go.disabled = true;
      try {
        const h = await A().api('/hauls', { method: 'POST', body: { name: input.value } });
        if (snap) await A().api(`/hauls/${h.id}/items`, { method: 'POST', body: { items: [snap] } });
        A().ui.closeModal();
        await load();
        if (snap) toast(t('haulAdded', { name: h.name }));
        else if (activeTool === 'hauls') await openHaul(h.id);
      } catch (ex) {
        showErr(err, errText(ex));
        go.disabled = false;
      }
    });
    openModal(closeBtn(), ...heading(t('haulsNew') + ' haul'), form);
  }

  /* ---------- Pantalla de la herramienta ---------- */
  async function show() {
    const r = root();
    if (!A().isLoggedIn()) return renderLogin();
    r.replaceChildren(spinner());
    try { await load(); } catch { return renderLogin(); }
    if (cur && !list.some((h) => h.id === cur.id)) cur = null;
    if (cur) return openHaul(cur.id);
    renderList();
  }

  const spinner = () => A().ui.el('div', { class: 'modal-spin' }, A().ui.el('span', { class: 'spinner' }));

  function renderLogin() {
    const { el } = A().ui;
    const b = el('button', { class: 'btn', type: 'button', text: t('haulsLoginBtn'), onclick: () => A().login(show) });
    root().replaceChildren(el('div', { class: 'tool-empty' },
      el('strong', { text: t('haulsLoginTitle' ) }), el('span', { text: t('haulsLoginText') }), b));
  }

  function renderList() {
    const { el } = A().ui;
    cur = null;
    const head = el('div', { class: 'haul-head' },
      el('h2', { class: 'tool-title', text: t('haulsTitle') }),
      el('button', { class: 'btn ghost', type: 'button', text: `＋ ${t('haulsNew')}`, onclick: () => newHaulModal(null) }));
    const grid = el('div', { class: 'haul-grid' });
    for (const h of list) {
      const cover = el('div', { class: 'haul-cover' });
      for (let i = 0; i < 4; i++) {
        const cell = el('span', { class: 'haul-cell' });
        if (h.cover[i]) {
          const img = el('img', { src: h.cover[i], alt: '', loading: 'lazy', referrerpolicy: 'no-referrer' });
          img.onerror = () => img.remove();
          cell.append(img);
        }
        cover.append(cell);
      }
      const card = el('button', { class: 'haul-card', type: 'button', onclick: () => openHaul(h.id) },
        cover,
        el('span', { class: 'haul-name', text: h.name }),
        el('span', { class: 'haul-meta', text: h.count === 1 ? t('haulCount1') : t('haulCount', { n: h.count }) }));
      grid.append(card);
    }
    root().replaceChildren(head, list.length ? grid : el('p', { class: 'haul-empty', text: t('haulsEmpty') }));
  }

  async function openHaul(id) {
    root().replaceChildren(spinner());
    try {
      cur = await A().api(`/hauls/${id}`);
    } catch { return show(); }
    query = '';
    renderHaul();
  }

  // Búsqueda en todas las spreadsheets (la verificada y las importadas), sin importar cuál esté elegida en la lista
  function searchAll(q) {
    const tokens = norm(q).split(/\s+/).filter(Boolean);
    if (!tokens.length) return [];
    const seen = new Set();
    const out = [];
    for (const p of [...state.orig, ...state.imp]) {
      if (p.gone || !tokens.every((x) => p._n.includes(x))) continue;
      const k = keyOf(p.link);
      if (!k || seen.has(k)) continue;
      seen.add(k);
      out.push(p);
      if (out.length >= 40) break;
    }
    return out;
  }

  const inHaul = (k) => cur.items.some((x) => x.k === k);

  async function toggleHere(snap, btn) {
    btn.disabled = true;
    try {
      if (inHaul(snap.k)) {
        await A().api(`/hauls/${cur.id}/items/${encodeURIComponent(snap.k)}`, { method: 'DELETE' });
        cur.items = cur.items.filter((x) => x.k !== snap.k);
      } else {
        await A().api(`/hauls/${cur.id}/items`, { method: 'POST', body: { items: [snap] } });
        cur.items.unshift(snap);
      }
      paintItems();
    } catch (e) { toast(errText(e)); btn.disabled = false; }
  }

  function actCard(card, snap, mode) {
    const { el } = A().ui;
    const b = el('span', { class: `card-act ${mode}`, role: 'button', tabindex: '0', 'aria-label': t(mode === 'remove' ? 'haulRemove' : inHaul(snap.k) ? 'haulRemove' : 'haulAdd') });
    b.textContent = mode === 'remove' ? '×' : inHaul(snap.k) ? '✓' : '＋';
    if (mode === 'toggle' && inHaul(snap.k)) b.classList.add('on');
    const fire = (e) => { e.preventDefault(); e.stopPropagation(); toggleHere(snap, b); };
    b.addEventListener('click', fire);
    b.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') fire(e); });
    card.append(b);
    card.addEventListener('click', (e) => { e.preventDefault(); openProduct({ id: card.dataset.id, link: snap.l, name: snap.n || t('importedProduct') }); });
    return card;
  }

  function renderHaul() {
    const { el } = A().ui;
    const back = el('button', { class: 'haul-back', type: 'button', onclick: () => { cur = null; show(); } });
    back.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    back.append(document.createTextNode(t('haulBack')));
    const name = el('input', { class: 'haul-title', type: 'text', value: cur.name, maxlength: '60', 'aria-label': t('haulRename') });
    name.addEventListener('keydown', (e) => { if (e.key === 'Enter') name.blur(); });
    name.addEventListener('change', async () => {
      const v = name.value.trim();
      if (!v) { name.value = cur.name; return; }
      try { await A().api(`/hauls/${cur.id}`, { method: 'PUT', body: { name: v } }); cur.name = v; } catch { name.value = cur.name; }
    });
    const del = el('button', { class: 'btn ghost', type: 'button', text: t('haulDelete') });
    let armed = false;
    del.onclick = async () => {
      if (!armed) {
        armed = true;
        del.textContent = t('confirmAgain');
        del.classList.add('danger');
        setTimeout(() => { armed = false; del.textContent = t('haulDelete'); del.classList.remove('danger'); }, 4000);
        return;
      }
      try { await A().api(`/hauls/${cur.id}`, { method: 'DELETE' }); cur = null; show(); } catch { toast(t('errGeneric')); }
    };

    const search = el('input', { type: 'search', id: 'haulSearch', placeholder: t('haulSearch'), 'aria-label': t('haulSearch'), autocomplete: 'off', spellcheck: 'false' });
    search.addEventListener('input', () => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => { query = search.value; paintItems(); }, 150);
    });
    const wrap = el('div', { class: 'search-wrap' }, search);
    wrap.insertAdjacentHTML('afterbegin', '<svg class="search-ico" viewBox="0 0 24 24" width="16" height="16"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 20l-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>');

    root().replaceChildren(
      el('div', { class: 'haul-bar' }, back, del),
      name,
      wrap,
      el('div', { class: 'haul-body', id: 'haulBody' }));
    paintItems();
  }

  function paintItems() {
    const { el } = A().ui;
    const body = $('haulBody');
    if (!body) return;
    const keep = body.scrollTop;
    body.replaceChildren();
    const results = searchAll(query);
    if (query.trim()) {
      body.append(el('h3', { class: 'haul-sub', text: t('haulResults') }));
      if (!results.length) body.append(el('p', { class: 'haul-empty', text: t('haulNoResults') }));
      const g = el('div', { class: 'grid' });
      for (const p of results) {
        const snap = snapshot(p);
        if (snap) g.append(actCard(cardFor(p), snap, 'toggle'));
      }
      body.append(g);
    }
    const n = cur.items.length;
    body.append(el('h3', { class: 'haul-sub', text: n === 1 ? t('haulCount1') : t('haulCount', { n }) }));
    if (!n) body.append(el('p', { class: 'haul-empty', text: t('haulEmptyItems') }));
    const g = el('div', { class: 'grid' });
    for (const it of cur.items) g.append(actCard(cardFor(itemProduct(it)), it, 'remove'));
    body.append(g);
    body.scrollTop = keep;
  }

  // Al iniciar o cerrar sesión se descarta lo cargado
  function onSession() {
    list = null;
    cur = null;
    if (typeof activeTool !== 'undefined' && activeTool === 'hauls') show();
  }

  return { show, addMenu, onSession };
})();
window.Hauls = Hauls;
