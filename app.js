// OrderBench v1 preview — screen switching + theme vibe.
// Stage 2 will replace the static demo data with live Supabase data.

(function () {
  'use strict';

  // ---- Screen navigation ----
  const navLinks = document.querySelectorAll('.nav-link');
  const screens = document.querySelectorAll('.screen');

  function showScreen(name) {
    screens.forEach((s) => s.classList.toggle('active', s.id === 'screen-' + name));
    navLinks.forEach((l) => l.classList.toggle('active', l.dataset.screen === name));
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => showScreen(link.dataset.screen));
  });

  // ---- Theme / color vibe ----
  const swatches = document.querySelectorAll('.swatch');
  const STORAGE_KEY = 'orderbench-theme';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    swatches.forEach((s) => s.classList.toggle('active', s.dataset.theme === theme));
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
  }

  swatches.forEach((sw) => {
    sw.addEventListener('click', () => applyTheme(sw.dataset.theme));
  });

  // Restore saved vibe on load.
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) applyTheme(saved);
  } catch (e) {}
})();
