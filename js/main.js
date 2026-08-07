// ============================================
// GREENFIELD GROUP - Main JS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Header scroll effect ---
  const header = document.querySelector('.site-header');
  const handleScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- Rotating hero catchphrase ---
  // Each phrase shows for 2.5s, then switches instantly to the next.
  const phrases = document.querySelectorAll('.hero-phrase');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (phrases.length > 1 && !reduceMotion) {
    let current = 0;
    setInterval(() => {
      phrases[current].classList.remove('current');
      current = (current + 1) % phrases.length;
      phrases[current].classList.add('current');
    }, 2500);
  }

  // --- Mobile menu toggle ---
  const toggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Scroll reveal animations ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

  // --- Contact form (Formspree) ---
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const success = document.getElementById('formSuccess');
      btn.disabled = true;
      btn.textContent = 'Sending...';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(response => {
        if (response.ok) {
          btn.textContent = 'Message Sent!';
          form.reset();
          if (success) success.style.display = 'block';
          setTimeout(() => {
            btn.textContent = 'Send Message';
            btn.disabled = false;
            if (success) success.style.display = 'none';
          }, 5000);
        } else {
          btn.textContent = 'Error. Please Try Again';
          btn.disabled = false;
          setTimeout(() => { btn.textContent = 'Send Message'; }, 3000);
        }
      }).catch(() => {
        btn.textContent = 'Error. Please Try Again';
        btn.disabled = false;
        setTimeout(() => { btn.textContent = 'Send Message'; }, 3000);
      });
    });
  }

});
