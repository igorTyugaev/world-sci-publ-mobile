let _carousel = document.querySelector('.advantages-carousel');
let flkty = new Flickity(_carousel, {
    // options
    cellAlign: 'left',
    prevNextButtons: false,
    autoPlay: 5000,
    contain: false
});