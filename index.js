function loadScripts() {
    const scripts = ['input.js', 'header.js', "carousel.js"]; 
    scripts.forEach(script => {
      const scriptEl = document.createElement('script');
      scriptEl.src = `./components/${script}`;
      document.body.appendChild(scriptEl);
    });
  }
  
  window.onload = loadScripts;








  document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const buttonsContainer = document.querySelector('.carousel-buttons');
    const buttons = [];

    slides.forEach((slide, index) => {
        const button = document.createElement('button');
        button.textContent = index + 1;
        button.addEventListener('click', () => showSlide(index));
        buttons.push(button);
        buttonsContainer.appendChild(button);
    });

    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach(slide => slide.style.display = 'none');
        buttons.forEach(button => button.classList.remove('active'));
        slides[n].style.display = 'block';
        buttons[n].classList.add('active');
        currentSlide = n;
    }

    function nextSlide() {
        showSlide((currentSlide + 1) % slides.length);
    }

    function prevSlide() {
        showSlide((currentSlide - 1 + slides.length) % slides.length);
    }

    document.querySelector('.carousel-control.next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-control.prev').addEventListener('click', prevSlide);

    showSlide(0); // Show the first slide initially
});
