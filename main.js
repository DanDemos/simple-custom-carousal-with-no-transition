const carousel = document.querySelector('.carousel');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let counter = 0;

  function updateCarousel() {
    if (counter === carousel.children.length - 1) {
      carousel.classList.add("flex-row-reverse");
    } else {
      carousel.classList.remove("flex-row-reverse");
    }
    
    for (let i = 0; i < carousel.children.length; i++) {
      if (i === counter || i === (counter + 1) % carousel.children.length) {
        carousel.children[i].style.display = 'block';
      } else {
        carousel.children[i].style.display = 'none';
      }
    }
  }

  prevBtn.addEventListener('click', () => {
    counter = (counter - 1 + carousel.children.length) % carousel.children.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    counter = (counter + 1) % carousel.children.length;
    updateCarousel();
  });

  // Initialize the carousel to display the first two images
  updateCarousel();