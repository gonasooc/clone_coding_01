$(function(){
    $('.main_slide').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        fade: true,
        speed: 3000
    });
    $('.banner_slide').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 1000
    });
});

