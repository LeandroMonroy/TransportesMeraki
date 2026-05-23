AOS.init({ once: true, duration: 720, easing: 'ease-out' });
      const nav = document.getElementById('mainNav');
      const scrollBtn = document.getElementById('scrollTop');
      window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 80);
        scrollBtn.classList.toggle('visible', window.scrollY > 400);
      });
      scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));