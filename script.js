/* ===== Scroll Reveal Animation ===== */
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 150) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

/* ===== Lightbox for Gallery Images ===== */
const lightbox = document.createElement('div');
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll('.gallery img');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.classList.add('active');
    const newImg = document.createElement('img');
    newImg.src = img.src;

    lightbox.innerHTML = '';
    lightbox.appendChild(newImg);
  });
});

// Close l
