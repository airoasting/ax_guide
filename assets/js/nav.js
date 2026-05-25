(function() {
  const nav = document.querySelector('.nav-wrapper');
  if (!nav) return;

  // 스크롤 시 그림자 토글 (idempotent)
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // 현재 페이지 active 표시 (마지막 path segment 정확 매칭)
  const current = (location.pathname.split('/').filter(Boolean).pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-btn').forEach(btn => {
    const href = (btn.getAttribute('href') || '').split('/').pop().split('?')[0].split('#')[0].toLowerCase();
    const isCurrent = href === current
      || (current === 'index.html' && (href === '' || href === 'index.html'));
    if (isCurrent) {
      btn.classList.add('active');
      btn.setAttribute('aria-current', 'page');
    }
  });
})();
