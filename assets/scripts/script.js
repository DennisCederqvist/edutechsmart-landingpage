const buttons = document.querySelectorAll('.dropbtn');

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    const clickedDropdown = button.closest('.dropdown');

    // Stäng alla andra först
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      if (dropdown !== clickedDropdown) {
        dropdown.classList.remove('active');
      }
    });

    // Öppna/stäng den man klickade på
    clickedDropdown.classList.toggle('active');
  });
});