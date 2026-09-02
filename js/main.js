// ============================================
// GREENFIELD GROUP  |  Main JS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Header: black bar once the page scrolls ---
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --- Rotating property-type phrase on the hero board ---
  // Each phrase holds for 2s, then cross-dissolves over 500ms.
  const phrases = document.querySelectorAll('.rotator .phrase');
  if (phrases.length > 1 && !reduceMotion) {
    let i = 0;
    setInterval(() => {
      phrases[i].classList.remove('current');
      i = (i + 1) % phrases.length;
      phrases[i].classList.add('current');
    }, 2500);
  }

  // --- Mobile menu ---
  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (toggle && mobileNav) {
    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      mobileNav.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
      if (open) header.classList.add('scrolled');
    };
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    mobileNav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) setOpen(false);
    });
  }

  // --- Reveal on scroll ---
  const targets = document.querySelectorAll('.reveal, .reveal-clip');
  if (targets.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('visible'));
    } else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      targets.forEach((el) => io.observe(el));
    }
  }

  // --- Contact form (Formspree) ---
  const form = document.getElementById('contactForm');
  if (form) {
    const btn = form.querySelector('button[type="submit"]');
    const status = document.getElementById('formStatus');
    const idle = btn.textContent;

    const say = (text, isError) => {
      if (!status) return;
      status.textContent = text;
      status.classList.toggle('error', Boolean(isError));
      status.hidden = false;
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      btn.disabled = true;
      btn.textContent = 'Sending';
      if (status) status.hidden = true;

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
        .then((res) => {
          if (res.ok) {
            form.reset();
            say('Thank you. Your message has been sent and we will come back to you promptly.');
            btn.textContent = 'Message sent';
            setTimeout(() => { btn.textContent = idle; btn.disabled = false; }, 4000);
          } else {
            throw new Error('Formspree error');
          }
        })
        .catch(() => {
          say('Your message could not be sent. Please try again, or call +1 214-779-0922.', true);
          btn.textContent = idle;
          btn.disabled = false;
        });
    });
  }
});
