// 새로고침하면 최상단으로 올라감
window.onload = function() {
    setTimeout (function() {
    scrollTo(0, 0);
    }, 100);
}


$(document).ready(function(){
    // $('.banner_today_wrap .btn_img_close, .banner_today_wrap input').click(function(){
    //     $('.banner_today_wrap').slideUp();
    //     $('#body_wrap').animate({'margin-top':0});
    // });


    if(getCookie('daelim') == 'close'){
        $('.banner_today_wrap').hide();
    } else {
        $('.banner_today_wrap').show();
    }

    $('.banner_today_wrap .btn_img_close, .banner_today_wrap input').click(function(){
        if($('.banner_today_wrap input[name=today_close]').is(':checked')){
            setCookie('daelim', 'close', 1);
            $('.banner_today_wrap').slideUp();
        } else {
            $('.banner_today_wrap').slideUp();
        }
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

    $('#header .util .search').click(function(){
        $('#header .search-box').slideDown();
    });


    $('.visual-slide').slick({
        autoplay: false,
        arrows: false,
        infinite: false,
        draggable: false
      });

    $('.visual_bg-slide').slick({
        autoplay: false,
        arrows: false,
        fade: true,
        speed: 2000
    });
   
    $('#main .video-list > li').mouseenter(function(){
        $(this).addClass('on');
        var video_index_num = $(this).index();
        // console.log(video_index_num);
        $('#main .visual_bg-slide').slick('slickGoTo', video_index_num);
    });
    $('#main .video-list > li').mouseleave(function(){
        $(this).removeClass('on');
    });

    $('#main .newslist li').hover(function(){
        $(this).addClass('on').siblings().css({'opacity':'0.2'});
        }, function(){
            $('#main .newslist li').css({'opacity':'1'}).removeClass('on');
    });

    $('#main .go-innovation').click(function(){
        $('#main .visual-slide').slick('slickGoTo', 0);
    });
    $('#main .go-news').click(function(){
        $('#main .visual-slide').slick('slickGoTo', 1);
    });
    $('#main .go-story').click(function(){
        $('#main .visual-slide').slick('slickGoTo', 2);
    });
   


    $('.family_menu li .family_btn').click(function(){
        $(this).siblings().fadeToggle(0).parents('li').siblings().children('.family-box').hide();
        $(this).toggleClass('on').parent().siblings().children('.family_btn').removeClass('on');
    });
    $('.family-box .close_btn').click(function(){
         $('.family_menu_wrap .family-box').hide();
    });

});


// getCookie
function getCookie(name){
    var value=null, search=name+"=";
    if(document.cookie.length > 0){
        var offset=document.cookie.indexOf(search);
        if(offset != -1){
            offset+=search.length;
            var end=document.cookie.indexOf(";", offset);
            if(end == -1) end=document.cookie.length;
            value=unescape(document.cookie.substring(offset, end));
        }
    } return value;
}
// setCookie
function setCookie(name, value, expiredays){
    var days=10;
    if(days){
        var date=new Date(); 
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires="; expires="+date.toGMTString();
    }else{
        var expires=""; 
    }
    document.cookie=name+"="+value+expires+"; path=/";
}