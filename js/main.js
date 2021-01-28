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
        controls: false
    });
    
    $('.bxslider_wrap .bx-wrapper:gt(0)').hide();

    $('.btn_tab li').click(function(){
        var index_num = $(this).index();
    
        // console.log(index_num);
        $('.btn_tab li').removeClass('on');
        $(this).addClass('on');
        $('.bxslider_wrap .bx-wrapper').hide();
        $('.bxslider_wrap .bx-wrapper').eq(index_num).show();
        
        $('.bx-wrapper, .bx-viewport').height('350px');
        $('.bx-viewport ul li').width('calc(1600px / 7)');
    });

    // var $slider = $('.slider').bxSlider();
    // $('.btn_tab li').on('click', function(){
    //     $slider.reloadSlider();
    // });
    
    // var $slider = $('.slider').bxSlider();
    // $(window).resize(function(){
    //     $slider.reloadSlider();
    // });

    $(window).resize(function(){
        $('.bx-wrapper, .bx-viewport').height('350px');
        $('.bx-viewport ul li').width('calc(1600px / 7)');
    });


        
    
    $('.lang').click(function(){
        $('.lang-list').stop().slideDown();
    })
    $('.lang-list').mouseleave(function(){
        $(this).stop().slideUp();
    })

    $('.btn_family').click(function(){
        $('.family-list').slideToggle();
    })
    
    var win = $(window);
    var winHeight = win.height();
    var quickmenu = $('#quickmenu');
    console.log(winHeight);

    win.scroll(function(){
        winTop = $(this).scrollTop();
        // console.log(winTop);

        if(winTop>=480) {
            quickmenu.stop().animate({'top':(winHeight/3)+winTop}), 500;
        } else {
            quickmenu.stop().animate({'top':480}), 500;
        }
    })

    $('#main .box3').click(function(){
        $('.modal_wrap').stop().fadeIn();
        $('body, html').css({'overflow':'hidden'});
    });
    $('.modal_wrap .modal_close_btn').click(function(){
        $('.modal_wrap').stop().fadeOut();
        $('body, html').css({'overflow':'auto'});
    })


    $('a').attr('href', 'javascript:;');


    
    // $('.popup_wrap').show();
    $('.popup_wrap .btn_close, #today_close').click(function(){
        if($('input[name=today_close]').is(':checked')){
            setCookie('samyang', 'close', 1);
            $('.popup_wrap').hide();
        } else {
            $('.popup_wrap').hide();
        };
    });

    if(GetCookie('samyang') == 'close'){
        $('.popup_wrap').hide();
    } else {
        $('.popup_wrap').show();
    };
    

});



// GetCookie
function GetCookie(name){
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
// SetCookie
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