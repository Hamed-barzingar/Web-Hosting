
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 80,
    autoplay: true,
    autoplayTimeout:3000,
    responsiveClass: true,
    // navText: ["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],
    responsive: {
        0: {
            items: 1,
            nav: true,
            
        },
        768: {
            items: 2,
            nav: true
        },
        992 : {
            items : 2,
            nav: true
        }
    }
})