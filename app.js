/* ============================================================
   CONFIGURACIÓN — lo único que tendrás que tocar
   ============================================================ */
const CONFIG = {
  brand: 'Salty',
  refCode: 'GRAS35',
  homeUrl: 'https://usfans.com/register?ref=GRAS35',   // sin www: misma sesión que los productos

  // URL del CSV publicado de Google Sheets
  // (Archivo → Compartir → Publicar en la Web → pestaña de productos → CSV).
  // Mientras esté vacía se usan productos de ejemplo.
  dataUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRmR35JwYOSjNTmyIFuODMD8qeoBPNAHn9vk6LUPlH0isNpkYmm1PPYNv-Yb7__F_YPXilIkhFhH1ln/pub?gid=1622828666&single=true&output=csv',

  // Nombres posibles de cada columna en la hoja (sin importar mayúsculas ni tildes).
  columns: {
    name: ['nombre', 'name', 'producto', 'product', 'item', 'titulo', 'title'],
    price: ['precio', 'price', 'pvp', 'coste', 'cost'],
    priceAlt: ['precio usd', 'price usd', 'usd'],   // se usa si no hay precio principal
    link: ['enlace', 'link', 'url', 'usfans', 'usfans link'],
    image: ['imagen', 'image', 'img', 'foto', 'photo', 'picture', 'image url'],
    category: ['categoria', 'category', 'tipo', 'type'],
    section: ['seccion', 'section', 'marca', 'brand'],   // solo se usa en el buscador
    status: ['estado', 'status'],   // las filas "no disponible" no se muestran
  },

  // Nombre que se muestra para cada categoría de la hoja: [nombre en la hoja, español, inglés].
  // Las que no estén aquí salen tal cual. Se compara por el principio del nombre,
  // así "Trending Now 冬" y "Trending Now 夏" van a "Tendencias". El orden de esta lista es el de los botones.
  categoryLabels: [
    ['Trending Now', 'Tendencias', 'Trending'],
    ['Update', 'Novedades', 'New in'],
    ['SHOES', 'Calzado', 'Shoes'],
    ['T shirt and shorts', 'Camisetas y shorts', 'T-shirts & shorts'],
    ['Hoodies and Pants', 'Sudaderas y pantalones', 'Hoodies & pants'],
    ['Coats and Jackets', 'Abrigos y chaquetas', 'Coats & jackets'],
    ['Accessories', 'Accesorios', 'Accessories'],
    ['Electronic products', 'Electrónica', 'Electronics'],
    ["Women's Spreadsheet", 'Mujer', 'Women'],
  ],

  currency: '€',     // símbolo si el precio de la hoja es solo un número
  pageSize: 60,      // productos que se pintan por tanda al hacer scroll
  maxTabs: 10,       // al pasarse, se cierra la pestaña inactiva más antigua
};

/* ============================================================
   TEXTOS EN CADA IDIOMA
   ============================================================ */
const I18N = {
  es: {
    language: 'Idioma',
    products: 'Productos',
    search: 'Busca cualquier producto',
    searchLabel: 'Buscar productos',
    all: 'Todo',
    categories: 'Categorías',
    prevCats: 'Ver categorías anteriores',
    nextCats: 'Ver más categorías',
    sortLabel: 'Ordenar',
    sortDefault: 'Destacados',
    sortPriceAsc: 'Precio ↑',
    sortPriceDesc: 'Precio ↓',
    sortName: 'Nombre A–Z',
    loading: 'Cargando productos…',
    count: '{n} productos',
    countOf: '{n} de {total} productos',
    sample: ' · datos de ejemplo',
    loadError: 'No se pudieron cargar los productos.',
    emptyTitle: 'Sin resultados',
    emptyText: 'Prueba con otra palabra o quita el filtro de categoría.',
    hidePanel: 'Ocultar panel',
    showProducts: 'Mostrar productos',
    themeToDark: 'Cambiar a tema oscuro',
    themeToLight: 'Cambiar a tema claro',
    tabsLabel: 'Pestañas',
    newTab: 'Nueva pestaña',
    closeTab: 'Cerrar pestaña',
    homeTitle: 'Registro en USFans',
    goHome: '← Registro',
    openBrowser: 'Abrir en navegador',
    hint: 'Haz clic derecho en un producto para ver más opciones. Si algo no carga o no puedes pagar, usa <strong>Abrir en navegador</strong>.',
    openHere: 'Abrir aquí',
    openNewTab: 'Abrir en pestaña nueva',
    openNewTabFocus: 'Abrir en pestaña nueva y verla',
    openInBrowser: 'Abrir en el navegador',
    copyLink: 'Copiar enlace',
    kbdCtrlClick: 'Ctrl+clic',
    reload: 'Recargar',
    duplicate: 'Duplicar',
    closeOthers: 'Cerrar otras pestañas',
    kbdMiddleClick: 'Clic central',
  },
  en: {
    language: 'Language',
    products: 'Products',
    search: 'Search any product',
    searchLabel: 'Search products',
    all: 'All',
    categories: 'Categories',
    prevCats: 'Previous categories',
    nextCats: 'More categories',
    sortLabel: 'Sort',
    sortDefault: 'Featured',
    sortPriceAsc: 'Price ↑',
    sortPriceDesc: 'Price ↓',
    sortName: 'Name A–Z',
    loading: 'Loading products…',
    count: '{n} products',
    countOf: '{n} of {total} products',
    sample: ' · sample data',
    loadError: 'Products could not be loaded.',
    emptyTitle: 'No results',
    emptyText: 'Try another word or clear the category filter.',
    hidePanel: 'Hide panel',
    showProducts: 'Show products',
    themeToDark: 'Switch to dark theme',
    themeToLight: 'Switch to light theme',
    tabsLabel: 'Tabs',
    newTab: 'New tab',
    closeTab: 'Close tab',
    homeTitle: 'Sign up on USFans',
    goHome: '← Sign up',
    openBrowser: 'Open in browser',
    hint: 'Right-click a product for more options. If something doesn’t load or you can’t pay, use <strong>Open in browser</strong>.',
    openHere: 'Open here',
    openNewTab: 'Open in new tab',
    openNewTabFocus: 'Open in new tab and switch to it',
    openInBrowser: 'Open in browser',
    copyLink: 'Copy link',
    kbdCtrlClick: 'Ctrl+click',
    reload: 'Reload',
    duplicate: 'Duplicate',
    closeOthers: 'Close other tabs',
    kbdMiddleClick: 'Middle click',
  },
};

// Lo fija el <head> (idioma guardado o el del navegador); se cambia con el selector ES | EN
let lang = document.documentElement.lang === 'en' ? 'en' : 'es';
const locale = () => (lang === 'en' ? 'en-GB' : 'es-ES');

function t(key, vars = {}) {
  const text = I18N[lang][key] ?? I18N.es[key] ?? key;
  return text.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
}

/* ============================================================ */

const $ = (id) => document.getElementById(id);
const els = {
  app: $('app'), drawer: $('drawer'), tools: $('tools'),
  search: $('search'), chips: $('chips'), sort: $('sort'), count: $('count'),
  list: $('list'), grid: $('grid'), sentinel: $('sentinel'),
  frames: $('frames'), frameLoading: $('frameLoading'),
  tabs: $('tabs'), newTab: $('newTab'), menu: $('menu'),
  openTab: $('openTab'), goHome: $('goHome'),
  openDrawer: $('openDrawer'), closeDrawer: $('closeDrawer'),
};

const state = {
  all: [], filtered: [], shown: 0,
  query: '', category: '', sort: 'default', activeId: null,
};

const isMobile = () => window.matchMedia('(max-width: 820px)').matches;

/* ---------- Utilidades ---------- */
const norm = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

function withRef(url) {
  try {
    const u = new URL(url);
    if (/(^|\.)usfans\.com$/i.test(u.hostname)) {
      // www.usfans.com y usfans.com guardan la sesión por separado: todo va a usfans.com
      // para que la sesión iniciada en el iframe sirva en todas las páginas
      u.hostname = 'usfans.com';
      u.searchParams.set('ref', CONFIG.refCode);
    }
    return u.toString();
  } catch {
    return url;
  }
}

function parsePrice(raw) {
  const m = String(raw ?? '').replace(',', '.').match(/\d+(\.\d+)?/);
  return m ? parseFloat(m[0]) : NaN;
}

function formatPrice(raw) {
  const s = String(raw ?? '').trim();
  if (!s) return '';
  if (!/^[\d.,\s]+\s*€?$/.test(s)) return s;
  const n = parsePrice(s);
  return isNaN(n) ? s : n.toLocaleString(locale(), { style: 'currency', currency: 'EUR' });
}

function pickColumn(headers, candidates) {
  const nh = headers.map(norm);
  for (const c of candidates) {
    const i = nh.indexOf(c);
    if (i !== -1) return headers[i];
  }
  for (const c of candidates) {
    const i = nh.findIndex((h) => h.includes(c));
    if (i !== -1) return headers[i];
  }
  return null;
}

/* ---------- Carga de datos ---------- */
function toProducts(rows, headers) {
  const col = {};
  for (const [key, cands] of Object.entries(CONFIG.columns)) col[key] = pickColumn(headers, cands);

  // Un producto puede aparecer en varias pestañas de la hoja: se junta en uno solo con todas sus categorías
  const byLink = new Map();
  for (const r of rows) {
    if (norm(r[col.status]) === 'no disponible') continue;
    const name = String(r[col.name] ?? '').trim();
    const link = String(r[col.link] ?? '').trim();
    if (!name || !link) continue;
    const key = withRef(link);
    const category = categoryKey(String(r[col.category] ?? '').trim());
    const section = String(r[col.section] ?? '').trim();
    const p = byLink.get(key);
    if (p) {
      if (category && !p.categories.includes(category)) p.categories.push(category);
      if (section && !p.sections.includes(section)) p.sections.push(section);
      continue;
    }
    byLink.set(key, {
      name,
      link,
      priceRaw: String(r[col.price] ?? '').trim() || String(r[col.priceAlt] ?? '').trim(),
      image: String(r[col.image] ?? '').trim(),
      categories: category ? [category] : [],
      sections: section ? [section] : [],
    });
  }
  // El id es la posición en la lista final: se usa para encontrar el producto al hacer clic
  return [...byLink.values()].map((p, i) => ({
    ...p,
    id: i,
    price: parsePrice(p.priceRaw),
    // Se busca también por el nombre de la categoría en los dos idiomas
    _n: norm(`${p.name} ${p.categories.map(categoryNames).join(' ')} ${p.sections.join(' ')}`),
  }));
}

// Clave estable de la categoría: el nombre de CONFIG.categoryLabels, o el de la hoja si no está
function categoryKey(raw) {
  const hit = CONFIG.categoryLabels.find(([from]) => norm(raw).startsWith(norm(from)));
  return hit ? hit[0] : raw;
}

function categoryLabel(key) {
  const hit = CONFIG.categoryLabels.find(([from]) => from === key);
  return hit ? (lang === 'en' ? hit[2] : hit[1]) : key;
}

function categoryNames(key) {
  const hit = CONFIG.categoryLabels.find(([from]) => from === key);
  return hit ? hit.join(' ') : key;
}

function loadCsv(url) {
  return new Promise((resolve, reject) => {
    Papa.parse(url, {
      download: true, header: true, skipEmptyLines: true,
      complete: (res) => resolve(toProducts(res.data, res.meta.fields || [])),
      error: reject,
    });
  });
}

function sampleProducts() {
  const cats = ['Calzado', 'Tops', 'Partes de abajo', 'Ropa de abrigo', 'Accesorios', 'Bolsos', 'Joyería'];
  const words = {
    Calzado: ['Zapatillas running', 'Botas montaña', 'Sneakers retro', 'Mocasines piel', 'Zapatillas skate'],
    Tops: ['Camiseta oversize', 'Polo piqué', 'Sudadera capucha', 'Camisa lino', 'Jersey punto'],
    'Partes de abajo': ['Vaqueros baggy', 'Pantalón cargo', 'Shorts nylon', 'Chándal', 'Pantalón pinzas'],
    'Ropa de abrigo': ['Plumífero', 'Chaqueta bomber', 'Cortavientos', 'Abrigo lana', 'Chaleco acolchado'],
    Accesorios: ['Gorra', 'Gafas de sol', 'Cinturón', 'Bufanda', 'Gorro beanie'],
    Bolsos: ['Mochila', 'Bandolera', 'Tote bag', 'Riñonera', 'Bolso mini'],
    Joyería: ['Collar cadena', 'Anillo plata', 'Pulsera', 'Pendientes', 'Reloj'],
  };
  const colors = ['negro', 'blanco', 'gris', 'azul', 'verde', 'beige', 'marrón', 'rojo'];
  const out = [];
  for (let i = 0; i < 1200; i++) {
    const c = cats[i % cats.length];
    const w = words[c][(i * 7) % 5];
    const color = colors[(i * 3) % colors.length];
    const price = (8 + ((i * 37) % 140) + 0.99).toFixed(2);
    out.push({ Nombre: `${w} ${color} #${i + 1}`, Precio: price, Enlace: `https://www.usfans.com/?demo=${i}`, Imagen: '', Categoria: c });
  }
  return toProducts(out, ['Nombre', 'Precio', 'Enlace', 'Imagen', 'Categoria']);
}

/* ---------- Filtrado y pintado ---------- */
function applyFilters() {
  const tokens = norm(state.query).split(/\s+/).filter(Boolean);
  let list = state.all.filter((p) =>
    (!state.category || p.categories.includes(state.category)) &&
    tokens.every((t) => p._n.includes(t)));

  const byPrice = (a, b) => (isNaN(a.price) ? Infinity : a.price) - (isNaN(b.price) ? Infinity : b.price);
  if (state.sort === 'price-asc') list = list.slice().sort(byPrice);
  else if (state.sort === 'price-desc') list = list.slice().sort((a, b) => byPrice(b, a));
  else if (state.sort === 'name') list = list.slice().sort((a, b) => a.name.localeCompare(b.name, lang));

  state.filtered = list;
  state.shown = 0;
  els.grid.replaceChildren();
  els.list.scrollTop = 0;

  renderCount();
  if (!list.length) {
    els.grid.innerHTML = `<p class="empty"><strong>${t('emptyTitle')}</strong>${t('emptyText')}</p>`;
    return;
  }
  renderMore();
}

function renderCount() {
  const n = state.filtered.length;
  const total = state.all.length;
  const fmt = (x) => x.toLocaleString(locale());
  els.count.textContent = (n === total ? t('count', { n: fmt(n) }) : t('countOf', { n: fmt(n), total: fmt(total) }))
    + (CONFIG.dataUrl ? '' : t('sample'));
}

function cardFor(p) {
  const a = document.createElement('a');
  a.className = 'card' + (p.id === state.activeId ? ' active' : '');
  a.href = withRef(p.link);
  a.target = '_blank';
  a.rel = 'noopener';
  a.dataset.id = p.id;

  const thumb = document.createElement('div');
  thumb.className = 'thumb';
  if (p.image) {
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.decoding = 'async';
    img.referrerPolicy = 'no-referrer';
    img.alt = '';
    img.src = p.image;
    img.onerror = () => img.classList.add('broken');
    thumb.appendChild(img);
  }

  const meta = document.createElement('div');
  meta.className = 'meta';
  const name = document.createElement('span');
  name.className = 'name';
  name.textContent = p.name;
  meta.appendChild(name);
  const price = formatPrice(p.priceRaw);
  if (price) {
    const pr = document.createElement('span');
    pr.className = 'price';
    pr.textContent = price;
    meta.appendChild(pr);
  }

  a.append(thumb, meta);
  return a;
}

function renderMore() {
  const next = state.filtered.slice(state.shown, state.shown + CONFIG.pageSize);
  if (!next.length) return;
  const frag = document.createDocumentFragment();
  next.forEach((p) => frag.appendChild(cardFor(p)));
  els.grid.appendChild(frag);
  state.shown += next.length;
}

function renderChips() {
  // Orden: el de CONFIG.categoryLabels (Tendencias, Novedades…) y después el resto por número de productos
  const counts = new Map();
  state.all.forEach((p) => p.categories.forEach((c) => counts.set(c, (counts.get(c) || 0) + 1)));
  const order = CONFIG.categoryLabels.map(([from]) => from);
  const rank = (c) => (order.includes(c) ? order.indexOf(c) : order.length);
  const cats = [...counts.keys()].sort((a, b) => rank(a) - rank(b) || counts.get(b) - counts.get(a));
  els.chips.replaceChildren();
  if (!cats.length) return;
  for (const c of ['', ...cats]) {
    const b = document.createElement('button');
    b.className = 'chip';
    b.textContent = c ? categoryLabel(c) : t('all');
    b.setAttribute('aria-pressed', String(c === state.category));
    b.onclick = () => {
      state.category = c;
      els.chips.querySelectorAll('.chip').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      applyFilters();
    };
    els.chips.appendChild(b);
  }
  updateChipArrows();
}

/* ---------- Desplazamiento de las categorías ---------- */
// Rueda del ratón (vertical → horizontal), arrastrar con el ratón y flechas a los lados
let updateChipArrows = () => {};

function setupChipScroll() {
  const strip = els.chips;
  const box = $('filters');

  updateChipArrows = () => {
    const max = strip.scrollWidth - strip.clientWidth;
    box.classList.toggle('can-prev', strip.scrollLeft > 2);
    box.classList.toggle('can-next', strip.scrollLeft < max - 2);
  };
  const step = () => strip.clientWidth * 0.7;

  $('chipsPrev').onclick = () => strip.scrollBy({ left: -step() });
  $('chipsNext').onclick = () => strip.scrollBy({ left: step() });
  strip.addEventListener('scroll', updateChipArrows, { passive: true });
  window.addEventListener('resize', updateChipArrows);

  strip.addEventListener('wheel', (e) => {
    if (strip.scrollWidth <= strip.clientWidth || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    e.preventDefault();
    strip.scrollBy({ left: e.deltaY, behavior: 'auto' });
  }, { passive: false });

  // Arrastrar con el ratón; en pantallas táctiles ya funciona el deslizamiento nativo
  let startX = 0;
  let startLeft = 0;
  let moved = false;
  let pointerId = null;
  strip.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    pointerId = e.pointerId;
    startX = e.clientX;
    startLeft = strip.scrollLeft;
    moved = false;
  });
  strip.addEventListener('pointermove', (e) => {
    if (e.pointerId !== pointerId) return;
    const dx = e.clientX - startX;
    if (!moved && Math.abs(dx) > 5) {
      moved = true;
      strip.classList.add('dragging');
      strip.setPointerCapture(pointerId);
    }
    if (moved) strip.scrollLeft = startLeft - dx;
  });
  const end = () => {
    pointerId = null;
    strip.classList.remove('dragging');
  };
  strip.addEventListener('pointerup', end);
  strip.addEventListener('pointercancel', end);
  // Soltar tras arrastrar no debe contar como clic en una categoría
  strip.addEventListener('click', (e) => {
    if (!moved) return;
    e.stopPropagation();
    moved = false;
  }, true);
}

/* ---------- Tema ---------- */
let refreshThemeLabel = () => {};

// Claro por defecto; el oscuro solo si el usuario lo elige (se recuerda en este navegador)
function setupTheme() {
  const btn = $('themeToggle');
  const apply = (dark) => {
    if (dark) document.documentElement.dataset.theme = 'dark';
    else delete document.documentElement.dataset.theme;
    const label = dark ? t('themeToLight') : t('themeToDark');
    btn.title = label;
    btn.setAttribute('aria-label', label);
    btn.setAttribute('aria-pressed', String(dark));
    $('themeColor').content = dark ? '#000000' : '#f5f5f7';
  };
  apply(document.documentElement.dataset.theme === 'dark');
  refreshThemeLabel = () => apply(document.documentElement.dataset.theme === 'dark');
  btn.onclick = () => {
    const dark = document.documentElement.dataset.theme !== 'dark';
    apply(dark);
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch (e) {
      // Sin almacenamiento (modo privado): el tema dura hasta recargar
    }
  };
}

/* ---------- Pestañas (cada una con su propio iframe) ---------- */
const tabs = [];
let activeTab = null;
let tabSeq = 0;
// La pestaña de registro no guarda título: se muestra en el idioma actual
const HOME_TITLE = '';
const tabTitle = (tab) => (tab.url === CONFIG.homeUrl ? t('homeTitle') : tab.title);

function syncActiveUi() {
  els.frameLoading.classList.toggle('done', activeTab.loaded);
  els.openTab.href = activeTab.url;
  els.goHome.hidden = activeTab.url === CONFIG.homeUrl;
}

function createTab(url, title, { activate = true } = {}) {
  if (tabs.length >= CONFIG.maxTabs) {
    const oldest = tabs.find((t) => t !== activeTab);
    if (oldest) closeTab(oldest);
  }
  const iframe = document.createElement('iframe');
  iframe.title = title || t('homeTitle');
  iframe.allow = 'clipboard-write; payment';
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  iframe.hidden = true;
  const tab = { id: ++tabSeq, url, title, iframe, loaded: false, isNew: !activate };
  iframe.addEventListener('load', () => {
    tab.loaded = true;
    if (tab === activeTab) els.frameLoading.classList.add('done');
  });
  iframe.src = url;
  els.frames.insertBefore(iframe, els.frameLoading);
  tabs.push(tab);
  if (activate) activateTab(tab);
  else renderTabs();
  return tab;
}

function activateTab(tab) {
  activeTab = tab;
  tabs.forEach((t) => { t.iframe.hidden = t !== tab; });
  syncActiveUi();
  renderTabs();
}

function navigateTab(tab, url, title) {
  Object.assign(tab, { url, title, loaded: false });
  tab.iframe.title = title || t('homeTitle');
  tab.iframe.src = url;
  if (tab === activeTab) syncActiveUi();
  renderTabs();
}

function closeTab(tab) {
  const i = tabs.indexOf(tab);
  if (i === -1) return;
  tab.iframe.remove();
  tabs.splice(i, 1);
  if (!tabs.length) createTab(CONFIG.homeUrl, HOME_TITLE);
  else if (tab === activeTab) activateTab(tabs[Math.min(i, tabs.length - 1)]);
  else renderTabs();
}

function renderTabs() {
  els.tabs.replaceChildren();
  for (const t of tabs) {
    const el = document.createElement('div');
    el.className = 'tab' + (t.isNew ? ' new' : '');
    el.role = 'tab';
    el.title = tabTitle(t);
    el.setAttribute('aria-selected', String(t === activeTab));
    el.innerHTML = '<span class="tab-dot"></span><span class="tab-title"></span><button class="tab-close">×</button>';
    el.querySelector('.tab-title').textContent = tabTitle(t);
    el.querySelector('.tab-close').setAttribute('aria-label', I18N[lang].closeTab);
    el.onclick = (e) => (e.target.closest('.tab-close') ? closeTab(t) : activateTab(t));
    el.onauxclick = (e) => { if (e.button === 1) { e.preventDefault(); closeTab(t); } };
    el.oncontextmenu = (e) => { e.preventDefault(); showMenu(e.clientX, e.clientY, tabTitle(t), tabMenu(t)); };
    els.tabs.appendChild(el);
    t.isNew = false;
    if (t === activeTab) requestAnimationFrame(() => el.scrollIntoView({ block: 'nearest', inline: 'nearest' }));
  }
}

/* ---------- Menú contextual propio ---------- */
function showMenu(x, y, heading, items) {
  const m = els.menu;
  m.replaceChildren();
  if (heading) {
    const h = document.createElement('div');
    h.className = 'menu-head';
    h.textContent = heading;
    m.appendChild(h);
  }
  for (const it of items) {
    if (it === '-') {
      m.appendChild(Object.assign(document.createElement('div'), { className: 'menu-sep' }));
      continue;
    }
    const b = document.createElement('button');
    b.className = 'menu-item';
    b.role = 'menuitem';
    b.innerHTML = `<span class="ico">${it.icon || ''}</span><span></span>${it.kbd ? `<span class="kbd">${it.kbd}</span>` : ''}`;
    b.children[1].textContent = it.label;
    b.onclick = () => { hideMenu(); it.action(); };
    m.appendChild(b);
  }
  m.hidden = false;
  const r = m.getBoundingClientRect();
  m.style.left = `${Math.max(8, Math.min(x, innerWidth - r.width - 8))}px`;
  m.style.top = `${Math.max(8, Math.min(y, innerHeight - r.height - 8))}px`;
  m.querySelector('.menu-item')?.focus();
}

function hideMenu() { els.menu.hidden = true; }

function productMenu(p) {
  const url = withRef(p.link);
  return [
    { icon: '↵', label: t('openHere'), action: () => openProduct(p) },
    { icon: '⧉', label: t('openNewTab'), kbd: t('kbdCtrlClick'), action: () => openProduct(p, { newTab: true }) },
    { icon: '⇱', label: t('openNewTabFocus'), action: () => openProduct(p, { newTab: true, focus: true }) },
    '-',
    { icon: '↗', label: t('openInBrowser'), action: () => window.open(url, '_blank', 'noopener') },
    { icon: '⎘', label: t('copyLink'), action: () => navigator.clipboard?.writeText(url) },
  ];
}

function tabMenu(t) {
  return [
    { icon: '↻', label: I18N[lang].reload, action: () => navigateTab(t, t.url, t.title) },
    { icon: '⧉', label: I18N[lang].duplicate, action: () => createTab(t.url, t.title) },
    { icon: '↗', label: I18N[lang].openInBrowser, action: () => window.open(t.url, '_blank', 'noopener') },
    '-',
    { icon: '✕', label: I18N[lang].closeOthers, action: () => tabs.filter((x) => x !== t).forEach(closeTab) },
    { icon: '✕', label: I18N[lang].closeTab, kbd: I18N[lang].kbdMiddleClick, action: () => closeTab(t) },
  ];
}

/* ---------- Productos → pestañas ---------- */
function openProduct(p, { newTab = false, focus = false } = {}) {
  const url = withRef(p.link);
  if (newTab) createTab(url, p.name, { activate: focus });
  else navigateTab(activeTab, url, p.name);

  state.activeId = p.id;
  els.grid.querySelectorAll('.card.active').forEach((c) => c.classList.remove('active'));
  els.grid.querySelector(`.card[data-id="${p.id}"]`)?.classList.add('active');
  if (isMobile() && (!newTab || focus)) setDrawer(false);
  if (typeof window.gtag === 'function') window.gtag('event', 'product_click', { item_name: p.name, new_tab: newTab });
}

const productFrom = (e) => {
  const card = e.target.closest('.card');
  return card ? state.all[+card.dataset.id] : null;
};

function onProductClick(e) {
  const p = productFrom(e);
  if (!p || e.button !== 0) return;
  e.preventDefault();
  openProduct(p, { newTab: e.ctrlKey || e.metaKey || e.shiftKey });
}

/* ---------- Panel lateral y pestañas de herramientas ---------- */
// Para añadir una herramienta: añade un <section class="tool" id="tool-xxx"> en index.html y una entrada aquí.
const TOOLS = [{ id: 'products', labelKey: 'products' }];

function renderTools() {
  els.tools.hidden = TOOLS.length < 2;
  for (const t of TOOLS) {
    const b = document.createElement('button');
    b.role = 'tab';
    b.textContent = I18N[lang][t.labelKey];
    b.setAttribute('aria-selected', String(t === TOOLS[0]));
    b.onclick = () => {
      els.tools.querySelectorAll('button').forEach((x) => x.setAttribute('aria-selected', String(x === b)));
      TOOLS.forEach((x) => { $(`tool-${x.id}`).hidden = x !== t; });
    };
    els.tools.appendChild(b);
  }
}

function renderSkeleton(n = 8) {
  els.grid.innerHTML = Array.from({ length: n }, () =>
    '<div class="card skeleton" aria-hidden="true"><div class="thumb"></div><div class="meta"><div class="bar-line"></div><div class="bar-line short"></div></div></div>').join('');
}

function setDrawer(open) {
  els.app.classList.toggle('collapsed', !open);
}

/* ---------- Idioma ---------- */
// Textos fijos de la página: data-i18n (texto), data-i18n-html (texto con formato)
// y data-i18n-attr="atributo:clave;atributo:clave"
function applyStaticTexts() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.dataset.i18nAttr.split(';').forEach((pair) => {
      const [attr, key] = pair.split(':');
      el.setAttribute(attr, t(key));
    });
  });
  document.querySelectorAll('.lang-switch [data-lang]').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  });
}

function setLanguage(next) {
  if (next === lang) return;
  lang = next;
  try {
    localStorage.setItem('lang', lang);
  } catch (e) {
    // Sin almacenamiento (modo privado): el idioma dura hasta recargar
  }
  applyStaticTexts();
  refreshThemeLabel();
  els.tools.replaceChildren();
  renderTools();
  renderTabs();
  tabs.forEach((tab) => { tab.iframe.title = tabTitle(tab); });
  hideMenu();
  if (state.all.length) {
    // Se repintan categorías, contador y tarjetas (los precios cambian de formato) sin perder el filtro
    renderChips();
    applyFilters();
  }
}

/* ---------- Arranque ---------- */
async function init() {
  document.title = `${CONFIG.brand} Finds`;
  applyStaticTexts();
  document.querySelectorAll('.lang-switch [data-lang]').forEach((b) => {
    b.onclick = () => setLanguage(b.dataset.lang);
  });
  renderTools();
  setupTheme();
  setupChipScroll();

  createTab(CONFIG.homeUrl, HOME_TITLE);
  if (isMobile()) setDrawer(false);

  els.openDrawer.onclick = () => setDrawer(els.app.classList.contains('collapsed'));
  els.closeDrawer.onclick = () => setDrawer(false);
  els.goHome.onclick = () => navigateTab(activeTab, CONFIG.homeUrl, HOME_TITLE);
  els.newTab.onclick = () => createTab(CONFIG.homeUrl, HOME_TITLE);

  els.grid.addEventListener('click', onProductClick);
  els.grid.addEventListener('auxclick', (e) => {
    const p = productFrom(e);
    if (p && e.button === 1) { e.preventDefault(); openProduct(p, { newTab: true }); }
  });
  els.grid.addEventListener('contextmenu', (e) => {
    const p = productFrom(e);
    if (!p) return;
    e.preventDefault();
    showMenu(e.clientX, e.clientY, p.name, productMenu(p));
  });

  // Cerrar el menú: clic fuera, Escape, scroll, redimensionar o clic dentro de un iframe (la ventana pierde el foco)
  document.addEventListener('pointerdown', (e) => { if (!els.menu.contains(e.target)) hideMenu(); });
  document.addEventListener('keydown', (e) => {
    if (els.menu.hidden) return;
    if (e.key === 'Escape') hideMenu();
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const items = [...els.menu.querySelectorAll('.menu-item')];
      const i = items.indexOf(document.activeElement);
      items[(i + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length].focus();
    }
  });
  els.list.addEventListener('scroll', hideMenu, { passive: true });
  window.addEventListener('resize', hideMenu);
  window.addEventListener('blur', hideMenu);

  let searchTimer;
  els.search.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { state.query = els.search.value; applyFilters(); }, 120);
  });
  els.sort.onchange = () => { state.sort = els.sort.value; applyFilters(); };

  new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) renderMore();
  }, { root: els.list, rootMargin: '600px' }).observe(els.sentinel);

  renderSkeleton();
  try {
    state.all = CONFIG.dataUrl ? await loadCsv(CONFIG.dataUrl) : sampleProducts();
  } catch (err) {
    console.error(err);
    els.count.removeAttribute('data-i18n');
    els.count.textContent = t('loadError');
    return;
  }
  // A partir de aquí el contador lo escribe renderCount(), no applyStaticTexts()
  els.count.removeAttribute('data-i18n');
  renderChips();
  applyFilters();
}

document.addEventListener('DOMContentLoaded', init);
