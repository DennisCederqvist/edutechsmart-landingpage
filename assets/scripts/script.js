

// Carousel code //

const slides = document.querySelectorAll('.carousel .slide');
const dotsContainer = document.querySelector('.carousel .dots');
const prev = document.querySelector('.carousel .prev');
const next = document.querySelector('.carousel .next');

let index = 0;
let timer;

// create dots
slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.addEventListener('click', () => showSlide(i));
  dotsContainer.appendChild(dot);
});
const dots = dotsContainer.querySelectorAll('button');

function showSlide(i) {
  index = (i + slides.length) % slides.length;
  slides.forEach((s, j) => s.classList.toggle('active', j === index));
  dots.forEach((d, j) => d.classList.toggle('active', j === index));
  resetTimer();
}

function nextSlide() { showSlide(index + 1); }
function prevSlide() { showSlide(index - 1); }

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(nextSlide, 5000);
}

// init
showSlide(0);
resetTimer();
