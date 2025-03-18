document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.index10 .slide');
    let currentSlide = 3;

    // Function to change active slide
    function rotateSlides() {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Auto-rotate every 5 seconds
    setInterval(rotateSlides, 5000);

    // Add click event listeners to each slide
    slides.forEach(slide => {
        slide.addEventListener('click', function() {
            const slideTitle = this.querySelector('.slide-title').textContent;
            const slideDesc = this.querySelector('.slide-desc').textContent;
            const slideImage = this.style.backgroundImage.replace('url("', '').replace('")', '');

            // Encode data for URL
            const queryString = `bid.html?name=${encodeURIComponent(slideTitle)}&desc=${encodeURIComponent(slideDesc)}&image=${encodeURIComponent(slideImage)}`;

            // Redirect to bid.html with data
            window.location.href = queryString;
        });
    });
});
