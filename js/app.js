/* Plavecký klub Zlín · prototyp: sdílená navigace, patička a animace */
(() => {
  const page = document.body.dataset.page || '';
  const isHome = page === 'home';

  const arrowSvg = '<svg viewBox="0 0 19 19" fill="none" aria-hidden="true"><path d="M3 9.5h13M10.5 4l5.5 5.5-5.5 5.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  window.PKZ = { arrowSvg };

  const programs = [
    ['pripravka.html', 'Přípravka', 'var(--zluta-500)', 'zvire-zaba.svg', '5 až 10 let'],
    ['klubove-plavani.html', 'Klubové plavání', 'var(--modra-300)', 'zvire-kachna.svg', '9 až 15 let'],
    ['sportovni-tridy.html', 'Sportovní třídy', 'var(--navy-700)', 'zvire-bobr.svg', '4. až 9. třída'],
    ['vrcholove-plavani.html', 'Vrcholové plavání', 'var(--oranzova-500)', 'zvire-vydra.svg', 'SŠ a VŠ'],
  ];

  /* ---------- Navigace ---------- */
  const navHost = document.querySelector('[data-nav]');
  if (navHost) {
    const active = (p) => (page === p ? ' is-active' : '');
    const isProgram = ['pripravka', 'klubove', 'sportovni', 'vrcholove'].includes(page);
    navHost.outerHTML = `
    <header class="nav ${isHome ? 'is-home' : 'is-sub'}" id="nav">
      <a class="nav-logo" href="index.html" aria-label="Plavecký klub Zlín, úvod">
        <img class="logo-light" src="assets/logo-white.svg" alt="Plavecký klub Zlín"><img class="logo-dark" src="assets/logo-navy.svg" alt="">
      </a>
      <nav class="nav-menu" aria-label="Hlavní menu">
        <div class="nav-drop">
          <a class="nav-link${isProgram ? ' is-active' : ''}" href="index.html#kurzy">Kurzy <img class="chev" src="assets/chevron.svg" alt=""></a>
          <div class="nav-drop-panel">
            ${programs.map(([h, t, c, ilu, age]) => `<a class="drop-item" href="${h}"><span class="drop-ilu"><img src="assets/${ilu}" alt=""></span><span class="drop-txt"><span class="t-telo-s">${t}</span><span class="t-maly muted">${age}</span></span></a>`).join('')}
          </div>
        </div>
        <a class="nav-link" href="#" data-todo>Tábory</a>
        <a class="nav-link${active('oklubu')}" href="o-klubu.html">O Klubu</a>
        <a class="nav-link" href="aktuality.html">Aktuality</a>
        <a class="nav-link" href="#kontakt">Kontakt</a>
        <a class="btn btn-l btn-cta" href="prihlaska.html">Přihláška</a>
      </nav>
    </header>`;
  }

  /* ---------- Patička ---------- */
  const footHost = document.querySelector('[data-footer]');
  if (footHost) {
    footHost.outerHTML = `
    <img class="footer-wave" src="assets/vlna-paticka.svg" alt="">
    <footer class="footer" id="kontakt">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="index.html"><img src="assets/logo-white-footer.svg" alt="Plavecký klub Zlín"></a>
          <p class="t-telo">Městské lázně Zlín<br>tř. Tomáše Bati<br>info@pkzlin.cz</p>
          <div class="footer-social"><a href="#" data-todo aria-label="Instagram"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg></a><a href="#" data-todo aria-label="Facebook"><svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9z"/></svg></a><a href="#" data-todo aria-label="YouTube"><svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8 1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z"/></svg></a></div>
        </div>
        <div class="footer-cols">
          <div class="footer-col"><span class="t-eyebrow">Kurzy</span>
            ${programs.map(([h, t]) => `<a href="${h}">${t}</a>`).join('')}<a href="#" data-todo>Letní tábory</a></div>
          <div class="footer-col"><span class="t-eyebrow">Klub</span>
            <a href="o-klubu.html#historie">Historie</a><a href="o-klubu.html#treneri">Trenéři</a><a href="o-klubu.html#uspechy">Úspěchy</a><a href="#" data-todo>Galerie</a><a href="o-klubu.html#partneri">Partneři</a></div>
          <div class="footer-col"><span class="t-eyebrow">Pro rodiče</span>
            <a href="pripravka.html#program">Rozvrh</a><a href="prihlaska.html">Ceník</a><a href="prihlaska.html">Přihláška</a><a href="${document.getElementById('faq') ? '#faq' : 'index.html#faq'}">Časté dotazy</a><a href="#kontakt">Kontakt</a></div>
        </div>
      </div>
      <div class="footer-bottom"><div class="footer-legal"><span>© 2026 Plavecký klub Zlín, z. s.</span><a href="#" data-todo>Ochrana osobních údajů</a><a href="#" data-todo>Cookies</a><a href="#" data-todo>Nastavení soukromí</a></div><span>Webdesign: <a href="#" data-todo>Studio 9</a></span></div>
    </footer>`;
  }

  /* ---------- Sticky navigace: stín po odscrollování ---------- */
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Odkazy, které zatím nikam nevedou ---------- */
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-todo]');
    if (!t) return;
    e.preventDefault();
    toast('Tahle stránka zatím není součástí prototypu.');
  });
  function toast(msg) {
    let el = document.querySelector('.toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'toast';
      Object.assign(el.style, { position: 'fixed', left: '50%', bottom: '32px', transform: 'translate(-50%, 20px)', background: 'var(--navy-900)', color: '#fff', padding: '14px 24px', borderRadius: '999px', fontWeight: 600, fontSize: '15px', opacity: 0, transition: 'all .3s cubic-bezier(.22,.61,.36,1)', zIndex: 100, boxShadow: '0 12px 32px rgba(0,46,148,.25)' });
      document.body.appendChild(el);
    }
    el.textContent = msg;
    requestAnimationFrame(() => { el.style.opacity = 1; el.style.transform = 'translate(-50%, 0)'; });
    clearTimeout(el._t);
    el._t = setTimeout(() => { el.style.opacity = 0; el.style.transform = 'translate(-50%, 20px)'; }, 2200);
  }

  /* ---------- Přechod mezi stránkami ---------- */
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (!a || a.hasAttribute('data-todo') || e.metaKey || e.ctrlKey || a.target === '_blank') return;
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    const url = new URL(href, location.href);
    if (url.origin !== location.origin) return;
    if (url.pathname === location.pathname && url.hash) return;
    e.preventDefault();
    document.body.classList.add('is-leaving');
    setTimeout(() => { location.href = url.href; }, 220);
  });
  window.addEventListener('pageshow', () => document.body.classList.remove('is-leaving'));

  /* ---------- Odhalení při scrollu ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal, .reveal-scale').forEach((el) => io.observe(el));
  // Postupné odhalení potomků
  document.querySelectorAll('[data-stagger]').forEach((wrap) => {
    const step = parseFloat(wrap.dataset.stagger) || 0.08;
    [...wrap.children].forEach((c, i) => { c.classList.add('reveal'); c.style.setProperty('--d', `${i * step}s`); io.observe(c); });
  });

  /* ---------- Počítadlo ---------- */
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target; countIO.unobserve(el);
      const to = parseInt(el.dataset.count, 10); const dur = 1400; const t0 = performance.now();
      const tick = (t) => { const p = Math.min(1, (t - t0) / dur); const v = 1 - Math.pow(1 - p, 3); el.textContent = Math.round(to * v); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach((el) => countIO.observe(el));

  /* ---------- FAQ split: odpověď vlevo, otázky vpravo ---------- */
  document.querySelectorAll('section.faq').forEach((sec) => {
    const h2 = sec.querySelector('h2'); const list = sec.querySelector('.faq-list'); if (!h2 || !list) return;
    sec.classList.add('faq-split');
    const head = document.createElement('div'); head.className = 'faq-head';
    head.innerHTML = '<p class="t-perex faq-sub">Nenašli jste odpověď? Napište nám.</p><a class="btn btn-m ' + (sec.classList.contains('faq-wave') ? 'btn-light' : 'btn-outline') + '" href="#kontakt">Kontaktovat</a>';
    h2.removeAttribute('style'); h2.classList.remove('reveal', 'is-in'); head.prepend(h2);
    const body = document.createElement('div'); body.className = 'faq-body';
    const panel = document.createElement('div'); panel.className = 'faq-panel'; panel.setAttribute('aria-live', 'polite');
    const items = [...list.querySelectorAll('.faq-item')]; const total = String(items.length).padStart(2, '0');
    items.forEach((it, i) => { const q = it.querySelector('.faq-q'); const n = document.createElement('span'); n.className = 'faq-n'; n.textContent = String(i + 1).padStart(2, '0'); q.prepend(n); });
    const show = (it) => { const i = items.indexOf(it); const q = it.querySelector('.faq-q').childNodes; const text = [...q].filter((x) => x.nodeType === 3).map((x) => x.textContent).join('').trim();
      panel.innerHTML = '<span class="faq-count">' + String(i + 1).padStart(2, '0') + ' / ' + total + '</span><h3 class="t-h3">' + text + '</h3><p class="t-telo">' + it.querySelector('.faq-a p').innerHTML + '</p>'; };
    sec.insertBefore(head, list); sec.insertBefore(body, list); body.append(panel, list);
    show(items.find((x) => x.classList.contains('is-open')) || items[0]);
    items.forEach((it) => it.querySelector('.faq-q').addEventListener('click', () => { if (matchMedia('(min-width: 901px)').matches) { setTimeout(() => { items.forEach((x) => { x.classList.toggle('is-open', x === it); x.querySelector('.faq-q').setAttribute('aria-expanded', String(x === it)); }); show(it); }, 0); } }));
  });

  /* ---------- FAQ ---------- */
  document.querySelectorAll('.faq-item').forEach((item) => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      const list = item.parentElement;
      list.querySelectorAll('.faq-item.is-open').forEach((o) => { if (o !== item) { o.classList.remove('is-open'); o.querySelector('.faq-q').setAttribute('aria-expanded', 'false'); } });
      const open = item.classList.toggle('is-open');
      item.querySelector('.faq-q').setAttribute('aria-expanded', String(open));
    });
  });

  /* ---------- Carousel: šipky, tažení myší, průběh ---------- */
  document.querySelectorAll('[data-carousel]').forEach((root) => {
    const track = root.querySelector('.carousel-track');
    const prev = root.querySelector('[data-prev]');
    const next = root.querySelector('[data-next]');
    const bar = root.querySelector('.carousel-progress span');
    const dots = root.querySelector('.dots');
    if (dots) dots.innerHTML = '<span></span>'.repeat(5);
    const stepBy = () => { const c = track.children[0]; return c ? c.getBoundingClientRect().width + 24 : 300; };
    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      const p = max > 0 ? track.scrollLeft / max : 0;
      if (bar) { const w = Math.max(12, (track.clientWidth / track.scrollWidth) * 100); bar.style.width = `${w}%`; bar.style.transform = `translateX(${p * (100 / w * (100 - w))}%)`; }
      if (dots) { const vis = track.scrollWidth ? track.clientWidth / track.scrollWidth : 1; dots.style.setProperty('--p', Math.min(1, vis + p * (1 - vis)).toFixed(3)); const n = dots.children.length; const idx = Math.min(n - 1, Math.round(p * (n - 1))); [...dots.children].forEach((d, i) => d.classList.toggle('on', i === idx)); }
      if (prev) prev.disabled = track.scrollLeft < 4;
      if (next) next.disabled = track.scrollLeft > max - 4;
    };
    prev && prev.addEventListener('click', () => track.scrollBy({ left: -stepBy(), behavior: 'smooth' }));
    next && next.addEventListener('click', () => track.scrollBy({ left: stepBy(), behavior: 'smooth' }));
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    let down = false, sx = 0, sl = 0, moved = false;
    track.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') return; down = true; moved = false; sx = e.clientX; sl = track.scrollLeft; track.classList.add('is-drag'); });
    window.addEventListener('pointermove', (e) => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 4) moved = true; track.scrollLeft = sl - dx; });
    window.addEventListener('pointerup', () => { if (!down) return; down = false; track.classList.remove('is-drag'); });
    track.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
    track.querySelectorAll('img').forEach((i) => i.setAttribute('draggable', 'false'));
    update();
  });

  /* ---------- Filtry kalendáře ---------- */
  document.querySelectorAll('[data-filter-group]').forEach((g) => {
    const items = document.querySelectorAll(g.dataset.filterGroup);
    g.querySelectorAll('[data-filter]').forEach((b) => b.addEventListener('click', () => {
      g.querySelectorAll('[data-filter]').forEach((x) => x.classList.toggle('is-active', x === b));
      const f = b.dataset.filter;
      items.forEach((it) => {
        const show = f === 'all' || (it.dataset.tags || '').split(' ').includes(f);
        it.style.transition = 'opacity .3s, transform .3s';
        if (show) { it.hidden = false; requestAnimationFrame(() => { it.style.opacity = 1; it.style.transform = 'none'; }); }
        else { it.style.opacity = 0; it.style.transform = 'translateY(8px)'; setTimeout(() => { it.hidden = true; }, 250); }
      });
      // skrýt prázdné měsíce
      setTimeout(() => document.querySelectorAll('.month').forEach((m) => { m.hidden = ![...m.querySelectorAll('.event')].some((x) => !x.hidden); }), 260);
    }));
    const def = g.querySelector('[data-default]');
    if (def) def.classList.add('is-active');
    else { const all = g.querySelector('[data-filter="all"]'); all && all.classList.add('is-active'); }
  });

  /* ---------- Čipy kurzů: pohyb za myší ---------- */
  document.querySelectorAll('.chip').forEach((c) => {
    c.addEventListener('mousemove', (e) => {
      const r = c.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      c.style.translate = `${(dx * 28).toFixed(1)}px ${(dy * 16).toFixed(1)}px`;
    });
    c.addEventListener('mouseleave', () => { c.style.translate = '0 0'; });
  });

  /* ---------- Jemný parallax ---------- */
  const par = [...document.querySelectorAll('[data-parallax]')];
  if (par.length && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const run = () => { par.forEach((el) => { const r = el.getBoundingClientRect(); const k = parseFloat(el.dataset.parallax) || 0.1; const c = r.top + r.height / 2 - innerHeight / 2; el.style.transform = `translate3d(0, ${(-c * k).toFixed(1)}px, 0)`; }); };
    run(); window.addEventListener('scroll', () => requestAnimationFrame(run), { passive: true });
  }
})();
