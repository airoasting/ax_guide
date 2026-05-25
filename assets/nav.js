(function () {
    'use strict';

    const subMenu = document.querySelector('nav.sub-menu');
    if (!subMenu) return;
    const links = Array.from(subMenu.querySelectorAll('a'));
    if (!links.length) return;

    // ===== Drawer DOM =====
    const toggle = document.createElement('button');
    toggle.className = 'sm-menu-toggle';
    toggle.setAttribute('aria-label', '메뉴 열기');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">' +
        '<line x1="4" y1="7" x2="20" y2="7"/>' +
        '<line x1="4" y1="12" x2="20" y2="12"/>' +
        '<line x1="4" y1="17" x2="20" y2="17"/>' +
        '</svg>';

    const backdrop = document.createElement('div');
    backdrop.className = 'sm-menu-backdrop';

    const drawer = document.createElement('aside');
    drawer.className = 'sm-drawer';
    drawer.setAttribute('aria-hidden', 'true');

    const heading = document.createElement('div');
    heading.className = 'sm-drawer-heading';
    const activeLink = subMenu.querySelector('a.active');
    const headerActive = document.querySelector('.header-page-link.active');
    const h1 = document.querySelector('.hero h1, h1');
    heading.textContent =
        (activeLink && activeLink.textContent.trim()) ||
        (headerActive && headerActive.textContent.trim()) ||
        (h1 && h1.textContent.trim()) ||
        document.title;

    const back = document.createElement('a');
    back.className = 'sm-drawer-back';
    back.href = 'index.html';
    back.textContent = '← 목록으로';

    const list = document.createElement('div');
    list.className = 'sm-drawer-list';

    const drawerItems = [];
    links.forEach(function (a, i) {
        const item = document.createElement('a');
        item.className = 'sm-drawer-item' + (a.classList.contains('active') ? ' active' : '');
        item.href = a.getAttribute('href');

        const numEl = a.querySelector('.num');
        const titleEl = a.querySelector('.title');
        const subEl = a.querySelector('.sub');

        const num = document.createElement('span');
        num.className = 'sm-drawer-num';
        num.textContent = numEl ? numEl.textContent.trim() : String(i + 1);

        const titleWrap = document.createElement('span');
        titleWrap.className = 'sm-drawer-title';
        titleWrap.textContent = titleEl ? titleEl.textContent.trim() : a.textContent.trim();

        if (subEl) {
            const sub = document.createElement('span');
            sub.className = 'sm-drawer-sub';
            sub.textContent = subEl.textContent.trim();
            titleWrap.appendChild(sub);
        }

        item.appendChild(num);
        item.appendChild(titleWrap);
        item.addEventListener('click', closeDrawer);
        list.appendChild(item);
        drawerItems.push(item);
    });

    drawer.appendChild(heading);
    drawer.appendChild(back);
    drawer.appendChild(list);

    document.body.appendChild(toggle);
    document.body.appendChild(backdrop);
    document.body.appendChild(drawer);

    function openDrawer() {
        document.body.classList.add('sm-menu-open');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', '메뉴 닫기');
        drawer.setAttribute('aria-hidden', 'false');
    }
    function closeDrawer() {
        document.body.classList.remove('sm-menu-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', '메뉴 열기');
        drawer.setAttribute('aria-hidden', 'true');
    }
    toggle.addEventListener('click', function () {
        document.body.classList.contains('sm-menu-open') ? closeDrawer() : openDrawer();
    });
    backdrop.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeDrawer();
    });

    // ===== Active sync (sub-menu → drawer + heading) =====
    const observer = new MutationObserver(function () {
        const newActive = subMenu.querySelector('a.active');
        drawerItems.forEach(function (item, i) {
            item.classList.toggle('active', links[i] === newActive);
        });
        if (newActive) heading.textContent = newActive.textContent.trim();
    });
    observer.observe(subMenu, { attributes: true, subtree: true, attributeFilter: ['class'] });

    // ===== Scroll spy =====
    const spyMap = {};
    links.forEach(function (a) {
        const href = a.getAttribute('href');
        if (href && href.startsWith('#')) spyMap[href.slice(1)] = a;
    });
    const sections = Object.keys(spyMap)
        .map(function (id) { return document.getElementById(id); })
        .filter(Boolean);

    if (sections.length) {
        const io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const a = spyMap[entry.target.id];
                    if (!a) return;
                    links.forEach(function (x) { x.classList.remove('active'); });
                    a.classList.add('active');
                }
            });
        }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
        sections.forEach(function (s) { io.observe(s); });
    }
})();
