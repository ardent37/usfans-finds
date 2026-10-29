/* ============================================================
   Cuentas e importación de spreadsheets
   - Acceso con correo y código de 6 dígitos (sin contraseñas); la sesión se recuerda en este navegador.
   - Importar una hoja de Google Sheets pública (solo lectura) y ver sus productos junto a los de la hoja original.
   Usa las funciones de app.js (t, parseProductLink, withRef, setImported, state, norm, parsePrice…).
   ============================================================ */
Object.assign(I18N.es, {
  account: 'Cuenta',
  mineHint: 'Ver solo los productos de mis hojas importadas',
  importTitle: 'Importar una spreadsheet',
  importShort: 'Importar',
  loginTitle: 'Entra o crea tu cuenta',
  loginText: 'Te enviamos un código por correo. Sin contraseñas.',
  loginEmail: 'Tu correo electrónico',
  loginSend: 'Enviar código',
  loginMarketing: 'Quiero recibir novedades y ofertas por correo (opcional)',
  loginPrivacy: 'Usamos tu correo solo para tu cuenta. Puedes borrarla cuando quieras.',
  loginCodeTitle: 'Revisa tu correo',
  loginCodeText: 'Hemos enviado un código de 6 dígitos a {email}.',
  loginCode: 'Código de 6 dígitos',
  loginVerify: 'Entrar',
  loginResend: 'Reenviar código',
  loginBack: 'Cambiar de correo',
  loginDevCode: 'Modo local: no se envía ningún correo. Tu código es {code}.',
  errBadEmail: 'Ese correo no parece válido.',
  errWait: 'Espera unos segundos antes de pedir otro código.',
  errTooMany: 'Demasiados intentos. Inténtalo más tarde.',
  errBadCode: 'Código incorrecto.',
  errExpired: 'El código ha caducado. Pide uno nuevo.',
  errGeneric: 'Algo ha fallado. Inténtalo de nuevo.',
  errMail: 'No se pudo enviar el correo. Inténtalo más tarde.',
  accTitle: 'Tu cuenta',
  accMarketing: 'Recibir novedades y ofertas por correo',
  accImports: 'Hojas importadas',
  accNoImports: 'Aún no has importado ninguna hoja.',
  accProducts: '{n} productos',
  accDeleteImport: 'Eliminar',
  accSignOut: 'Cerrar sesión',
  accDelete: 'Borrar mi cuenta y mis datos',
  accDeleteConfirm: '¿Seguro? Se borrarán tu cuenta y todas tus hojas importadas. No se puede deshacer.',
  accDeleteImportConfirm: '¿Eliminar esta hoja importada?',
  importModalTitle: 'Importar una spreadsheet',
  importIntro: 'Pega el enlace de una hoja de Google Sheets compartida como «cualquiera con el enlace puede ver». Solo se lee; nunca se modifica. Los productos son privados: solo los verás tú.',
  importUrlPh: 'https://docs.google.com/spreadsheets/d/…',
  importAnalyze: 'Analizar',
  importTabsTitle: 'Pestañas de la hoja',
  importTabsContinue: 'Continuar',
  importScanning: 'Buscando productos…',
  importName: 'Nombre de la hoja',
  importFound: 'Hemos encontrado {n} productos.',
  verifiedProducts: 'Productos verificados',
  sourceAll: 'Usar todas mis spreadsheets',
  sourceAllShort: 'Todas mis spreadsheets',
  confirmAgain: 'Pulsa otra vez para confirmar',
  importedProduct: 'Producto',
  importSaving: 'Guardando…',
  importFoundSkipped: '{n} enlaces no son compatibles y se omitirán.',
  importFoundKnown: '{n} ya están en la hoja original.',
  importStart: 'Importar',
  importProgress: 'Importando {done} de {total}…',
  importDone: 'Listo: {n} productos importados.',
  importUnavailable: '{n} no están disponibles en USFans y se han omitido.',
  importCancel: 'Cancelar',
  importClose: 'Cerrar',
  importCancelled: 'Importación detenida: se han guardado {n} productos.',
  importNone: 'No hemos encontrado enlaces de productos de Taobao, Weidian o 1688 en esa hoja.',
  importBlocked: 'No hemos podido leer los productos de esa hoja. Puede que su propietario haya desactivado la descarga y la copia para los lectores.',
  importPrivate: 'No se puede leer esa hoja. Tiene que estar compartida como «cualquiera con el enlace puede ver».',
  importNotFound: 'No encontramos esa hoja. Revisa el enlace.',
  importBadUrl: 'Pega un enlace de Google Sheets (docs.google.com/spreadsheets/…).',
  importTooBig: 'La hoja es demasiado grande.',
  importMax: 'Has llegado al máximo de hojas importadas. Elimina alguna desde tu cuenta.',
  importMaxProducts: 'Superarías el máximo de productos importados. Elimina alguna hoja desde tu cuenta.',
  importLimited: 'USFans está limitando las consultas. Esperando un momento…',
});
Object.assign(I18N.en, {
  account: 'Account',
  mineHint: 'Show only products from my imported sheets',
  importTitle: 'Import a spreadsheet',
  importShort: 'Import',
  loginTitle: 'Sign in or create your account',
  loginText: 'We’ll email you a code. No passwords.',
  loginEmail: 'Your email address',
  loginSend: 'Send code',
  loginMarketing: 'I’d like to receive news and offers by email (optional)',
  loginPrivacy: 'We only use your email for your account. You can delete it anytime.',
  loginCodeTitle: 'Check your email',
  loginCodeText: 'We’ve sent a 6-digit code to {email}.',
  loginCode: '6-digit code',
  loginVerify: 'Sign in',
  loginResend: 'Resend code',
  loginBack: 'Use a different email',
  loginDevCode: 'Local mode: no email is sent. Your code is {code}.',
  errBadEmail: 'That email doesn’t look valid.',
  errWait: 'Wait a few seconds before asking for another code.',
  errTooMany: 'Too many attempts. Try again later.',
  errBadCode: 'Wrong code.',
  errExpired: 'The code has expired. Request a new one.',
  errGeneric: 'Something went wrong. Please try again.',
  errMail: 'The email couldn’t be sent. Try again later.',
  accTitle: 'Your account',
  accMarketing: 'Receive news and offers by email',
  accImports: 'Imported sheets',
  accNoImports: 'You haven’t imported any sheet yet.',
  accProducts: '{n} products',
  accDeleteImport: 'Delete',
  accSignOut: 'Sign out',
  accDelete: 'Delete my account and data',
  accDeleteConfirm: 'Are you sure? Your account and all imported sheets will be deleted. This can’t be undone.',
  accDeleteImportConfirm: 'Delete this imported sheet?',
  importModalTitle: 'Import a spreadsheet',
  importIntro: 'Paste the link of a Google Sheet shared as “anyone with the link can view”. It’s read-only and never modified. Imported products are private: only you will see them.',
  importUrlPh: 'https://docs.google.com/spreadsheets/d/…',
  importAnalyze: 'Analyze',
  importTabsTitle: 'Sheet tabs',
  importTabsContinue: 'Continue',
  importScanning: 'Looking for products…',
  importName: 'Sheet name',
  importFound: 'We found {n} products.',
  verifiedProducts: 'Verified products',
  sourceAll: 'Use all my spreadsheets',
  sourceAllShort: 'All my spreadsheets',
  confirmAgain: 'Tap again to confirm',
  importedProduct: 'Product',
  importSaving: 'Saving…',
  importFoundSkipped: '{n} links aren’t supported and will be skipped.',
  importFoundKnown: '{n} are already in the original sheet.',
  importStart: 'Import',
  importProgress: 'Importing {done} of {total}…',
  importDone: 'Done: {n} products imported.',
  importUnavailable: '{n} aren’t available on USFans and were skipped.',
  importCancel: 'Cancel',
  importClose: 'Close',
  importCancelled: 'Import stopped: {n} products were saved.',
  importNone: 'We couldn’t find Taobao, Weidian or 1688 product links in that sheet.',
  importBlocked: 'We couldn’t read the products in that sheet. Its owner may have turned off downloading and copying for viewers.',
  importPrivate: 'That sheet can’t be read. It must be shared as “anyone with the link can view”.',
  importNotFound: 'We couldn’t find that sheet. Check the link.',
  importBadUrl: 'Paste a Google Sheets link (docs.google.com/spreadsheets/…).',
  importTooBig: 'That sheet is too big.',
  importMax: 'You’ve reached the maximum number of imported sheets. Delete one from your account.',
  importMaxProducts: 'You’d exceed the maximum number of imported products. Delete a sheet from your account.',
  importLimited: 'USFans is limiting requests. Waiting a moment…',
});

const Accounts = (() => {
  const API = CONFIG.accountApi;
  const TOKEN_KEY = 'accToken';
  let me = null;
  let token = null;
  let busy = false; // hay una importación en marcha

  const store = {
    get() { try { return localStorage.getItem(TOKEN_KEY); } catch { return null; } },
    set(v) { try { v ? localStorage.setItem(TOKEN_KEY, v) : localStorage.removeItem(TOKEN_KEY); } catch { /* sin almacenamiento */ } },
  };

  /* ---------- API ---------- */
  async function call(path, { method = 'GET', body, text = false } = {}) {
    const res = await fetch(API + path, {
      method,
      headers: { ...(token ? { Authorization: `Bearer ${token}` } : {}), ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}) },
      body: body === undefined ? undefined : typeof body === 'string' ? body : JSON.stringify(body),
    });
    if (!res.ok) {
      let error = 'server';
      try { error = (await res.json()).error || error; } catch { /* sin cuerpo */ }
      if (res.status === 401 && token) { token = null; store.set(null); me = null; paintAccount(); }
      throw Object.assign(new Error(error), { status: res.status, code: error });
    }
    return text ? res.text() : res.json();
  }

  /* ---------- Utilidades de interfaz ---------- */
  // Botón que pide una segunda pulsación para confirmar (sustituye a confirm(), que algunos navegadores bloquean)
  function twice(label, action, cls = 'btn ghost') {
    let armed = false;
    let timer = 0;
    const b = el('button', { class: cls, type: 'button', text: label });
    b.onclick = () => {
      if (!armed) {
        armed = true;
        b.textContent = t('confirmAgain');
        b.classList.add('danger');
        timer = setTimeout(() => { armed = false; b.textContent = label; b.classList.remove('danger'); }, 4000);
        return;
      }
      clearTimeout(timer);
      action();
    };
    return b;
  }

  function el(tag, props = {}, ...kids) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(props)) {
      if (k === 'class') n.className = v;
      else if (k === 'text') n.textContent = v;
      else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
      else if (v !== false && v != null) n.setAttribute(k, v === true ? '' : v);
    }
    kids.flat().forEach((c) => c != null && n.append(c));
    return n;
  }

  const modal = () => $('modal');
  let onClose = null;

  function openModal(...nodes) {
    $('modalCard').replaceChildren(...nodes.filter(Boolean));
    modal().hidden = false;
    document.body.classList.add('modal-open');
    $('modalCard').querySelector('input:not([type=checkbox])')?.focus();
  }

  function closeModal() {
    if (busy) return;
    modal().hidden = true;
    document.body.classList.remove('modal-open');
    $('modalCard').replaceChildren();
    const cb = onClose;
    onClose = null;
    cb?.();
  }

  const heading = (text, sub) => [el('h2', { class: 'modal-title', text }), sub ? el('p', { class: 'modal-sub', text: sub }) : null];
  const errBox = () => el('p', { class: 'modal-err', role: 'alert', hidden: true });
  const showErr = (box, msg) => { box.textContent = msg; box.hidden = !msg; };
  const closeBtn = () => el('button', { class: 'modal-x', type: 'button', 'aria-label': t('importClose'), onclick: closeModal, text: '×' });

  const authError = (e) => ({
    bad_email: t('errBadEmail'), wait: t('errWait'), too_many: t('errTooMany'), bad_code: t('errBadCode'),
    expired: t('errExpired'), mail_failed: t('errMail'),
  }[e.code] || t('errGeneric'));

  /* ---------- Inicio de sesión ---------- */
  function loginModal(after) {
    onClose = null;
    const err = errBox();
    const email = el('input', { type: 'email', inputmode: 'email', autocomplete: 'email', placeholder: t('loginEmail'), 'aria-label': t('loginEmail'), required: true });
    const marketing = el('input', { type: 'checkbox' });
    const send = el('button', { class: 'btn modal-btn', type: 'submit', text: t('loginSend') });
    const form = el('form', { class: 'modal-form', novalidate: true },
      el('div', { class: 'field' }, email),
      el('label', { class: 'check' }, marketing, el('span', { text: t('loginMarketing') })),
      err, send,
      el('p', { class: 'modal-note', text: t('loginPrivacy') }));
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      showErr(err, '');
      send.disabled = true;
      try {
        const r = await call('/auth/request', { method: 'POST', body: { email: email.value, marketing: marketing.checked } });
        codeStep(email.value.trim().toLowerCase(), marketing.checked, r.devCode, after);
      } catch (ex) {
        showErr(err, authError(ex));
        send.disabled = false;
      }
    });
    openModal(closeBtn(), ...heading(t('loginTitle'), t('loginText')), form);
  }

  function codeStep(emailValue, marketingValue, devCode, after) {
    const err = errBox();
    const code = el('input', { type: 'text', inputmode: 'numeric', autocomplete: 'one-time-code', maxlength: '6', placeholder: t('loginCode'), 'aria-label': t('loginCode'), class: 'code-input' });
    const verify = el('button', { class: 'btn modal-btn', type: 'submit', text: t('loginVerify') });
    const resend = el('button', { class: 'btn ghost', type: 'button', text: t('loginResend') });
    const back = el('button', { class: 'btn ghost', type: 'button', text: t('loginBack'), onclick: () => loginModal(after) });
    const form = el('form', { class: 'modal-form', novalidate: true },
      el('div', { class: 'field' }, code),
      devCode ? el('p', { class: 'modal-note dev', text: t('loginDevCode', { code: devCode }) }) : null,
      err, verify, el('div', { class: 'modal-row' }, resend, back));
    resend.onclick = async () => {
      showErr(err, '');
      try {
        const r = await call('/auth/request', { method: 'POST', body: { email: emailValue, marketing: marketingValue } });
        codeStep(emailValue, marketingValue, r.devCode, after);
      } catch (ex) { showErr(err, authError(ex)); }
    };
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      showErr(err, '');
      verify.disabled = true;
      try {
        const r = await call('/auth/verify', { method: 'POST', body: { email: emailValue, code: code.value } });
        token = r.token;
        store.set(token);
        modal().hidden = true;
        document.body.classList.remove('modal-open');
        await refreshMe();
        after?.();
      } catch (ex) {
        showErr(err, authError(ex));
        verify.disabled = false;
      }
    });
    openModal(closeBtn(), ...heading(t('loginCodeTitle'), t('loginCodeText', { email: emailValue })), form);
  }

  /* ---------- Sesión y catálogo ---------- */
  /* ---------- Selector de origen de los productos ---------- */
  const VERIFIED = '<svg class="verified" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><rect x="4.6" y="4.6" width="14.8" height="14.8" rx="3.2" fill="#0095f6"/><rect x="4.6" y="4.6" width="14.8" height="14.8" rx="3.2" fill="#0095f6" transform="rotate(45 12 12)"/><path d="m8.4 12.3 2.5 2.5 4.8-5" fill="none" stroke="#fff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const CHEV = '<svg class="chev" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const STACK = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M12 4 3.5 8.5 12 13l8.5-4.5z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="m3.5 12.5 8.5 4.5 8.5-4.5M3.5 16.5 12 21l8.5-4.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round"/></svg>';
  const TICK = '<svg class="tick" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const sheets = () => (me ? me.imports.filter((i) => i.resolved) : []);

  // Pestañas de la hoja elegida (o de todas): son las "categorías" cuando se ven productos importados
  function tabNames(source) {
    const list = source === 'all' ? sheets() : sheets().filter((i) => i.id === source);
    const names = new Set();
    for (const imp of list) if ((imp.tabs || []).length > 1) imp.tabs.forEach((x) => names.add(x));
    return [...names];
  }

  function pickSource(value) {
    $('sourceMenu').hidden = true;
    $('sourceBtn').setAttribute('aria-expanded', 'false');
    if (state.source === value) return;
    state.source = value;
    state.category = '';
    state.tab = '';
    renderSource();
    renderChips();
    applyFilters();
  }

  function renderSource() {
    const btn = $('sourceBtn');
    const menu = $('sourceMenu');
    const list = sheets();
    if (state.source !== 'orig' && state.source !== 'all' && !list.some((i) => i.id === state.source)) state.source = 'orig';
    if (state.source === 'all' && !list.length) state.source = 'orig';
    const cur = list.find((i) => i.id === state.source);
    const label = state.source === 'orig' ? t('verifiedProducts') : state.source === 'all' ? t('sourceAllShort') : cur.name;
    btn.innerHTML = `${state.source === 'orig' ? VERIFIED : STACK}<span class="lbl"></span>${CHEV}`;
    btn.querySelector('.lbl').textContent = label;
    btn.classList.toggle('single', !list.length);
    btn.disabled = !list.length;
    const opt = (value, text, icon) => {
      const o = el('button', { class: 'source-opt', type: 'button', role: 'option', 'aria-selected': String(state.source === value), onclick: () => pickSource(value) });
      o.innerHTML = `${icon}<span class="lbl"></span>${TICK}`;
      o.querySelector('.lbl').textContent = text;
      return o;
    };
    menu.replaceChildren(
      opt('orig', t('verifiedProducts'), VERIFIED),
      ...list.map((i) => opt(i.id, i.name, STACK)),
      list.length ? el('div', { class: 'source-sep' }) : null,
      list.length ? opt('all', t('sourceAll'), STACK) : null,
    );
    menu.querySelectorAll('.source-sep').forEach((x) => x.setAttribute('role', 'separator'));
  }

  function paintAccount() {
    $('accountBtn').classList.toggle('on', !!me);
    renderSource();
    renderChips();
    window.Hauls?.onSession();
  }

  async function refreshMe() {
    try {
      me = await call('/me');
      token = me.token;
      store.set(token);
    } catch (e) {
      if (e.status === 401) me = null;
      paintAccount();
      return;
    }
    await loadCatalogs();
  }

  const toProduct = (x, imp) => ({
    name: x.n || t('importedProduct'),
    unnamed: !x.n,
    done: !!(x.i && x.p), // ya tiene foto y precio: no hace falta pedirlos
    link: x.l,
    priceRaw: x.p || '',
    image: x.i || '',
    categories: [],
    sections: [imp.name],
    imps: { [imp.id]: x.t || [] },
    price: parsePrice(x.p),
    _n: norm(`${x.n || ''} ${imp.name}`),
  });

  async function loadCatalogs() {
    const byLink = new Map();
    for (const imp of me.imports) {
      if (!imp.resolved) continue;
      try {
        const list = await call(`/imports/${imp.id}/catalog`);
        for (const x of list) {
          if (!x.l) continue;
          const prev = byLink.get(x.l);
          if (prev) { prev.imps[imp.id] = x.t || []; continue; } // el mismo producto en varias hojas
          byLink.set(x.l, toProduct(x, imp));
        }
      } catch { /* esa hoja no se pudo cargar: se sigue con las demás */ }
    }
    setImported([...byLink.values()]);
    paintAccount();
  }

  function signOut() {
    token = null;
    me = null;
    store.set(null);
    state.source = 'orig';
    state.category = '';
    state.tab = '';
    setImported([]);
    paintAccount();
    modal().hidden = true;
    document.body.classList.remove('modal-open');
  }

  /* ---------- Cuenta ---------- */
  function accountModal() {
    const err = errBox();
    const marketing = el('input', { type: 'checkbox' });
    marketing.checked = !!me.marketing;
    marketing.addEventListener('change', async () => {
      try { await call('/me/marketing', { method: 'POST', body: { marketing: marketing.checked } }); me.marketing = marketing.checked; } catch { marketing.checked = !marketing.checked; }
    });
    const list = el('ul', { class: 'acc-list' });
    if (!me.imports.length) list.append(el('li', { class: 'acc-empty', text: t('accNoImports') }));
    for (const imp of me.imports) {
      list.append(el('li', {},
        el('span', { class: 'acc-name' }, el('b', { text: imp.name }), el('small', { text: t('accProducts', { n: (imp.resolved || 0).toLocaleString(locale()) }) })),
        twice(t('accDeleteImport'), async () => {
          try { await call(`/imports/${imp.id}`, { method: 'DELETE' }); await refreshMe(); accountModal(); } catch { showErr(err, t('errGeneric')); }
        })));
    }
    openModal(
      closeBtn(),
      ...heading(t('accTitle'), me.email),
      el('label', { class: 'check' }, marketing, el('span', { text: t('accMarketing') })),
      el('h3', { class: 'modal-h3', text: t('accImports') }), list, err,
      el('div', { class: 'modal-row spread' },
        el('button', { class: 'btn ghost', type: 'button', text: t('accSignOut'), onclick: signOut }),
        twice(t('accDelete'), async () => {
          try { await call('/me', { method: 'DELETE' }); signOut(); } catch { showErr(err, t('errGeneric')); }
        })));
  }

  /* ---------- Importar ---------- */
  const sheetErr = (e) => ({
    bad_url: t('importBadUrl'), blocked: t('importBlocked'), private: t('importPrivate'), not_found: t('importNotFound'), too_big: t('importTooBig'),
    max_imports: t('importMax'), max_products: t('importMaxProducts'),
  }[e.code] || t('errGeneric'));

  const URL_RE = /https?:\/\/[^\s"'<>]+/g;

  // Nombre del producto: el texto descriptivo más cercano al enlace dentro de su fila.
  // A igual distancia se prefiere el de la izquierda: es lo más probable que sea el nombre de ese producto.
  const GENERIC = /^(comprar|buy|link|enlace|ver|click|clic|aqu[ií]|here|url|nota|note|foto|photo|imagen|image|item|producto|product)\b[\s\d.:#-]*$/i;

  function pickName(cells, ci) {
    const order = cells.map((_, j) => j).filter((j) => j !== ci)
      .sort((x, y) => Math.abs(x - ci) - Math.abs(y - ci) || x - y);
    const ok = (v) => {
      const x = String(v ?? '').trim();
      return x.length >= 5 && !/https?:\/\//i.test(x) && /\p{L}{2}/u.test(x) && !/^[\p{Sc}\d.,\s%]+$/u.test(x) && !GENERIC.test(x);
    };
    // Texto escrito junto al enlace en la misma celda
    const own = String(cells[ci]).replace(URL_RE, ' ').replace(/[()[\]:]/g, ' ').replace(/\s+/g, ' ').trim();
    if (ok(own)) return own.slice(0, 120);
    for (const j of order) if (ok(cells[j])) return String(cells[j]).trim().slice(0, 120);
    return '';
  }

  // Saca los productos de una fila o lista de textos sin importar cómo esté organizada la hoja
  function collect(cells, found, tabName) {
    cells.forEach((cell, ci) => {
      for (const u of String(cell).match(URL_RE) || []) {
        const r = parseProductLink(u);
        if (!r) continue;
        const key = `${r.platform}/${r.id}`;
        const name = pickName(cells, ci);
        const prev = found.get(key);
        if (prev) {
          if (!prev.name && name) prev.name = name;
          if (tabName) prev.tabs.add(tabName);
          continue;
        }
        found.set(key, { p: r.platform, id: r.id, ok: !r.encrypted || r.fromUsfans, name, tabs: new Set(tabName ? [tabName] : []) });
      }
    });
  }

  async function scanTabs(url, tabs) {
    const found = new Map();
    const csvOk = [];
    let blocked = false;
    for (const tab of tabs) {
      try {
        const csv = await call(`/sheet/csv?url=${encodeURIComponent(url)}&gid=${tab.gid}`, { text: true });
        for (const row of Papa.parse(csv, { skipEmptyLines: true }).data) collect(row, found, tab.name);
        csvOk.push(tab);
      } catch (ex) {
        if (ex.code !== 'private') throw ex;
        // El propietario ha desactivado la descarga: se lee la tabla de la vista web de la hoja
        try {
          const { rows } = await call(`/sheet/rows?url=${encodeURIComponent(url)}&gid=${tab.gid}`);
          for (const row of rows) collect(row, found, tab.name);
        } catch (ex2) {
          if (ex2.code !== 'private') throw ex2;
          blocked = true;
        }
      }
    }
    // Enlaces escondidos en el texto de las celdas: el CSV no los trae, la vista web de la hoja sí
    if (csvOk.length) {
      try {
        const { groups } = await call(`/sheet/links?url=${encodeURIComponent(url)}&gids=${csvOk.map((x) => x.gid).join(',')}`);
        for (const tab of csvOk) for (const u of groups[tab.gid] || []) collect([u], found, tab.name);
      } catch { /* si falla, se sigue con lo que trae el CSV */ }
    }
    if (!found.size && blocked) throw Object.assign(new Error('blocked'), { code: 'blocked' });
    return found;
  }

  function importModal() {
    onClose = null;
    const err = errBox();
    const input = el('input', { type: 'url', inputmode: 'url', spellcheck: 'false', placeholder: t('importUrlPh'), 'aria-label': t('importUrlPh') });
    const go = el('button', { class: 'btn modal-btn', type: 'submit', text: t('importAnalyze') });
    const form = el('form', { class: 'modal-form', novalidate: true }, el('div', { class: 'field' }, input), err, go);
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      showErr(err, '');
      go.disabled = true;
      try {
        const info = await call(`/sheet/tabs?url=${encodeURIComponent(input.value.trim())}`);
        if (info.tabs.length > 1) tabsStep(input.value.trim(), info);
        else scanStep(input.value.trim(), info, info.tabs);
      } catch (ex) {
        showErr(err, sheetErr(ex));
        go.disabled = false;
      }
    });
    openModal(closeBtn(), ...heading(t('importModalTitle'), t('importIntro')), form);
  }

  function tabsStep(url, info) {
    const boxes = info.tabs.map((tab) => {
      const cb = el('input', { type: 'checkbox' });
      cb.checked = true;
      return { tab, cb };
    });
    const next = el('button', { class: 'btn modal-btn', type: 'button', text: t('importTabsContinue') });
    next.onclick = () => {
      const chosen = boxes.filter((b) => b.cb.checked).map((b) => b.tab);
      if (chosen.length) scanStep(url, info, chosen);
    };
    openModal(closeBtn(), ...heading(t('importTabsTitle')),
      el('div', { class: 'modal-form' }, ...boxes.map((b) => el('label', { class: 'check' }, b.cb, el('span', { text: b.tab.name }))), next));
  }

  async function scanStep(url, info, tabs) {
    openModal(closeBtn(), ...heading(t('importScanning')), el('div', { class: 'modal-spin' }, el('span', { class: 'spinner' })));
    let found;
    try {
      found = await scanTabs(url, tabs);
    } catch (ex) {
      importModal();
      const box = $('modalCard').querySelector('.modal-err');
      showErr(box, sheetErr(ex));
      return;
    }
    const known = new Set(state.orig.map((p) => productKeyOf(p.link)));
    const all = [...found.values()];
    const todo = all.filter((x) => x.ok && !known.has(`${x.p}/${x.id}`));
    const skipped = all.filter((x) => !x.ok).length;
    const dup = all.filter((x) => x.ok && known.has(`${x.p}/${x.id}`)).length;
    if (!todo.length) {
      importModal();
      showErr($('modalCard').querySelector('.modal-err'), t('importNone'));
      return;
    }
    const name = el('input', { type: 'text', maxlength: '80', 'aria-label': t('importName') });
    name.value = (info.title || 'Spreadsheet').slice(0, 80);
    const start = el('button', { class: 'btn modal-btn', type: 'button', text: t('importStart') });
    start.onclick = () => runImport(url, name.value.trim() || 'Spreadsheet', todo, tabs.map((x) => x.name));
    openModal(closeBtn(), ...heading(t('importFound', { n: todo.length.toLocaleString(locale()) })),
      el('div', { class: 'modal-form' },
        skipped ? el('p', { class: 'modal-note', text: t('importFoundSkipped', { n: skipped }) }) : null,
        dup ? el('p', { class: 'modal-note', text: t('importFoundKnown', { n: dup }) }) : null,
        el('label', { class: 'modal-label', text: t('importName') }), el('div', { class: 'field' }, name),
        start));
  }

  async function runImport(url, name, items, tabNames) {
    const err = errBox();
    openModal(...heading(t('importSaving')), el('div', { class: 'modal-spin' }, el('span', { class: 'spinner' })), err);
    busy = true;
    try {
      const { id } = await call('/imports', { method: 'POST', body: { name, source: url, total: items.length, tabs: tabNames } });
      // Sin consultar a USFans: se guarda el enlace y el nombre de la hoja; la foto y el precio se piden al verlos
      const list = items.map((x) => ({ n: x.name, l: `https://usfans.com/product/${x.p}/${x.id}`, t: [...x.tabs] }));
      await call(`/imports/${id}/catalog?done=1`, { method: 'PUT', body: JSON.stringify(list) });
    } catch (ex) {
      busy = false;
      importModal();
      showErr($('modalCard').querySelector('.modal-err'), sheetErr(ex));
      return;
    }
    busy = false;
    await refreshMe();
    openModal(closeBtn(), ...heading(t('importDone', { n: items.length.toLocaleString(locale()) })),
      el('div', { class: 'modal-form' }, el('button', { class: 'btn modal-btn', type: 'button', text: t('importClose'), onclick: closeModal })));
  }

  /* ---------- Fotos y precios a demanda ---------- */
  // Solo se piden los productos que aparecen en pantalla, pocos a la vez y con pausas; el servidor guarda en caché lo que ya conoce
  const watching = new Map(); // tarjeta → producto
  const lazy = { queue: new Set(), timer: 0, backoff: 0, tries: new Map() };
  const seenIo = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!watching.has(e.target)) continue;
      if (e.isIntersecting) lazy.queue.add(e.target);
      else lazy.queue.delete(e.target);
    }
    pump(0);
  }, { rootMargin: '200px' });

  function watch(card, p) {
    if (!API || p.done) return;
    watching.set(card, p);
    seenIo.observe(card);
  }

  function pump(delay) {
    if (lazy.timer || !lazy.queue.size) return;
    lazy.timer = setTimeout(async () => {
      lazy.timer = 0;
      lazy.queue.forEach((c) => { if (!c.isConnected) { lazy.queue.delete(c); watching.delete(c); } });
      const cards = [...lazy.queue].slice(0, 4);
      if (!cards.length || !me) return;
      const batch = cards.map((c) => ({ c, p: watching.get(c), r: parseProductLink(watching.get(c).link) })).filter((x) => x.r);
      let res;
      try {
        res = await call('/resolve', { method: 'POST', body: { items: batch.map((x) => ({ p: x.r.platform, id: x.r.id })) } });
      } catch {
        lazy.backoff = Math.min((lazy.backoff || 4000) * 2, 60000);
        return pump(lazy.backoff);
      }
      lazy.backoff = res.limited ? Math.min((lazy.backoff || 4000) * 2, 60000) : 0;
      res.items.forEach((g, i) => {
        const { c, p, r } = batch[i];
        if (g.status === 'ok') {
          p.image = g.i || p.image;
          p.priceRaw = g.p || p.priceRaw;
          if (p.unnamed) { p.name = g.n; p.unnamed = false; p._n = norm(`${p.name} ${p.sections.join(' ')}`); }
          p.price = parsePrice(p.priceRaw);
          p.done = true;
          fillCard(c, p);
          window.Hauls?.enriched(p);
        } else if (g.status === 'gone') {
          p.gone = true;
          p.done = true;
          c.remove();
        } else {
          const k = `${r.platform}/${r.id}`;
          const n = (lazy.tries.get(k) || 0) + 1;
          lazy.tries.set(k, n);
          if (n >= 4) p.done = true; // no se insiste más
        }
        if (p.done) { lazy.queue.delete(c); watching.delete(c); seenIo.unobserve(c); }
      });
      pump(lazy.backoff || 1500);
    }, delay);
  }

  function fillCard(card, p) {
    const thumb = card.querySelector('.thumb');
    if (p.image && thumb && !thumb.querySelector('img')) {
      const img = document.createElement('img');
      img.decoding = 'async';
      img.referrerPolicy = 'no-referrer';
      img.alt = '';
      img.src = p.image;
      img.onerror = () => img.classList.add('broken');
      thumb.appendChild(img);
    }
    const nameEl = card.querySelector('.name');
    if (nameEl) nameEl.textContent = p.name;
    const meta = card.querySelector('.meta');
    if (meta && p.priceRaw && !meta.querySelector('.price')) {
      const pr = document.createElement('span');
      pr.className = 'price';
      pr.textContent = formatPrice(p.priceRaw);
      meta.appendChild(pr);
    }
  }

  /* ---------- Arranque ---------- */
  function start() {
    if (!API) return;
    $('accountBtn').hidden = false;
    $('sourceBar').hidden = false;
    renderSource();
    $('sourceBtn').onclick = (e) => {
      e.stopPropagation();
      const open = $('sourceMenu').hidden;
      $('sourceMenu').hidden = !open;
      $('sourceBtn').setAttribute('aria-expanded', String(open));
    };
    document.addEventListener('pointerdown', (e) => {
      if (!$('sourceSelect').contains(e.target)) { $('sourceMenu').hidden = true; $('sourceBtn').setAttribute('aria-expanded', 'false'); }
    });
    $('accountBtn').onclick = () => (me ? accountModal() : loginModal());
    $('importBtn').onclick = () => (me ? importModal() : loginModal(importModal));
    modal().addEventListener('pointerdown', (e) => { if (e.target === modal()) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal().hidden) closeModal(); });
    token = store.get();
    if (token) refreshMe();
  }

  return {
    start, watch, tabNames,
    api: call, isLoggedIn: () => !!me, login: (after) => loginModal(after),
    ui: { el, openModal, closeModal, heading, closeBtn, errBox, showErr },
  };
})();
window.Accounts = Accounts;
