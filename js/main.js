$(function(){
    $('.gnb').mouseenter(function(){
        $('#header_wrap').stop().animate({'height':'400px'},300);
        $('.depth2').show();
    });
    $('#header_wrap').mouseleave(function(){
        $('#header_wrap').stop().animate({'height':'137px'},300);
        $('.depth2').hide();
    });
    $('.slide').slick({
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000,
        fade: true,
        speed: 1000
      });
    $('.newbox_list').slick({
        autoplay: true,
        dots: true,
        autoplaySpeed: 2000,
        arrows: false
    })

    $('.slider').bxSlider({
        minSlides: 7,
        maxSlides: 7,
        moveSlides: 1,
        slideWidth: 1000,
        infiniteLoop: false,
        controls: false
    });

    $('.box2').bxSlider({
        arrows: false
    });
    
    $('.bxslider_wrap .bx-wrapper:gt(0)').hide();

    $('.btn_tab li').click(function(){
        var index_num = $(this).index();
        var slider = $('.slider').bxSlider({});
        // console.log(index_num);
        $('.btn_tab li').removeClass('on');
        $(this).addClass('on');
        $('.bxslider_wrap .bx-wrapper').hide();
        $('.bxslider_wrap .bx-wrapper').eq(index_num).show();
    });        

    $('a').attr('href', 'javascript:;');

    

});