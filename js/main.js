$(function(){
    $('.gnb').mouseenter(function(){
        $('#header').addClass('on');
        $('#header .util .lang-box .btn_lang').addClass('on');
        $('#header .gnb_bg, #header .depth2').stop().slideDown(150);
    });
    $('.gnb').mouseleave(function(){
        $('#header').removeClass('on');
        $('#header .util .lang-box .btn_lang').removeClass('on');
        $('#header .gnb_bg, #header .depth2').stop().slideUp(150);
    });

    $('#header .lang-box').click(function(){
        $('#header .btn_lang').addClass('on');
        $('#header .lang-list').addClass('on');
    });
    $('#header .lang-box').mouseleave(function(){
        $('#header .btn_lang').removeClass('on');
        $('#header .lang-list').removeClass('on');
    });

    $('#main .mainCon1 ul li').mouseenter(function(){
        $(this).addClass('on');
        $(this).find('.btn_more').stop().fadeIn();
    })
    $('#main .mainCon1 ul li').mouseleave(function(){
        $(this).removeClass('on');
        $(this).find('.btn_more').stop().fadeOut();
    })
})