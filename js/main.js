window.onload = function() {
    setTimeout (function() {
    scrollTo(0, 0);
    }, 100);
}

$(document).ready(function(){
    $('.banner_today_wrap .btn_img_close, .banner_today_wrap input').click(function(){
        $('.banner_today_wrap').slideUp();
        $('#body_wrap').animate({'margin-top':0});
    });

    $('.allmenu').click(function(){
        $('.allmenu_wrap').show();
        $('body, html').css({'overflow':'hidden'});
    });
    $('.allmenu_close_btn').click(function(){
        $('.allmenu_wrap').hide();
        $('body, html').css({'overflow':'auto'});
    });

    $('.allmenu-slide').slick({
        autoplay: true,
        arrows: false,
        dots: true
    });

    var allmenuslide_sw = true;
    $('.allmenu-slide_wrap .ps_btn').click(function(){
        if(allmenuslide_sw){
            $('.allmenu-slide').slick('slickPause');
            $('.allmenu-slide_wrap .ps_btn').addClass('on');
            allmenuslide_sw = false;
        } else {
            $('.allmenu-slide').slick('slickPlay');
            $('.allmenu-slide_wrap .ps_btn').removeClass('on');
            allmenuslide_sw = true;
        }
    });

    $('#header .header_inner .gnb, .gnb_fulldown').mouseenter(function(){
        $('.gnb_fulldown').stop().slideDown(300);
        $('#body_wrap .depth2').stop().slideDown(300);
    });
    $('#header .header_inner .gnb, .gnb_fulldown').mouseleave(function(){
        $('.gnb_fulldown').stop().slideUp(300);
        $('#body_wrap .depth2').stop().slideUp(300);
    });

    $('.visual-slide').slick({
        autoplay: false,
        arrows: false
      });

    $('.visual_bg-slide').slick({
        autoplay: true,
        arrows: false,
        fade: true
    });
   
    $('#main .video-list > li').mouseenter(function(){
        $(this).addClass('on');
    });
    $('#main .video-list > li').mouseleave(function(){
        $(this).removeClass('on');
    })


    $('.family_menu li .family_btn').click(function(){
        $(this).siblings().fadeToggle(0).parents('li').siblings().children('.family-box').hide();
        $(this).toggleClass('on').parent().siblings().children('.family_btn').removeClass('on');
    });
    $('.family-box .close_btn').click(function(){
        $('.family_menu_wrap .family-box').hide();
    });

})