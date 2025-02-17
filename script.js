document.addEventListener('DOMContentLoaded', () => {
      // Initial animation
      document.body.classList.add('loaded');

      const imageContainers = document.querySelectorAll('.image-container');

      imageContainers.forEach(container => {
        container.addEventListener('mousemove', (e) => {
          const x = e.clientX - container.offsetLeft;
          const y = e.clientY - container.offsetTop;

          container.style.setProperty('--mouse-x', `${x}px`);
          container.style.setProperty('--mouse-y', `${y}px`);
        });

        container.addEventListener('mouseleave', () => {
          container.style.removeProperty('--mouse-x');
          container.style.removeProperty('--mouse-y');
        });
      });
    });
