
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel img");
    const bullets = document.querySelector(".bullets");

    let currentIndex = 0;
    

    // Create bullets
    images.forEach((_, index) => {
        const bullet = document.createElement("div");
        bullet.classList.add("bullet");
        if (index === currentIndex) bullet.classList.add("active");
        bullet.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });
        bullets.appendChild(bullet);
    });

    function updateCarousel() {
        const imageWidth = images[0].clientWidth + 20; // Image width + margin
        carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

        images.forEach((img, index) => {
            img.classList.remove("middle");
        });

        // Set the middle image
        const middleIndex = Math.floor(images.length / 2);
        const activeIndex = (currentIndex + middleIndex) % images.length;
        images[activeIndex].classList.add("middle");

        // Update bullets
        const bulletElements = bullets.querySelectorAll(".bullet");
        bulletElements.forEach((bullet, index) => {
            bullet.classList.remove("active");
            if (index === currentIndex) bullet.classList.add("active");
        });
    }

    document.getElementById("prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    document.getElementById("next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    updateCarousel(); // Initial call to set up the carousel

    function updateBreadcrumb(categoryName) {
        const breadcrumb = document.querySelector('.breadcrumb-item.active');
        breadcrumb.textContent = categoryName;
    }
    
    // Call this function when a user clicks on a category
    // Example:
    // updateBreadcrumb('Maize (Corn)');
    
    
            // Update breadcrumb when clicking on a category link
    categoryList.querySelectorAll('.category a').forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const categoryName = cerealSet.name; // This gets the current cereal category name
            updateBreadcrumb(categoryName);
            // Optionally, you could navigate to a different page or load new content here
        });
    });
});
