/* ── Init ─────────────────────────────────── */
      AOS.init({ once: true, duration: 720, easing: 'ease-out' });

      /* ── Navbar scroll ────────────────────────── */
      const nav = document.getElementById('mainNav');
      const scrollBtn = document.getElementById('scrollTop');

      window.addEventListener('scroll', () => {
        const y = window.scrollY;
        nav.classList.toggle('scrolled', y > 80);
        scrollBtn.classList.toggle('visible', y > 450);
      });

      scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      /* ── Smooth scroll for anchor links ───────── */
      document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
          const target = document.querySelector(a.getAttribute('href'));
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });

      /* ── Counter animation ────────────────────── */
      function animateCounter(el) {
        const target = parseInt(el.dataset.target, 10);
        const duration = 1800;
        const frameRate = 16;
        const totalFrames = Math.round(duration / frameRate);
        let frame = 0;

        const timer = setInterval(() => {
          frame++;
          const progress = frame / totalFrames;
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
          const current = Math.round(eased * target);
          el.textContent = current;
          if (frame >= totalFrames) {
            el.textContent = target;
            clearInterval(timer);
          }
        }, frameRate);
      }

      const statsEl = document.getElementById('statsSection');
      if (statsEl) {
        const counterObserver = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.querySelectorAll('.counter[data-target]').forEach(animateCounter);
              counterObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });
        counterObserver.observe(statsEl);
      }