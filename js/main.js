document.addEventListener('DOMContentLoaded', () => {
  // Ensure hero video is muted (works around browser autoplay quirks)
  const vid = document.getElementById('hero-vid');
  if (vid) { vid.muted = true; vid.volume = 0; }

  // Mobile menu toggle
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  // Close mobile menu on outside click
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
    }
  });

  // Enquiry form — prevent default and give feedback
  const form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('.btn--submit');
      btn.textContent = 'Message Sent ✓';
      btn.style.background = '#C9A84C';
      btn.style.color = '#0A0A0A';
      setTimeout(() => {
        btn.textContent = 'Send Enquiry';
        btn.style.background = '';
        btn.style.color = '';
        form.reset();
      }, 3000);
    });
  }
});
