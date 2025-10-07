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
