$(function(){
    $('.gnb li').mouseenter(function(){
        $(this).find('.depth2').stop().fadeIn(200);
    });
    $('.gnb li').mouseleave(function(){
        $(this).find('.depth2').stop().fadeOut(200);
    });

    // $('.cover, .popup').fadeIn();
    $('.close_img_btn, .close_txt_btn').click(function(){
        $('.cover, .popup').fadeOut();
    });


    if(getCookie('lesportsac') == 'todayClose'){
        $('.cover, .popup').hide();
    } else {
        $('.cover, .popup').fadeIn();
    }

    // 하루 열지 않는 쿠키 생성
    $('#today_close, .popup .close label').click(function(){
        if($('#today_close').is(':checked')){
            setCookie('lesportsac', 'todayClose', 1);
            $('.cover, .popup').fadeOut();
        } else {
            $('.cover, .popup').fadeOut();
        }
    });

    $('.top').click(function(){
        $('body, html').animate({'scrollTop': 0}, 500);
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
  function setCookie(name, value, days){
    if(days){
        var date=new Date(); 
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires="; expires="+date.toGMTString();
    }else{
        var expires=""; 
    }
    document.cookie=name+"="+value+expires+"; path=/";
  }