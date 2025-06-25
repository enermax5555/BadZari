document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
        // Only apply animation to the first section (index 0)
        if (index !== 0) return;
        
        const images = section.querySelectorAll('#hidden-images img');
        const displayImage = section.querySelector('img#image');
        let currentIndex = 0;

        function showNextImage() {
            if (images.length > 0) {
                currentIndex = (currentIndex + 1) % images.length;
                // Apply the animation class
                displayImage.classList.add('slide-right');
                // Change the image source after a short delay
                setTimeout(() => {
                    displayImage.src = images[currentIndex].src;
                }, 250); // Half of the animation duration
            }
        }

        displayImage.addEventListener('animationend', () => {
            // Remove the animation class after the animation completes
            displayImage.classList.remove('slide-right');
        });

        setInterval(showNextImage, 3000); // Change image every 3 seconds
    });
});
