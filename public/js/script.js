$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 3,
        loop: true,
        lazyLoad: true,
        margin: 5,
        padding: 5,
        stagePadding: 5,
        responsive: {
            0 : {
                items: 1,
                dots: false,
            },
            750 : {
                items: 2,
                dots: false,
            },
            980 : {
                items: 3,
                dots: true
            },
        }
    })
})