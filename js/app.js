// AgentBench v1 — guided builder with live preview.
// The panel on the left edits a blueprint; the preview on the right reflects it.
// Stage 2 will persist this blueprint config to Supabase.

(function () {
  'use strict';

  // ---- Preview tab switching ----
  const tabs = document.querySelectorAll('.ptab');
  const views = document.querySelectorAll('.view');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const v = tab.dataset.view;
      tabs.forEach((t) => t.classList.toggle('active', t === tab));
      views.forEach((view) => view.classList.toggle('active', view.id === 'view-' + v));
    });
  });

  // ---- Live business name + tagline ----
  const inpName = document.getElementById('inpName');
  const inpTag = document.getElementById('inpTag');
  const pvName = document.getElementById('pvName');
  const pvTag = document.getElementById('pvTag');
  const bizChip = document.getElementById('bizName');
  const avatar = document.querySelector('.avatar');

  function syncName() {
    const name = inpName.value.trim() || 'Untitled Business';
    pvName.textContent = name;
    bizChip.textContent = name;
    if (avatar) avatar.textContent = name.charAt(0).toUpperCase();
  }
  function syncTag() { pvTag.textContent = inpTag.value.trim(); }
  inpName.addEventListener('input', syncName);
  inpTag.addEventListener('input', syncTag);

  // ---- Role toggles show/hide preview tabs ----
  const roleMap = { doctor: 'doctor', reception: 'reception', customer: 'customer' };
  document.querySelectorAll('input[data-role]').forEach((cb) => {
    cb.addEventListener('change', () => {
      const role = cb.dataset.role;
      if (role === 'single') return; // single-owner handled separately
      const tab = document.querySelector('.ptab[data-view="' + roleMap[role] + '"]');
      if (tab) tab.style.display = cb.checked ? '' : 'none';
    });
  });

  // ---- Customer page section toggles ----
  const secEls = {
    about: document.querySelector('.doc-hero'),
    book: document.querySelector('#view-customer .btn-primary'),
    reviews: document.querySelector('.review-card'),
  };
  document.querySelectorAll('input[data-sec]').forEach((cb) => {
    cb.addEventListener('change', () => {
      const el = secEls[cb.dataset.sec];
      if (el) el.style.display = cb.checked ? '' : 'none';
    });
  });

  // ---- Stages: add / remove ----
  const stages = document.getElementById('stages');
  const newStage = document.getElementById('newStage');
  const addStage = document.getElementById('addStage');

  function wireRemove(pill) {
    pill.querySelector('.x').addEventListener('click', () => pill.remove());
  }
  stages.querySelectorAll('.stage-pill').forEach(wireRemove);

  function addStageItem() {
    const val = newStage.value.trim();
    if (!val) return;
    const pill = document.createElement('span');
    pill.className = 'stage-pill';
    pill.innerHTML = val + ' <button class="x">\u00d7</button>';
    stages.appendChild(pill);
    wireRemove(pill);
    newStage.value = '';
    newStage.focus();
  }
  addStage.addEventListener('click', addStageItem);
  newStage.addEventListener('keydown', (e) => { if (e.key === 'Enter') addStageItem(); });

  // ---- Share + Save (placeholders until Stage 2 / Supabase) ----
  document.getElementById('shareBtn').addEventListener('click', () => {
    alert('Stage 2: this generates a shareable link + QR for the customer page.');
  });
  document.getElementById('saveBtn').addEventListener('click', () => {
    alert('Stage 2: this saves the blueprint as a live agent in Supabase.');
  });
})();
