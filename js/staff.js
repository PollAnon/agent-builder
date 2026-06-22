// Front desk — advance a patient through stages with one tap.
(function () {
  'use strict';
  const STAGES = ['Booked', 'Waiting', 'In Consultation', 'Done'];
  const DOTS = ['blue', 'amber', 'green', 'green'];
  document.querySelectorAll('.q-row .next').forEach((btn) => {
    btn.addEventListener('click', () => {
      const row = btn.closest('.q-row');
      let s = +row.dataset.stage;
      if (s < STAGES.length - 1) s++;
      row.dataset.stage = s;
      row.querySelector('.q-stage').textContent = STAGES[s];
      row.querySelector('.dot').className = 'dot ' + DOTS[s];
      if (s === STAGES.length - 1) { row.style.opacity = '.55'; btn.disabled = true; btn.textContent = 'Done'; }
    });
  });
})();
