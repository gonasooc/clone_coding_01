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
    $('#main .section1 .section1_inner .list li').click(function(event){
        event.preventDefault();
        var index_num = $(this).index();
        $('#main .section1 .section1_inner .list li').removeClass('on');
        $(this).addClass('on');
    });
});