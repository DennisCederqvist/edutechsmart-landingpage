const burgerBtn = document.getElementById('burgerBtn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

// Open overlay
burgerBtn.addEventListener('click', () => {
    overlay.classList.add('active');
});

// Close overlay
closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
});

// Close when clicking on a link
const menuLinks = document.querySelectorAll('.overlay-content a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        overlay.classList.remove('active');
    });
});

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

  
// Drop down manu
const buttons = document.querySelectorAll('.dropbtn');

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    const clickedDropdown = button.closest('.dropdown');

    // Stäng alla andra först
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        console.log('i was clicked')
      if (dropdown !== clickedDropdown) {
        dropdown.classList.remove('active');
      }
    });

    // Öppna/stäng den man klickade på
    clickedDropdown.classList.toggle('active');
  });
});

