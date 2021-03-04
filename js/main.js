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
    $('.hamburger_btn').click(function(){
        $('.allmenu').fadeIn(200);
        $('.allmenu_cover').fadeIn(200);
    })
    $('.exit_btn').click(function(){
        $('.allmenu').fadeOut(200);
        $('.allmenu_cover').fadeOut(200);
    })

    $('.btn_top').click(function(){
        $('body, html').animate({'scrollTop': 0}, 500);
    });



});
