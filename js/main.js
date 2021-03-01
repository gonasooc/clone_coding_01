$(function(){
    $('.gnb li').mouseenter(function(){
        $(this).find('.depth2').fadeIn(200);
    })
    $('.gnb li').mouseleave(function(){
        $(this).find('.depth2').fadeOut(200);
    })

    $('.cover, .popup').fadeIn();
    $('.close_img_btn, .close_txt_btn').click(function(){
        $('.cover, .popup').fadeOut();
    })
});
