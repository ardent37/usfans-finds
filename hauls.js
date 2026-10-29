/* ============================================================
   Mis hauls: álbumes de productos favoritos, guardados en la cuenta.
   - Se añaden con clic derecho en cualquier producto, y desde dentro del haul se puede buscar en todas las spreadsheets.
   - Cada haul admite subcarpetas (un solo nivel) y se puede compartir con un enlace de solo lectura.
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
  haulNoPrice: '{n} sin precio todavía',
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
  haulProducts: 'Productos',
  haulFolders: 'Subcarpetas',
  addToHaul: 'Añadir a un haul…',
  addToHaulHead: 'Añadir a…',
  newHaulItem: 'Nuevo haul…',
  haulAdded: 'Añadido a «{name}»',
  haulRemoved: 'Quitado de «{name}»',
  haulMaxHauls: 'Has llegado al máximo de hauls.',
  haulMaxItems: 'Este haul está lleno.',
  haulMaxFolders: 'Has llegado al máximo de subcarpetas.',
  haulRename: 'Renombrar',
  folderAdd: 'Añadir subcarpeta',
  folderNew: 'Nueva subcarpeta',
  folderNameLabel: 'Nombre de la subcarpeta',
  folderNamePh: 'Ej: Zapatillas',
  folderCreate: 'Crear subcarpeta',
  folderDelete: 'Eliminar subcarpeta',
  folderDeleteHint: 'Los productos vuelven al haul.',
  folderRoot: 'Sin subcarpeta (el haul)',
  folderMove: 'Mover a…',
  folderIn: 'Añadir a «{name}»',
  shareBtn: 'Compartir',
  shareTitle: 'Compartir este haul',
  shareText: 'Cualquiera con este enlace podrá ver el haul (no podrá modificarlo). Si cambias el haul, el enlace mostrará los cambios.',
  shareCopy: 'Copiar enlace',
  shareCopied: 'Enlace copiado',
  shareSystem: 'Compartir…',
  shareStop: 'Dejar de compartir',
  sharedBadge: 'Haul compartido',
  sharedSave: 'Guardar en mis hauls',
  sharedSaved: 'Guardado en tus hauls',
  sharedGone: 'Este haul ya no está compartido o el enlace no es válido.',
  sharedClose: 'Cerrar',
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
  haulNoPrice: '{n} without a price yet',
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
  haulProducts: 'Products',
  haulFolders: 'Subfolders',
  addToHaul: 'Add to a haul…',
  addToHaulHead: 'Add to…',
  newHaulItem: 'New haul…',
  haulAdded: 'Added to “{name}”',
  haulRemoved: 'Removed from “{name}”',
  haulMaxHauls: 'You’ve reached the maximum number of hauls.',
  haulMaxItems: 'This haul is full.',
  haulMaxFolders: 'You’ve reached the maximum number of subfolders.',
  haulRename: 'Rename',
  folderAdd: 'Add subfolder',
  folderNew: 'New subfolder',
  folderNameLabel: 'Subfolder name',
  folderNamePh: 'e.g. Sneakers',
  folderCreate: 'Create subfolder',
  folderDelete: 'Delete subfolder',
  folderDeleteHint: 'Products go back to the haul.',
  folderRoot: 'No subfolder (the haul)',
  folderMove: 'Move to…',
  folderIn: 'Add to “{name}”',
  shareBtn: 'Share',
  shareTitle: 'Share this haul',
  shareText: 'Anyone with this link can view the haul (but not change it). If you change the haul, the link will show the changes.',
  shareCopy: 'Copy link',
  shareCopied: 'Link copied',
  shareSystem: 'Share…',
  shareStop: 'Stop sharing',
  sharedBadge: 'Shared haul',
  sharedSave: 'Save to my hauls',
  sharedSaved: 'Saved to your hauls',
  sharedGone: 'This haul is no longer shared or the link isn’t valid.',
  sharedClose: 'Close',
});

const Hauls = (() => {
  const A = () => window.Accounts;
  const root = () => $('tool-hauls');
  const U = () => A().ui;
  let list = null;      // hauls de la cuenta: { id, name, count, total, unpriced, keys, cover, folders }
  let cur = null;       // haul abierto: { id, name, share, folders, items }
  let folderId = null;  // subcarpeta abierta dentro de cur (null = el haul)
  let shared = null;    // haul compartido que se está viendo (solo lectura): { sid, data }
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

  const itemProduct = (it, readOnly) => ({
    id: `h${it.k}`, name: it.n || t('importedProduct'), unnamed: !it.n, link: it.l, image: it.i, priceRaw: it.p,
    categories: [], sections: [], src: it.i && it.p ? 0 : 1, done: !!(it.i && it.p), _n: '', haulKey: readOnly ? null : it.k,
  });

  const errText = (e) => ({ max_hauls: t('haulMaxHauls'), max_items: t('haulMaxItems'), max_folders: t('haulMaxFolders') }[e.code] || t('errGeneric'));

  const money = (n) => n.toLocaleString(locale(), { style: 'currency', currency: 'EUR' });
  const countText = (n) => (n === 1 ? t('haulCount1') : t('haulCount', { n }));

  // Suma de los precios que se conocen; si falta alguno se marca con «+» (y el aviso va en el título)
  function totals(items) {
    let total = 0;
    let unpriced = 0;
    for (const it of items) {
      const n = parsePrice(it.p);
      if (Number.isNaN(n)) unpriced++; else total += n;
    }
    return { total: Math.round(total * 100) / 100, unpriced };
  }

  function summary(count, total, unpriced) {
    const el = document.createElement('span');
    el.textContent = count ? `${countText(count)} · ${money(total)}${unpriced ? '+' : ''}` : countText(0);
    if (unpriced) el.title = t('haulNoPrice', { n: unpriced });
    return el;
  }

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

  const spinner = () => U().el('div', { class: 'modal-spin' }, U().el('span', { class: 'spinner' }));

  // Botón que pide una segunda pulsación para confirmar
  function twice(label, action) {
    const b = U().el('button', { class: 'btn ghost', type: 'button', text: label });
    let armed = false;
    b.onclick = () => {
      if (!armed) {
        armed = true;
        b.textContent = t('confirmAgain');
        b.classList.add('danger');
        setTimeout(() => { armed = false; b.textContent = label; b.classList.remove('danger'); }, 4000);
        return;
      }
      action();
    };
    return b;
  }

  /* ---------- Añadir desde el clic derecho ---------- */
  async function addMenu(p) {
    if (!A().isLoggedIn()) return A().login(() => addMenu(p));
    const snap = snapshot(p);
    if (!snap) return;
    try { await load(); } catch { return toast(t('errGeneric')); }
    const items = list.map((h) => ({
      icon: h.keys.includes(snap.k) ? '✓' : '＋',
      label: h.name,
      action: () => pickTarget(h, snap),
    }));
    if (items.length) items.push('-');
    items.push({ icon: '＋', label: t('newHaulItem'), action: () => newHaulModal(snap) });
    showMenu(menuPos.x, menuPos.y, t('addToHaulHead'), items);
  }

  // Si el haul tiene subcarpetas, se pregunta en cuál
  function pickTarget(h, snap) {
    if (h.keys.includes(snap.k) || !h.folders.length) return toggle(h, snap, null);
    const items = [
      { icon: '↰', label: t('folderRoot'), action: () => toggle(h, snap, null) },
      ...h.folders.map((f) => ({ icon: '▸', label: f.name, action: () => toggle(h, snap, f.id) })),
    ];
    showMenu(menuPos.x, menuPos.y, h.name, items);
  }

  async function toggle(h, snap, folder) {
    try {
      if (h.keys.includes(snap.k)) {
        await A().api(`/hauls/${h.id}/items/${encodeURIComponent(snap.k)}`, { method: 'DELETE' });
        h.keys = h.keys.filter((x) => x !== snap.k);
        h.count--;
        toast(t('haulRemoved', { name: h.name }));
      } else {
        await A().api(`/hauls/${h.id}/items`, { method: 'POST', body: { items: [snap], folder } });
        h.keys.unshift(snap.k);
        h.count++;
        toast(t('haulAdded', { name: h.name }));
      }
    } catch (e) { toast(errText(e)); }
  }

  /* ---------- Ventanas: nuevo haul, nueva subcarpeta, compartir ---------- */
  function nameModal({ title, label, ph, button, onSubmit }) {
    const { el, openModal, heading, closeBtn, errBox, showErr } = U();
    const err = errBox();
    const input = el('input', { type: 'text', maxlength: '60', placeholder: ph, 'aria-label': label, required: true });
    const go = el('button', { class: 'btn modal-btn', type: 'submit', text: button });
    const form = el('form', { class: 'modal-form', novalidate: true }, el('div', { class: 'field' }, input), err, go);
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!input.value.trim()) return;
      go.disabled = true;
      try {
        await onSubmit(input.value.trim());
        U().closeModal();
      } catch (ex) {
        showErr(err, errText(ex));
        go.disabled = false;
      }
    });
    openModal(closeBtn(), ...heading(title), form);
  }

  function newHaulModal(snap) {
    nameModal({
      title: `${t('haulsNew')} haul`, label: t('haulNameLabel'), ph: t('haulNamePh'), button: t('haulCreate'),
      onSubmit: async (name) => {
        const h = await A().api('/hauls', { method: 'POST', body: { name } });
        if (snap) await A().api(`/hauls/${h.id}/items`, { method: 'POST', body: { items: [snap] } });
        await load();
        if (snap) toast(t('haulAdded', { name: h.name }));
        else if (activeTool === 'hauls') await openHaul(h.id);
      },
    });
  }

  function newFolderModal() {
    nameModal({
      title: t('folderNew'), label: t('folderNameLabel'), ph: t('folderNamePh'), button: t('folderCreate'),
      onSubmit: async (name) => {
        const f = await A().api(`/hauls/${cur.id}/folders`, { method: 'POST', body: { name } });
        cur.folders.push({ id: f.id, name: f.name });
        renderHaul();
      },
    });
  }

  async function shareModal() {
    const { el, openModal, heading, closeBtn } = U();
    let sid;
    try { sid = (await A().api(`/hauls/${cur.id}/share`, { method: 'POST' })).share; } catch { return toast(t('errGeneric')); }
    cur.share = sid;
    const url = `${location.origin}/?haul=${sid}`;
    const field = el('input', { type: 'text', readonly: true, value: url, 'aria-label': t('shareTitle') });
    field.addEventListener('focus', () => field.select());
    const copy = el('button', { class: 'btn modal-btn', type: 'button', text: t('shareCopy') });
    copy.onclick = async () => {
      try { await navigator.clipboard.writeText(url); } catch { field.select(); document.execCommand('copy'); }
      copy.textContent = `✓ ${t('shareCopied')}`;
      setTimeout(() => { copy.textContent = t('shareCopy'); }, 1800);
    };
    const stop = twice(t('shareStop'), async () => {
      try { await A().api(`/hauls/${cur.id}/share`, { method: 'DELETE' }); cur.share = null; U().closeModal(); } catch { toast(t('errGeneric')); }
    });
    const native = navigator.share ? el('button', { class: 'btn ghost', type: 'button', text: t('shareSystem'), onclick: () => navigator.share({ title: cur.name, url }).catch(() => {}) }) : null;
    openModal(closeBtn(), ...heading(t('shareTitle'), t('shareText')),
      el('div', { class: 'modal-form' }, el('div', { class: 'field' }, field), copy, el('div', { class: 'modal-row spread' }, native || el('span'), stop)));
  }

  /* ---------- Lista de hauls ---------- */
  async function show() {
    if (shared) return renderShared();
    if (!A().isLoggedIn()) return renderLogin();
    root().replaceChildren(spinner());
    try { await load(); } catch { return renderLogin(); }
    if (cur && !list.some((h) => h.id === cur.id)) { cur = null; folderId = null; }
    if (cur) return openHaul(cur.id, folderId);
    renderList();
  }

  function renderLogin() {
    const { el } = U();
    const b = el('button', { class: 'btn', type: 'button', text: t('haulsLoginBtn'), onclick: () => A().login(show) });
    root().replaceChildren(el('div', { class: 'tool-empty' },
      el('strong', { text: t('haulsLoginTitle') }), el('span', { text: t('haulsLoginText') }), b));
  }

  function mosaic(images) {
    const { el } = U();
    const cover = el('div', { class: 'haul-cover' });
    for (let i = 0; i < 4; i++) {
      const cell = el('span', { class: 'haul-cell' });
      if (images[i]) {
        const img = el('img', { src: images[i], alt: '', loading: 'lazy', referrerpolicy: 'no-referrer' });
        img.onerror = () => img.remove();
        cell.append(img);
      }
      cover.append(cell);
    }
    return cover;
  }

  function renderList() {
    const { el } = U();
    cur = null;
    folderId = null;
    const head = el('div', { class: 'haul-head' },
      el('h2', { class: 'tool-title', text: t('haulsTitle') }),
      el('button', { class: 'btn ghost', type: 'button', text: `＋ ${t('haulsNew')}`, onclick: () => newHaulModal(null) }));
    const grid = el('div', { class: 'haul-grid' });
    for (const h of list) {
      grid.append(el('button', { class: 'haul-card', type: 'button', onclick: () => openHaul(h.id) },
        mosaic(h.cover),
        el('span', { class: 'haul-name', text: h.name }),
        el('span', { class: 'haul-meta' }, summary(h.count, h.total, h.unpriced))));
    }
    root().replaceChildren(head, list.length ? grid : el('p', { class: 'haul-empty', text: t('haulsEmpty') }));
  }

  async function openHaul(id, folder = null) {
    root().replaceChildren(spinner());
    try {
      cur = await A().api(`/hauls/${id}`);
    } catch { return show(); }
    folderId = cur.folders.some((f) => f.id === folder) ? folder : null;
    query = '';
    renderHaul();
  }

  /* ---------- Dentro de un haul o de una subcarpeta ---------- */
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
  const itemsHere = () => cur.items.filter((x) => (x.f || null) === folderId);
  const folder = () => cur.folders.find((f) => f.id === folderId);

  async function toggleHere(snap, btn) {
    btn.classList.add('busy');
    try {
      if (inHaul(snap.k)) {
        await A().api(`/hauls/${cur.id}/items/${encodeURIComponent(snap.k)}`, { method: 'DELETE' });
        cur.items = cur.items.filter((x) => x.k !== snap.k);
      } else {
        await A().api(`/hauls/${cur.id}/items`, { method: 'POST', body: { items: [snap], folder: folderId } });
        cur.items.unshift({ ...snap, f: folderId });
      }
      paintBody();
    } catch (e) { toast(errText(e)); btn.classList.remove('busy'); }
  }

  async function moveItem(k, to) {
    try {
      await A().api(`/hauls/${cur.id}/items/move`, { method: 'POST', body: { k, folder: to } });
      const it = cur.items.find((x) => x.k === k);
      if (it) it.f = to;
      paintBody();
    } catch (e) { toast(errText(e)); }
  }

  function moveMenu(it, ev) {
    const items = [];
    if (it.f) items.push({ icon: '↰', label: t('folderRoot'), action: () => moveItem(it.k, null) });
    for (const f of cur.folders) if (f.id !== it.f) items.push({ icon: '▸', label: f.name, action: () => moveItem(it.k, f.id) });
    if (items.length) showMenu(ev.clientX, ev.clientY, t('folderMove'), items);
  }

  function actBtn(kind, label, text, onClick) {
    const b = U().el('span', { class: `card-act ${kind}`, role: 'button', tabindex: '0', 'aria-label': label, text });
    const fire = (e) => { e.preventDefault(); e.stopPropagation(); onClick(e, b); };
    b.addEventListener('click', fire);
    b.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') fire(e); });
    return b;
  }

  function openCard(card, snap) {
    card.addEventListener('click', (e) => { e.preventDefault(); openProduct({ id: card.dataset.id, link: snap.l, name: snap.n || t('importedProduct') }); });
    return card;
  }

  function resultCard(p) {
    const snap = snapshot(p);
    if (!snap) return null;
    const card = openCard(cardFor(p), snap);
    const on = inHaul(snap.k);
    const b = actBtn(`toggle${on ? ' on' : ''}`, t(on ? 'haulRemove' : 'haulAdd'), on ? '✓' : '＋', (e, btn) => toggleHere(snap, btn));
    card.append(b);
    return card;
  }

  function itemCard(it) {
    const card = openCard(cardFor(itemProduct(it)), it);
    if (cur.folders.length) {
      const canMove = cur.folders.length > (it.f ? 0 : 0);
      if (canMove) card.append(actBtn('move', t('folderMove'), '▸', (e) => moveMenu(it, e)));
    }
    card.append(actBtn('remove', t('haulRemove'), '×', (e, btn) => toggleHere(it, btn)));
    return card;
  }

  function folderTile(f) {
    const { el } = U();
    const its = cur.items.filter((x) => x.f === f.id);
    const { total, unpriced } = totals(its);
    const tile = el('button', { class: 'card folder-card', type: 'button', onclick: () => { folderId = f.id; query = ''; renderHaul(); } },
      el('div', { class: 'thumb' }, mosaic(its.map((x) => x.i).filter(Boolean))),
      el('div', { class: 'meta' }, el('span', { class: 'name', text: f.name }), el('span', { class: 'price' }, summary(its.length, total, unpriced))));
    return tile;
  }

  function addFolderTile() {
    const { el } = U();
    const tile = el('button', { class: 'card add-card', type: 'button', onclick: newFolderModal },
      el('div', { class: 'thumb' }));
    tile.querySelector('.thumb').innerHTML = '<svg viewBox="0 0 24 24" width="40" height="40" aria-hidden="true"><path d="M3.5 8.2A2.2 2.2 0 0 1 5.7 6h3.2c.5 0 1 .2 1.3.6l.8 1c.3.4.8.6 1.3.6h5.9a2.2 2.2 0 0 1 2.2 2.2v6.4a2.2 2.2 0 0 1-2.2 2.2H5.7a2.2 2.2 0 0 1-2.2-2.2z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 11.2v4.6M9.7 13.5h4.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
    tile.append(el('div', { class: 'meta' }, el('span', { class: 'name', text: t('folderAdd') })));
    return tile;
  }

  function renderHaul() {
    const { el } = U();
    const inFolder = !!folderId;
    const here = inFolder ? folder() : null;

    const back = el('button', { class: 'haul-back', type: 'button', onclick: () => { if (inFolder) { folderId = null; query = ''; renderHaul(); } else { cur = null; show(); } } });
    back.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    back.append(document.createTextNode(inFolder ? cur.name : t('haulBack')));

    const title = el('input', { class: 'haul-title', type: 'text', value: inFolder ? here.name : cur.name, maxlength: '60', 'aria-label': t('haulRename') });
    title.addEventListener('keydown', (e) => { if (e.key === 'Enter') title.blur(); });
    title.addEventListener('change', async () => {
      const v = title.value.trim();
      const old = inFolder ? here.name : cur.name;
      if (!v) { title.value = old; return; }
      try {
        await A().api(inFolder ? `/hauls/${cur.id}/folders/${folderId}` : `/hauls/${cur.id}`, { method: 'PUT', body: { name: v } });
        if (inFolder) here.name = v; else cur.name = v;
      } catch { title.value = old; }
    });

    const del = inFolder
      ? twice(t('folderDelete'), async () => {
        try { await A().api(`/hauls/${cur.id}/folders/${folderId}`, { method: 'DELETE' }); await openHaul(cur.id); } catch { toast(t('errGeneric')); }
      })
      : twice(t('haulDelete'), async () => {
        try { await A().api(`/hauls/${cur.id}`, { method: 'DELETE' }); cur = null; show(); } catch { toast(t('errGeneric')); }
      });
    const share = inFolder ? null : el('button', { class: 'btn ghost', type: 'button', onclick: shareModal });
    if (share) share.innerHTML = '<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="M12 15V4m0 0L8 8m4-4 4 4M5 13v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    if (share) share.append(document.createTextNode(` ${t('shareBtn')}`));

    const search = el('input', { type: 'search', id: 'haulSearch', placeholder: t('haulSearch'), 'aria-label': t('haulSearch'), autocomplete: 'off', spellcheck: 'false' });
    search.addEventListener('input', () => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => { query = search.value; paintBody(); }, 150);
    });
    const wrap = el('div', { class: 'search-wrap' }, search);
    wrap.insertAdjacentHTML('afterbegin', '<svg class="search-ico" viewBox="0 0 24 24" width="16" height="16"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 20l-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>');

    root().replaceChildren(
      el('div', { class: 'haul-bar' }, back, el('span', { class: 'haul-actions' }, share, del)),
      title,
      el('p', { class: 'haul-total', id: 'haulTotal' }),
      wrap,
      el('div', { class: 'haul-body', id: 'haulBody' }));
    paintBody();
  }

  function paintBody() {
    const { el } = U();
    const body = $('haulBody');
    if (!body) return;
    const keep = body.scrollTop;
    body.replaceChildren();

    const scope = folderId ? cur.items.filter((x) => x.f === folderId) : cur.items;
    const { total, unpriced } = totals(scope);
    $('haulTotal').replaceChildren(summary(scope.length, total, unpriced));

    if (query.trim()) {
      const results = searchAll(query);
      body.append(el('h3', { class: 'haul-sub', text: t('haulResults') }));
      if (!results.length) body.append(el('p', { class: 'haul-empty', text: t('haulNoResults') }));
      const g = el('div', { class: 'grid' });
      for (const p of results) { const c = resultCard(p); if (c) g.append(c); }
      body.append(g);
    }

    if (!folderId) {
      body.append(el('h3', { class: 'haul-sub', text: t('haulFolders') }));
      const fg = el('div', { class: 'grid' }, addFolderTile(), ...cur.folders.map(folderTile));
      body.append(fg);
    }

    const mine = itemsHere();
    body.append(el('h3', { class: 'haul-sub', text: `${t('haulProducts')} · ${mine.length}` }));
    if (!mine.length) body.append(el('p', { class: 'haul-empty', text: t('haulEmptyItems') }));
    const g = el('div', { class: 'grid' });
    for (const it of mine) g.append(itemCard(it));
    body.append(g);
    body.scrollTop = keep;
  }

  /* ---------- Haul compartido (solo lectura) ---------- */
  async function showShared(sid) {
    shared = { sid, data: null };
    if (typeof setDrawer === 'function') setDrawer(true);
    showTool('hauls');
  }

  async function renderShared() {
    const { el } = U();
    const sh = shared;
    if (!sh.data) {
      root().replaceChildren(spinner());
      try { sh.data = await A().api(`/shared/${sh.sid}`); } catch { sh.data = { gone: true }; }
    }
    const close = () => { shared = null; try { history.replaceState(null, '', location.pathname); } catch { /* sin historial */ } show(); };
    if (sh.data.gone) {
      return root().replaceChildren(el('div', { class: 'tool-empty' },
        el('strong', { text: t('sharedBadge') }), el('span', { text: t('sharedGone') }),
        el('button', { class: 'btn', type: 'button', text: t('sharedClose'), onclick: close })));
    }
    const d = sh.data;
    const { total, unpriced } = totals(d.items);
    const save = el('button', { class: 'btn', type: 'button', text: t('sharedSave') });
    save.onclick = async () => {
      if (!A().isLoggedIn()) return A().login(() => save.click());
      save.disabled = true;
      try {
        const r = await A().api(`/shared/${sh.sid}/copy`, { method: 'POST' });
        toast(t('sharedSaved'));
        shared = null;
        try { history.replaceState(null, '', location.pathname); } catch { /* sin historial */ }
        cur = null;
        await load();
        await openHaul(r.id);
      } catch (e) { toast(errText(e)); save.disabled = false; }
    };
    const body = el('div', { class: 'haul-body' });
    const section = (title, its) => {
      if (!its.length) return;
      if (title) body.append(el('h3', { class: 'haul-sub', text: title }));
      const g = el('div', { class: 'grid' });
      for (const it of its) g.append(openCard(cardFor(itemProduct(it, true)), it));
      body.append(g);
    };
    section('', d.items.filter((x) => !x.f));
    for (const f of d.folders) section(f.name, d.items.filter((x) => x.f === f.id));
    root().replaceChildren(
      el('div', { class: 'haul-bar' }, el('span', { class: 'haul-badge', text: t('sharedBadge') }), el('button', { class: 'btn ghost', type: 'button', text: t('sharedClose'), onclick: close })),
      el('h2', { class: 'haul-title static', text: d.name }),
      el('p', { class: 'haul-total' }, summary(d.items.length, total, unpriced)),
      el('div', { class: 'haul-save' }, save),
      body);
  }

  /* ---------- Fotos y precios que se completan al ver el producto ---------- */
  const pending = new Map();
  let flushTimer = 0;
  function enriched(p) {
    if (!p.haulKey || !cur) return;
    const it = cur.items.find((x) => x.k === p.haulKey);
    if (!it) return;
    it.n = p.unnamed ? '' : p.name;
    it.i = p.image || it.i;
    it.p = p.priceRaw || it.p;
    pending.set(it.k, { l: it.l, n: it.n, i: it.i, p: it.p });
    clearTimeout(flushTimer);
    flushTimer = setTimeout(flush, 2500);
  }
  async function flush() {
    if (!cur || !pending.size) return;
    const items = [...pending.values()];
    pending.clear();
    try { await A().api(`/hauls/${cur.id}/items`, { method: 'POST', body: { items, update: true } }); } catch { /* se reintentará la próxima vez */ }
    if ($('haulTotal')) {
      const scope = folderId ? cur.items.filter((x) => x.f === folderId) : cur.items;
      const { total, unpriced } = totals(scope);
      $('haulTotal').replaceChildren(summary(scope.length, total, unpriced));
    }
  }

  // Al iniciar o cerrar sesión se descarta lo cargado
  function onSession() {
    list = null;
    cur = null;
    folderId = null;
    if (typeof activeTool !== 'undefined' && activeTool === 'hauls') show();
  }

  // Enlace compartido: ?haul=ID
  function start() {
    const sid = new URLSearchParams(location.search).get('haul');
    if (sid && /^[\w-]{8,24}$/.test(sid)) showShared(sid);
  }

  return { show, addMenu, onSession, enriched, start };
})();
window.Hauls = Hauls;
