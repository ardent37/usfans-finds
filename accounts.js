/* ============================================================
   Cuentas
   - Acceso con correo y código de 6 dígitos (sin contraseñas); la sesión se recuerda en este navegador.
   Usa las funciones de app.js (t, parseProductLink, state, norm, parsePrice…).
   ============================================================ */
Object.assign(I18N.es, {
  account: 'Cuenta',
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
  errCaptcha: 'No hemos podido comprobar que eres una persona. Recarga la página e inténtalo de nuevo.',
  errNetwork: 'No se puede conectar con el servidor ahora mismo. Algunas operadoras bloquean temporalmente el servicio durante los partidos de fútbol: prueba de nuevo más tarde o con una VPN.',
  accTitle: 'Tu cuenta',
  accNick: 'Tu apodo en hauls compartidos',
  accMarketing: 'Recibir novedades y ofertas por correo',
  accSignOut: 'Cerrar sesión',
  accDelete: 'Borrar mi cuenta y mis datos',
  verifiedProducts: 'Productos verificados',
  confirmAgain: 'Pulsa otra vez para confirmar',
  unnamedProduct: 'Producto',
});
Object.assign(I18N.en, {
  account: 'Account',
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
  errCaptcha: 'We couldn’t verify you’re human. Reload the page and try again.',
  errNetwork: 'Can’t reach the server right now. Some ISPs temporarily block the service during football matches: try again later or use a VPN.',
  accTitle: 'Your account',
  accNick: 'Your nickname in shared hauls',
  accMarketing: 'Receive news and offers by email',
  accSignOut: 'Sign out',
  accDelete: 'Delete my account and data',
  verifiedProducts: 'Verified products',
  confirmAgain: 'Tap again to confirm',
  unnamedProduct: 'Product',
});
Object.assign(I18N.pl, {
  account: 'Konto',
  loginTitle: 'Zaloguj się lub załóż konto',
  loginText: 'Wyślemy Ci kod e-mailem. Bez haseł.',
  loginEmail: 'Twój adres e-mail',
  loginSend: 'Wyślij kod',
  loginMarketing: 'Chcę otrzymywać nowości i oferty e-mailem (opcjonalnie)',
  loginPrivacy: 'Używamy Twojego e-maila tylko do konta. Możesz go usunąć w każdej chwili.',
  loginCodeTitle: 'Sprawdź swoją skrzynkę',
  loginCodeText: 'Wysłaliśmy 6-cyfrowy kod na adres {email}.',
  loginCode: '6-cyfrowy kod',
  loginVerify: 'Zaloguj się',
  loginResend: 'Wyślij kod ponownie',
  loginBack: 'Użyj innego adresu e-mail',
  loginDevCode: 'Tryb lokalny: e-mail nie jest wysyłany. Twój kod to {code}.',
  errBadEmail: 'Ten adres e-mail wygląda na nieprawidłowy.',
  errWait: 'Poczekaj kilka sekund, zanim poprosisz o kolejny kod.',
  errTooMany: 'Zbyt wiele prób. Spróbuj później.',
  errBadCode: 'Nieprawidłowy kod.',
  errExpired: 'Kod wygasł. Poproś o nowy.',
  errGeneric: 'Coś poszło nie tak. Spróbuj ponownie.',
  errMail: 'Nie udało się wysłać e-maila. Spróbuj później.',
  errCaptcha: 'Nie udało się potwierdzić, że jesteś człowiekiem. Odśwież stronę i spróbuj ponownie.',
  errNetwork: 'Nie można teraz połączyć się z serwerem. Niektórzy operatorzy w Hiszpanii czasowo blokują usługę podczas meczów piłkarskich: spróbuj później lub użyj VPN.',
  accTitle: 'Twoje konto',
  accNick: 'Twój pseudonim we wspólnych haulach',
  accMarketing: 'Otrzymuj nowości i oferty e-mailem',
  accSignOut: 'Wyloguj się',
  accDelete: 'Usuń moje konto i dane',
  verifiedProducts: 'Zweryfikowane produkty',
  confirmAgain: 'Dotknij ponownie, aby potwierdzić',
  unnamedProduct: 'Produkt',
});

const Accounts = (() => {
  const API = CONFIG.accountApi;
  const TOKEN_KEY = 'accToken';
  let me = null;
  let token = null;

  const store = {
    get() { try { return localStorage.getItem(TOKEN_KEY); } catch { return null; } },
    set(v) { try { v ? localStorage.setItem(TOKEN_KEY, v) : localStorage.removeItem(TOKEN_KEY); } catch { /* sin almacenamiento */ } },
  };

  /* ---------- API ---------- */
  async function call(path, { method = 'GET', body, text = false } = {}) {
    // Si el servidor no responde (p. ej. bloqueos de operadoras a Cloudflare), el inicio de sesión no se queda colgado
    const ctl = new AbortController();
    const timer = path.startsWith('/auth/') ? setTimeout(() => ctl.abort(), 12000) : 0;
    let res;
    try {
      res = await fetch(API + path, {
        method,
        headers: { ...(token ? { Authorization: `Bearer ${token}` } : {}), ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}) },
        body: body === undefined ? undefined : typeof body === 'string' ? body : JSON.stringify(body),
        signal: ctl.signal,
      });
    } catch {
      throw Object.assign(new Error('network'), { status: 0, code: 'network' });
    } finally {
      clearTimeout(timer);
    }
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
    fitModal();
  }

  // En el móvil, el teclado tapa la parte baja de la pantalla sin cambiar el tamaño de la página: la ventana se ajusta al área que de verdad se ve
  function fitModal() {
    const m = modal();
    const vv = window.visualViewport;
    if (!vv || m.hidden || !matchMedia('(max-width: 820px)').matches) { m.style.removeProperty('top'); m.style.removeProperty('height'); m.style.removeProperty('bottom'); return; }
    m.style.top = `${vv.offsetTop}px`;
    m.style.height = `${vv.height}px`;
    m.style.bottom = 'auto';
  }
  window.visualViewport?.addEventListener('resize', fitModal);
  window.visualViewport?.addEventListener('scroll', fitModal);

  function closeModal() {
    modal().hidden = true;
    fitModal();
    document.body.classList.remove('modal-open');
    $('modalCard').replaceChildren();
    const cb = onClose;
    onClose = null;
    cb?.();
  }

  const heading = (text, sub) => [el('h2', { class: 'modal-title', text }), sub ? el('p', { class: 'modal-sub', text: sub }) : null];
  const errBox = () => el('p', { class: 'modal-err', role: 'alert', hidden: true });
  const showErr = (box, msg) => { box.textContent = msg; box.hidden = !msg; };
  const closeBtn = () => el('button', { class: 'modal-x', type: 'button', 'aria-label': t('close'), onclick: closeModal, text: '×' });

  // Cloudflare Turnstile (gratis): comprobación invisible de que quien pide el código es una persona, no un robot
  let tsLoading = null;
  function loadTurnstile() {
    if (window.turnstile) return Promise.resolve(window.turnstile);
    tsLoading ||= new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      s.async = true;
      s.onload = () => resolve(window.turnstile);
      s.onerror = () => { tsLoading = null; reject(Object.assign(new Error('network'), { code: 'network' })); };
      document.head.appendChild(s);
    });
    return tsLoading;
  }

  async function captchaToken(box) {
    const sitekey = CONFIG.turnstileKey;
    if (!sitekey) return '';
    let ts;
    try { ts = await loadTurnstile(); } catch { return ''; } // si no carga, lo decide el servidor
    return new Promise((resolve) => {
      box.replaceChildren();
      const timer = setTimeout(() => resolve(''), 25000);
      ts.render(box, {
        sitekey,
        appearance: 'interaction-only', // solo se ve si hace falta que la persona confirme algo
        callback: (tk) => { clearTimeout(timer); resolve(tk); },
        'error-callback': () => { clearTimeout(timer); resolve(''); },
      });
    });
  }

  const authError = (e) => ({
    bad_email: t('errBadEmail'), wait: t('errWait'), too_many: t('errTooMany'), bad_code: t('errBadCode'),
    expired: t('errExpired'), mail_failed: t('errMail'), network: t('errNetwork'), captcha: t('errCaptcha'),
  }[e.code] || t('errGeneric'));

  /* ---------- Inicio de sesión ---------- */
  function loginModal(after) {
    onClose = null;
    const err = errBox();
    const email = el('input', { type: 'email', inputmode: 'email', autocomplete: 'email', placeholder: t('loginEmail'), 'aria-label': t('loginEmail'), required: true });
    const marketing = el('input', { type: 'checkbox' });
    const send = el('button', { class: 'btn modal-btn', type: 'submit', text: t('loginSend') });
    const captcha = el('div', { class: 'captcha' });
    const form = el('form', { class: 'modal-form', novalidate: true },
      el('div', { class: 'field' }, email),
      el('label', { class: 'check' }, marketing, el('span', { text: t('loginMarketing') })),
      captcha, err, send,
      el('p', { class: 'modal-note', text: t('loginPrivacy') }));
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      showErr(err, '');
      send.disabled = true;
      try {
        const r = await call('/auth/request', { method: 'POST', body: { email: email.value, marketing: marketing.checked, captcha: await captchaToken(captcha) } });
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
    const captcha = el('div', { class: 'captcha' });
    const form = el('form', { class: 'modal-form', novalidate: true },
      el('div', { class: 'field' }, code),
      devCode ? el('p', { class: 'modal-note dev', text: t('loginDevCode', { code: devCode }) }) : null,
      captcha, err, verify, el('div', { class: 'modal-row' }, resend, back));
    resend.onclick = async () => {
      showErr(err, '');
      try {
        const r = await call('/auth/request', { method: 'POST', body: { email: emailValue, marketing: marketingValue, captcha: await captchaToken(captcha) } });
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

  /* ---------- Sesión ---------- */
  function paintAccount() {
    $('accountBtn').classList.toggle('on', !!me);
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
    paintAccount();
  }

  function signOut() {
    token = null;
    me = null;
    store.set(null);
    paintAccount();
    modal().hidden = true;
    document.body.classList.remove('modal-open');
  }

  /* ---------- Cuenta ---------- */
  function accountModal() {
    const err = errBox();
    openModal(
      closeBtn(),
      ...heading(t('accTitle'), me.email),
      err,
      ...(window.Admin ? window.Admin.accountSection(me) : []),
      el('div', { class: 'modal-row spread' },
        el('button', { class: 'btn ghost', type: 'button', text: t('accSignOut'), onclick: signOut }),
        twice(t('accDelete'), async () => {
          try { await call('/me', { method: 'DELETE' }); signOut(); } catch { showErr(err, t('errGeneric')); }
        })));
  }

  /* ---------- Fotos y precios a demanda ---------- */
  // Solo se piden los productos que aparecen en pantalla, pocos a la vez y con pausas; el servidor guarda en caché lo que ya conoce
  // Cada navegador consulta la API pública de USFans por su cuenta (USFans permite esta web), con pocas peticiones, pausas y una caché
  // de 24 h en este navegador. Los servidores de Cloudflare no sirven: USFans les responde con un control antirrobots.
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const GOODS_API = 'https://usfans.com/api/goods/info';
  const GOODS_TTL = 24 * 3600 * 1000;
  const GOODS_KEY = 'goodsCache';
  const GOODS_MAX_PER_VISIT = 400;
  let goodsMem = null;
  let goodsTimer = 0;
  let goodsCount = 0;

  function goodsLoad() {
    if (goodsMem) return goodsMem;
    try { goodsMem = new Map(JSON.parse(localStorage.getItem(GOODS_KEY) || '[]')); } catch { goodsMem = new Map(); }
    return goodsMem;
  }

  function goodsSave() {
    clearTimeout(goodsTimer);
    goodsTimer = setTimeout(() => {
      try {
        const rows = [...goodsLoad()].sort((a, b) => b[1].ts - a[1].ts).slice(0, 4000); // los más recientes
        localStorage.setItem(GOODS_KEY, JSON.stringify(rows));
      } catch { /* sin almacenamiento */ }
    }, 1500);
  }

  async function fetchGoodsDirect(platform, id) {
    try {
      const r = await fetch(`${GOODS_API}?channel=${platform}&goodsId=${encodeURIComponent(id)}&refresh=false&queryDelivery=false&activityId=`, { headers: { currency: 'EUR' } });
      if (!r.ok) return { status: 'limited' };
      const j = await r.json();
      // Cualquier código distinto de 200 (p. ej. el control antirrobots) no significa que el producto no exista
      if (!j || j.code !== 200) return { status: 'limited' };
      const d = j.data;
      if (!d) return { status: 'empty' };
      const prices = (d.skuList || []).filter((x) => Number(x.stock) > 0)
        .map((x) => Number(x.convertedDiscountPrice || x.convertedPrice)).filter((x) => x > 0);
      if (!prices.length && Number(d.convertedPrice) > 0 && Number(d.stock) > 0) prices.push(Number(d.convertedPrice));
      if (!prices.length) return { status: 'gone' }; // existe pero sin stock
      return {
        status: 'ok',
        n: String(d.titleEn || d.title || '').trim(),
        i: Array.isArray(d.images) && d.images[0] ? String(d.images[0]) : '',
        p: `${Math.min(...prices).toFixed(2).replace('.', ',')} €`,
      };
    } catch {
      return { status: 'error' };
    }
  }

  // Devuelve, para cada producto, su estado (de la caché o consultando a USFans con una pausa entre peticiones)
  async function resolveDirect(list) {
    const cache = goodsLoad();
    const items = [];
    let limited = false;
    let network = 0;
    for (const r of list) {
      const k = `${r.platform}/${r.id}`;
      const hit = cache.get(k);
      if (hit && Date.now() - hit.ts < GOODS_TTL) { items.push({ k, ...hit.v }); continue; }
      if (limited || goodsCount >= GOODS_MAX_PER_VISIT) { items.push({ k, status: 'pending' }); continue; }
      goodsCount++;
      network++;
      const v = await fetchGoodsDirect(r.platform, r.id);
      if (v.status === 'limited') limited = true;
      if (v.status === 'ok' || v.status === 'gone') { cache.set(k, { ts: Date.now(), v }); goodsSave(); }
      items.push({ k, ...v, status: v.status === 'limited' || v.status === 'error' ? 'pending' : v.status });
      await sleep(600);
    }
    return { items, limited, network, capped: goodsCount >= GOODS_MAX_PER_VISIT };
  }

  // Consulta puntual de un producto (para los enlaces escritos en los buscadores)
  async function lookup(r) {
    const res = await resolveDirect([r]);
    return res.items[0];
  }

  const watching = new Map(); // tarjeta → producto
  const lazy = { queue: new Set(), timer: 0, backoff: 0, tries: new Map() };
  const seenIo = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!watching.has(e.target)) continue;
      if (e.isIntersecting) lazy.queue.add(e.target);
      else lazy.queue.delete(e.target);
    }
    pump(0);
  }, { rootMargin: '600px 0px' }); // se adelanta lo que está justo debajo; lo visible tiene prioridad (ver pump)

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
      // Prioridad: lo que se ve, de arriba abajo; primero lo que no tiene foto, después lo que solo hay que refrescar
      const H = window.innerHeight;
      const rank = (c) => {
        const r = c.getBoundingClientRect();
        const visible = r.bottom > 0 && r.top < H;
        return (visible ? 0 : 1e6) + Math.abs(r.top) + (watching.get(c).image ? 5e5 : 0);
      };
      const sorted = [...lazy.queue].sort((a, b) => rank(a) - rank(b));
      // Lo que ya está en la caché de este navegador se pinta de golpe; a la red van pocos cada vez
      const cache = goodsLoad();
      const isCached = (c) => {
        const r = parseProductLink(watching.get(c).link);
        const hit = r && cache.get(`${r.platform}/${r.id}`);
        return !!hit && Date.now() - hit.ts < GOODS_TTL;
      };
      const cards = [...sorted.filter(isCached).slice(0, 30), ...sorted.filter((c) => !isCached(c)).slice(0, 3)];
      if (!cards.length || !me) return;
      const batch = cards.map((c) => ({ c, p: watching.get(c), r: parseProductLink(watching.get(c).link) })).filter((x) => x.r);
      let res;
      try {
        res = await resolveDirect(batch.map((x) => x.r));
      } catch {
        lazy.backoff = Math.min((lazy.backoff || 4000) * 2, 60000);
        return pump(lazy.backoff);
      }
      if (res.capped && !res.items.some((g) => g.status === 'ok')) return; // tope de consultas por visita alcanzado
      lazy.backoff = res.limited ? Math.min((lazy.backoff || 4000) * 2, 60000) : 0;
      res.items.forEach((g, i) => {
        const { c, p, r } = batch[i];
        if (g.status === 'ok') {
          p.image = g.i || p.image;
          p.priceRaw = g.p || p.priceRaw;
          if (p.unnamed) { p.name = g.n; p.unnamed = false; p._n = norm(`${p.name} ${p.sections.join(' ')}`); }
          p.price = parsePrice(p.priceRaw);
          p.done = true;
          p.updated = Date.now();
          fillCard(c, p);
          window.Hauls?.enriched(p);
        } else if (g.status === 'gone') {
          p.gone = true;
          p.done = true;
          c.remove();
        } else if (g.status === 'empty') {
          const k = `${r.platform}/${r.id}`;
          const n = (lazy.tries.get(k) || 0) + 1;
          lazy.tries.set(k, n);
          if (n >= 4) p.done = true; // USFans no devuelve nada de este producto: no se insiste más
        } // 'pending' (USFans limitando o error de red): se reintentará más tarde sin contar como intento
        if (p.done) { lazy.queue.delete(c); watching.delete(c); seenIo.unobserve(c); }
      });
      pump(lazy.backoff || (res.network ? 1000 : 40));
    }, delay);
  }

  function fillCard(card, p) {
    const thumb = card.querySelector('.thumb');
    if (p.image && thumb) {
      const old = thumb.querySelector('img');
      if (!old) {
        const img = document.createElement('img');
        img.decoding = 'async';
        img.referrerPolicy = 'no-referrer';
        img.alt = '';
        img.src = p.image;
        img.onerror = () => img.classList.add('broken');
        thumb.appendChild(img);
      } else if (old.getAttribute('src') !== p.image) {
        old.src = p.image;
      }
    }
    const nameEl = card.querySelector('.name');
    if (nameEl) nameEl.textContent = p.name;
    const meta = card.querySelector('.meta');
    if (meta && p.priceRaw) {
      let pr = meta.querySelector('.price');
      if (!pr) {
        pr = document.createElement('span');
        pr.className = 'price';
        meta.appendChild(pr);
      }
      pr.textContent = formatPrice(p.priceRaw);
    }
  }

  /* ---------- Arranque ---------- */
  function start() {
    if (!API) return;
    $('accountBtn').hidden = false;
    $('accountBtn').onclick = () => (me ? accountModal() : loginModal());
    // Tocar el fondo cierra la ventana. Se cierra al soltar (click) y no al tocar: si se cerrara al tocar, ese mismo toque acabaría sobre el producto que hay debajo y lo abriría
    let downOnBackdrop = false;
    modal().addEventListener('pointerdown', (e) => { downOnBackdrop = e.target === modal(); });
    modal().addEventListener('click', (e) => { if (e.target === modal() && downOnBackdrop) closeModal(); downOnBackdrop = false; });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal().hidden) closeModal(); });
    token = store.get();
    if (token) refreshMe();
  }

  return {
    start, watch, lookup,
    api: call, isLoggedIn: () => !!me, login: (after) => loginModal(after),
    ui: { el, openModal, closeModal, heading, closeBtn, errBox, showErr },
  };
})();
window.Accounts = Accounts;
