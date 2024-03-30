document.addEventListener("DOMContentLoaded", function() {
    const viewButtons = document.querySelectorAll('.view-btn');

    viewButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            const image = this.closest('.image').querySelector('img');
            image.classList.toggle('expanded'); // Toggle the 'expanded' class
        });
    });
});
