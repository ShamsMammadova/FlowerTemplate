$(document).ready(function(){

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    center: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 7
        }
    },
    // autoplay: true,
    // autoplayTimeout: 1000,
    // autoplayHoverPause: true
})

});