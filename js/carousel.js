document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.carousel-3d-item');
    if (items.length === 0) return;

    let currentIndex = 0;
    const totalItems = items.length;

    // Fixed order matching the HTML structure: 
    // 0: Platinum, 1: Copy Crown, 2: Ace Marvel, 3: Eco Maplitho, 
    // 4: Elegant Print, 5: Radiant Platinum, 6: Spectrum

    function updateCarousel() {
        // Remove all status classes
        items.forEach(item => {
            item.classList.remove('active', 'prev', 'next');
        });

        // Calculate indices with wrapping
        const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
        const nextIndex = (currentIndex + 1) % totalItems;

        // Add classes
        items[currentIndex].classList.add('active');
        items[prevIndex].classList.add('prev');
        items[nextIndex].classList.add('next');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    // Initialize
    updateCarousel();

    // Auto-scroll every 3 seconds
    setInterval(nextSlide, 3000);
});
