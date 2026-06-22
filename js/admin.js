// Admin — animated count-up KPIs.
(function () {
  'use strict';
  function countUp(el) {
    const target = +el.dataset.count;
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    let cur = 0; const inc = target / 45;
    const t = setInterval(() => {
      cur += inc;
      if (cur >= target) { cur = target; clearInterval(t); }
      el.textContent = prefix + Math.round(cur).toLocaleString() + suffix;
    }, 18);
  }
  document.querySelectorAll('.kpi-val[data-count]').forEach(countUp);
})();
