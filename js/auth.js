// Login — demo auth that routes by selected role.
(function () {
  'use strict';
  let as = 'admin';
  document.querySelectorAll('.role-opt').forEach((b) => {
    b.addEventListener('click', () => {
      document.querySelectorAll('.role-opt').forEach((x) => x.classList.remove('active'));
      b.classList.add('active'); as = b.dataset.as;
    });
  });
  const dest = { admin: 'admin.html', owner: 'owner.html', staff: 'staff.html' };
  document.getElementById('loginBtn').addEventListener('click', () => {
    const email = document.getElementById('email').value.trim();
    if (!email) { alert('Enter an email'); return; }
    try { localStorage.setItem('ab-role', as); localStorage.setItem('ab-email', email); } catch (e) {}
    window.location.href = dest[as];
  });
})();
