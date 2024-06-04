document.addEventListener('DOMContentLoaded', function() {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const descriptionBox = document.getElementById('description-box');

    dropdownItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            const description = item.getAttribute('data-description');
            descriptionBox.textContent = description;
            descriptionBox.style.display = 'block';
        });

        item.addEventListener('mouseout', function() {
            if (!descriptionBox.classList.contains('persist')) {
                descriptionBox.style.display = 'none';
            }
        });

        item.addEventListener('click', function(event) {
            const description = item.getAttribute('data-description');
            descriptionBox.textContent = description;
            descriptionBox.style.display = 'block';
            descriptionBox.classList.add('persist');
        });
    });

    document.addEventListener('click', function(event) {
        if (!descriptionBox.contains(event.target) && !event.target.classList.contains('dropdown-item')) {
            descriptionBox.style.display = 'none';
            descriptionBox.classList.remove('persist');
        }
    });
});
