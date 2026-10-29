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
    if (busy && !confirm(t('importCancel') + '?')) return;
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
  function paintAccount() {
    $('accountBtn').classList.toggle('on', !!me);
    const has = me && state.imp.length;
    $('mineBtn').hidden = !has;
    $('mineCount').textContent = has ? state.imp.length.toLocaleString(locale()) : '';
    $('mineBtn').setAttribute('aria-pressed', String(state.mine));
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

  const toProduct = (x, sheet) => ({
    name: x.n || '',
    link: x.l,
    priceRaw: x.p || '',
    image: x.i || '',
    categories: [],
    sections: [sheet],
    price: parsePrice(x.p),
    _n: norm(`${x.n} ${sheet}`),
  });

  async function loadCatalogs() {
    const all = [];
    const seen = new Set();
    for (const imp of me.imports) {
      if (!imp.resolved) continue;
      try {
        const list = await call(`/imports/${imp.id}/catalog`);
        for (const x of list) {
          if (!x.l || seen.has(x.l)) continue;
          seen.add(x.l);
          all.push(toProduct(x, imp.name));
        }
      } catch { /* esa hoja no se pudo cargar: se sigue con las demás */ }
    }
    setImported(all);
    paintAccount();
  }

  function signOut() {
    token = null;
    me = null;
    store.set(null);
    state.mine = false;
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
        el('button', {
          class: 'btn ghost', type: 'button', text: t('accDeleteImport'),
          onclick: async () => {
            if (!confirm(t('accDeleteImportConfirm'))) return;
            try { await call(`/imports/${imp.id}`, { method: 'DELETE' }); await refreshMe(); accountModal(); } catch { showErr(err, t('errGeneric')); }
          },
        })));
    }
    openModal(
      closeBtn(),
      ...heading(t('accTitle'), me.email),
      el('label', { class: 'check' }, marketing, el('span', { text: t('accMarketing') })),
      el('h3', { class: 'modal-h3', text: t('accImports') }), list, err,
      el('div', { class: 'modal-row spread' },
        el('button', { class: 'btn ghost', type: 'button', text: t('accSignOut'), onclick: signOut }),
        el('button', {
          class: 'btn ghost danger', type: 'button', text: t('accDelete'),
          onclick: async () => {
            if (!confirm(t('accDeleteConfirm'))) return;
            try { await call('/me', { method: 'DELETE' }); signOut(); } catch { showErr(err, t('errGeneric')); }
          },
        })));
  }

  /* ---------- Importar ---------- */
  const sheetErr = (e) => ({
    bad_url: t('importBadUrl'), private: t('importPrivate'), not_found: t('importNotFound'), too_big: t('importTooBig'),
    max_imports: t('importMax'), max_products: t('importMaxProducts'),
  }[e.code] || t('errGeneric'));

  const URL_RE = /https?:\/\/[^\s"'<>]+/g;

  // Saca los productos de una hoja sin importar cómo esté organizada: busca enlaces de producto en cualquier celda
  function collect(texts, found) {
    for (const text of texts) {
      for (const u of String(text).match(URL_RE) || []) {
        const r = parseProductLink(u);
        if (!r) continue;
        const key = `${r.platform}/${r.id}`;
        if (found.has(key)) continue;
        found.set(key, { p: r.platform, id: r.id, ok: !r.encrypted || r.fromUsfans });
      }
    }
  }

  async function scanTabs(url, tabs) {
    const found = new Map();
    for (const tab of tabs) {
      const csv = await call(`/sheet/csv?url=${encodeURIComponent(url)}&gid=${tab.gid}`, { text: true });
      const rows = Papa.parse(csv, { skipEmptyLines: true }).data;
      for (const row of rows) collect(row, found);
    }
    // Enlaces escondidos en el texto de las celdas: el CSV no los trae, la vista web de la hoja sí
    try {
      const { groups } = await call(`/sheet/links?url=${encodeURIComponent(url)}`);
      for (const tab of tabs) collect(groups[tab.gid] || [], found);
    } catch { /* si falla, se sigue con lo que trae el CSV */ }
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
    start.onclick = () => runImport(url, name.value.trim() || 'Spreadsheet', todo);
    openModal(closeBtn(), ...heading(t('importFound', { n: todo.length.toLocaleString(locale()) })),
      el('div', { class: 'modal-form' },
        skipped ? el('p', { class: 'modal-note', text: t('importFoundSkipped', { n: skipped }) }) : null,
        dup ? el('p', { class: 'modal-note', text: t('importFoundKnown', { n: dup }) }) : null,
        el('label', { class: 'modal-label', text: t('importName') }), el('div', { class: 'field' }, name), start));
  }

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  async function runImport(url, name, items) {
    const err = errBox();
    const label = el('p', { class: 'modal-sub', text: t('importProgress', { done: 0, total: items.length }) });
    const fill = el('div', { class: 'prog-fill' });
    let cancelled = false;
    const cancel = el('button', { class: 'btn ghost', type: 'button', text: t('importCancel'), onclick: () => { cancelled = true; } });
    openModal(...heading(t('importModalTitle')), label, el('div', { class: 'prog' }, fill), err, el('div', { class: 'modal-row' }, cancel));
    busy = true;

    let id;
    try {
      id = (await call('/imports', { method: 'POST', body: { name, source: url, total: items.length } })).id;
    } catch (ex) {
      busy = false;
      importModal();
      showErr($('modalCard').querySelector('.modal-err'), sheetErr(ex));
      return;
    }

    const results = new Map(); // clave → producto o null (no disponible)
    const toList = () => items.map((x) => results.get(`${x.p}/${x.id}`)).filter(Boolean);
    const save = (done) => call(`/imports/${id}/catalog${done ? '?done=1' : ''}`, { method: 'PUT', body: JSON.stringify(toList()) });
    let pending = items.slice();
    let failedRounds = 0;
    let lastSaved = 0;

    try {
      while (pending.length && !cancelled && failedRounds < 6) {
        const queue = pending.slice();
        pending = [];
        let limited = false;
        const worker = async () => {
          while (queue.length && !cancelled && !limited) {
            const batch = queue.splice(0, 20);
            let r;
            try {
              r = await call('/resolve', { method: 'POST', body: { items: batch.map((x) => ({ p: x.p, id: x.id })) } });
            } catch (ex) {
              if (ex.status === 401) throw ex;
              pending.push(...batch);
              continue;
            }
            if (r.limited) limited = true;
            r.items.forEach((g, i) => {
              if (g.status === 'ok') results.set(g.k, { n: g.n, l: `https://usfans.com/product/${g.k}`, i: g.i, p: g.p });
              else if (g.status === 'gone') results.set(g.k, null);
              else pending.push(batch[i]);
            });
            const done = results.size;
            label.textContent = t('importProgress', { done: done.toLocaleString(locale()), total: items.length.toLocaleString(locale()) });
            fill.style.width = `${Math.round((done / items.length) * 100)}%`;
          }
        };
        await Promise.all([worker(), worker(), worker()]);
        pending.push(...queue);
        if (results.size - lastSaved >= 1000) { lastSaved = results.size; await save(false); }
        if (pending.length && !cancelled) {
          failedRounds = limited ? failedRounds + 1 : failedRounds;
          if (limited) label.textContent = t('importLimited');
          await sleep(limited ? 5000 : 1500);
        }
      }
      await save(true);
    } catch (ex) {
      busy = false;
      showErr(err, sheetErr(ex));
      await refreshMe();
      return;
    }

    busy = false;
    const imported = toList().length;
    const gone = [...results.values()].filter((v) => v === null).length;
    await refreshMe();
    openModal(closeBtn(), ...heading(cancelled ? t('importCancelled', { n: imported.toLocaleString(locale()) }) : t('importDone', { n: imported.toLocaleString(locale()) })),
      el('div', { class: 'modal-form' },
        gone ? el('p', { class: 'modal-note', text: t('importUnavailable', { n: gone.toLocaleString(locale()) }) }) : null,
        el('button', { class: 'btn modal-btn', type: 'button', text: t('importClose'), onclick: closeModal })));
  }

  /* ---------- Arranque ---------- */
  function start() {
    if (!API) return;
    $('accountBtn').hidden = false;
    $('importBtn').hidden = false;
    $('accountBtn').onclick = () => (me ? accountModal() : loginModal());
    $('importBtn').onclick = () => (me ? importModal() : loginModal(importModal));
    $('mineBtn').onclick = () => {
      state.mine = !state.mine;
      paintAccount();
      applyFilters();
    };
    modal().addEventListener('pointerdown', (e) => { if (e.target === modal()) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal().hidden) closeModal(); });
    token = store.get();
    if (token) refreshMe();
  }

  return { start };
})();
window.Accounts = Accounts;
