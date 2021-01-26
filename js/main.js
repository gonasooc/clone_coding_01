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


    $('#header .header_inner .gnb, .gnb_fulldown').mouseenter(function(){
        $('.gnb_fulldown').stop().slideDown(300);
        $('.depth2').stop().slideDown(300);
    });
    $('#header .header_inner .gnb, .gnb_fulldown').mouseleave(function(){
        $('.gnb_fulldown').stop().slideUp(300);
        $('.depth2').stop().slideUp(300);
    });

    




    var footer_sw = true;
    $('#footer button').click(function(){
        if(footer_sw){
            $('#footer button').removeClass('on');
            $('#footer .family-box').removeClass('on');
            $(this).addClass('on');
            $(this).parent().find('.family-box').addClass('on');
            footer_sw = false;
        } else {
            $(this).removeClass('on');
            $(this).parent().find('.family-box').removeClass('on');
            footer_sw = true;
        }
    });

    $('#footer .close_btn').click(function(){
        $('#footer .family-box').removeClass('on');
        $('#footer button').removeClass('on');
        $('#footer .family-box').removeClass('on');
        sw = true;
    });




})