window.HELP_IMPROVE_VIDEOJS = false;

// Play carousel/gallery videos only while they are on screen.
function setupVideoAutoplay() {
    const videos = document.querySelectorAll('.results-carousel video, .video-grid video');
    if (videos.length === 0 || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                video.play().catch(() => {});
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.4 });

    videos.forEach(video => observer.observe(video));
}

$(document).ready(function() {
    var options = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: false,
        navigation: true,
        pagination: true,
    };

    // Initialize every element with the carousel class.
    bulmaCarousel.attach('.carousel', options);
    bulmaSlider.attach();

    setupVideoAutoplay();
});
