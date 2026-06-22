// Builder — guided panel + live preview, add/remove roles & stages,
// image upload, and a working single-owner mode.
(function () {
  'use strict';
  const tabs = document.querySelectorAll('.ptab');
  const views = document.querySelectorAll('.view');
  function showView(v) {
    tabs.forEach((t) => t.classList.toggle('active', t.dataset.view === v));
    views.forEach((view) => view.classList.toggle('active', view.id === 'view-' + v));
  }
  tabs.forEach((tab) => tab.addEventListener('click', () => showView(tab.dataset.view)));

  const inpName = document.getElementById('inpName');
  const inpTag = document.getElementById('inpTag');
  const pvName = document.getElementById('pvName');
  const pvTag = document.getElementById('pvTag');
  const pvAvatar = document.getElementById('pvAvatar');
  inpName.addEventListener('input', () => {
    const n = inpName.value.trim() || 'Untitled';
    pvName.textContent = n;
    if (pvAvatar && !pvAvatar.style.backgroundImage) pvAvatar.textContent = n.charAt(0).toUpperCase();
  });
  inpTag.addEventListener('input', () => { pvTag.textContent = inpTag.value.trim(); });

  const imgInput = document.getElementById('imgInput');
  const imgHint = document.getElementById('imgHint');
  if (imgInput) imgInput.addEventListener('change', (e) => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      if (pvAvatar) { pvAvatar.style.backgroundImage = 'url(' + ev.target.result + ')'; pvAvatar.style.backgroundSize = 'cover'; pvAvatar.textContent = ''; }
      imgHint.textContent = '✓ ' + file.name;
    };
    reader.readAsDataURL(file);
  });

  const secEls = {
    about: document.querySelector('.doc-hero'),
    book: document.querySelector('#view-customer .btn-primary'),
    reviews: document.querySelector('.review-card'),
  };
  document.querySelectorAll('input[data-sec]').forEach((cb) => cb.addEventListener('change', () => {
    const el = secEls[cb.dataset.sec]; if (el) el.style.display = cb.checked ? '' : 'none';
  }));

  const roleList = document.getElementById('roleList');
  function wireX(chip) { chip.querySelector('.x').addEventListener('click', () => chip.remove()); }
  roleList.querySelectorAll('.role-chip').forEach(wireX);
  document.getElementById('addRole').addEventListener('click', () => {
    const name = prompt('New role / computer (e.g. Manager, Nurse, Cashier):');
    if (!name) return;
    const chip = document.createElement('span');
    chip.className = 'role-chip';
    chip.innerHTML = name + ' <button class="x">\u00d7</button>';
    roleList.appendChild(chip); wireX(chip);
  });

  const stages = document.getElementById('stages');
  const newStage = document.getElementById('newStage');
  function wireStageX(p) { p.querySelector('.x').addEventListener('click', () => p.remove()); }
  stages.querySelectorAll('.stage-pill').forEach(wireStageX);
  function addStageItem() {
    const v = newStage.value.trim(); if (!v) return;
    const p = document.createElement('span'); p.className = 'stage-pill';
    p.innerHTML = v + ' <button class="x">\u00d7</button>';
    stages.appendChild(p); wireStageX(p); newStage.value = ''; newStage.focus();
  }
  document.getElementById('addStage').addEventListener('click', addStageItem);
  newStage.addEventListener('keydown', (e) => { if (e.key === 'Enter') addStageItem(); });

  const single = document.getElementById('singleOwner');
  single.addEventListener('change', () => {
    const on = single.checked;
    document.querySelectorAll('.ptab').forEach((t) => {
      if (t.dataset.view !== 'doctor') t.style.display = on ? 'none' : '';
    });
    if (on) showView('doctor');
    document.body.classList.toggle('single-mode', on);
  });

  document.getElementById('shareBtn').addEventListener('click', () => alert('Stage 2: generates a shareable link + QR for the customer page.'));
  document.getElementById('saveBtn').addEventListener('click', () => {
    const b = document.getElementById('saveBtn');
    b.textContent = '✓ Saved';
    setTimeout(() => { b.textContent = 'Save Agent'; }, 1600);
  });
})();
