(function () {
    const _carousel = document.querySelector('.promo-carousel');
    const flkty = new Flickity(_carousel, {
        // options
        cellAlign: 'left',
        prevNextButtons: false,
        // contain: true,
        // setGallerySize: false,
        // autoPlay: 5000,
        contain: false
    });

    // _carousel.querySelector('.flickity-page-dots').style.bottom = '10px';
})();