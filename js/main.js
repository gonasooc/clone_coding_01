$(function(){
    

    $('#main .btn_franchise-go').click(function(){
        $('#main').animate({'left':'-100%'}, 1000);
        $('#main2').animate({'right':'0%'}, 1000);
        $('#main_wrap').css({'height':'1723px'});
        $(this).fadeOut();
        $('#main2 .btn_main-go').fadeIn();
    })
    $('#main2 .btn_main-go').click(function(){
        $('#main').animate({'left':'0%'}, 1000);
        $('#main2').animate({'right':'-100%'}, 1000);
        $('#main_wrap').css({'height':'auto'});
        $(this).fadeOut();
        $('#main .btn_franchise-go').fadeIn();
    })

    $('#main .main-slide .slider').bxSlider({
        auto: true,
        speed: 1000,
        pause: 3000
    });

    $('#main .mini-slide .slider').bxSlider({
        touchEnabled: false
    });

    $('#main2 .main-slide2 .slider').bxSlider({
        auto: true,
        controls: false,
        mode: 'vertical',
        speed: 1000,
        pause: 3000
    });

    $('#main2 .mini-slide .slider').bxSlider({
        auto: true,
        controls: false,
        speed: 1000,
        pause: 3000
    });


    $('.popup_wrap .btn_popup_close').click(function(){
        $('.popup_wrap').hide();
    })

    $('.top_banner_wrap #today_close').click(function(){
        $('.top_banner_wrap').slideUp();
    });

    $('#header .gnb').mouseover(function(){
        $('#header').addClass('on');
        $('#header .depth2').stop().fadeIn();
    })
    $('#header').mouseleave(function(){
        $('#header').removeClass('on');
        $('#header .depth2').stop().fadeOut();
    })

    $('#main .sns-tab_inner .tab a').click(function(){
        $('#main .sns-tab_inner .tab a').removeClass('on'); 
        $(this).addClass('on');  
    })

    $('.franchise-menu a').mouseover(function(){
        var num = $(this).css('background-image');
        console.log(num);
        var num2 = num.replace('_off', '_on');
        console.log(num2);
        $(this).css({'background-image':num2});
    });
    $('.franchise-menu a').mouseleave(function(){
        var num = $(this).css('background-image');
        console.log(num);
        var num2 = num.replace('_on', '_off');
        console.log(num2);
        $(this).css({'background-image':num2});
    });

    
})
