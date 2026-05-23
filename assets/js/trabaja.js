AOS.init({ once: true, duration: 720, easing: 'ease-out' });

      const nav = document.getElementById('mainNav');
      const scrollBtn = document.getElementById('scrollTop');
      window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 80);
        scrollBtn.classList.toggle('visible', window.scrollY > 400);
      });
      scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

      function handleFile(input) {
        const file = input.files[0];
        const display = document.getElementById('fileName');
        const area = document.getElementById('uploadArea');
        if (file) {
          display.textContent = '✓ ' + file.name;
          display.style.display = 'block';
          area.style.borderColor = '#ff4c0c';
          area.style.background = 'rgba(255,76,12,0.04)';
        }
      }

      const uploadArea = document.getElementById('uploadArea');
      uploadArea.addEventListener('dragover', (e) => { e.preventDefault(); uploadArea.classList.add('dragover'); });
      uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
      uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file && file.type === 'application/pdf') {
          document.getElementById('cv').files = e.dataTransfer.files;
          handleFile(document.getElementById('cv'));
        }
      });

      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            e.preventDefault();
            const offset = 90;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        });
      });