document.addEventListener("DOMContentLoaded", function() {
  const navButtons = document.querySelectorAll('.nav-button');

  navButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const target = this.getAttribute('data-target');
      
      // Toggle active state for clicked button
      if (!this.classList.contains('active')) {
        // Deactivate all buttons
        navButtons.forEach(function(btn) {
          btn.classList.remove('active');
        });

        // Activate the clicked button
        this.classList.add('active');

        // Toggle profile sections
        toggleProfile(target);
      }
    });
  });

  function toggleProfile(target) {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(function(box) {
      if (box.classList.contains(target)) {
        box.classList.add('active');
      } else {
        box.classList.remove('active');
      }
    });
  }
});
