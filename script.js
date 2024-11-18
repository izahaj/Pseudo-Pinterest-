document.addEventListener('DOMContentLoaded', function () {
    const lazyImages = document.querySelectorAll('.lazy');
    const registerLink = document.getElementById('register-link');
    const registerModal = document.getElementById('register-modal');
    const closeBtn = document.querySelector('.close');

    function lazyLoad() {
        lazyImages.forEach(img => {
            if (img.getBoundingClientRect().top < window.innerHeight && img.getBoundingClientRect().bottom > 0 && getComputedStyle(img).display !== 'none') {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
            }
        });
    }

    lazyLoad(); // Initial call
    document.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    window.addEventListener('orientationchange', lazyLoad);

    registerLink.addEventListener('click', function () {
        registerModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        registerModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });
});
