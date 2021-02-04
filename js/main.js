$(function(){
    
    $('#main .main-slide .slider').bxSlider({
        auto: true
    });

    $('#main .mini-slide .slider').bxSlider({
        touchEnabled: false
    });

    $('#main2 .main-slide2 .slider').bxSlider({
        auto: true,
        controls: false,
        mode: 'vertical'
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
