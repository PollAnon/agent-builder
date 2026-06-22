// Owner — count-up KPIs + add personal reminders.
(function () {
  'use strict';
  document.querySelectorAll('.kpi-val[data-count]').forEach((el) => {
    const target = +el.dataset.count; const suffix = el.dataset.suffix || '';
    let cur = 0; const t = setInterval(() => {
      cur += target / 40;
      if (cur >= target) { cur = target; clearInterval(t); }
      el.textContent = Math.round(cur) + suffix;
    }, 20);
  });
  const addRem = document.getElementById('addRem');
  if (addRem) addRem.addEventListener('click', () => {
    const txt = prompt('New reminder:');
    if (!txt) return;
    const div = document.createElement('div');
    div.className = 'reminder';
    div.innerHTML = '<span class="dot blue"></span>' + txt;
    document.getElementById('remList').appendChild(div);
  });
})();
