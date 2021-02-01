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

// 상단 배너 오늘 하루 띄우지 않기 쿠키 ---------------------------------------------
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


// 올메뉴 관련 ---------------------------------------------------------------------
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


// 헤더 풀다운 ----------------------------------------------------------------------
    $('#header .header_inner .gnb, .gnb_fulldown').mouseenter(function(){
        $('.gnb_fulldown').stop().slideDown(300);
        $('#body_wrap .depth2').stop().slideDown(300);
        $('#header .search-box').stop().slideUp(200);
    });
    $('#header .header_inner .gnb, .gnb_fulldown').mouseleave(function(){
        $('.gnb_fulldown').stop().slideUp(300);
        $('#body_wrap .depth2').stop().slideUp(300);

    });

// 헤더 서치박스 ------------------------------------------------------------- 
    $('#header .util .search').click(function(){
        $('#header .search-box').slideToggle(200);
    });


// 메인 슬라이드 관련 ------------------------------------------------------------
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
   
    var video_url = ['https://www.youtube.com/embed/lAJ3SGjbdr4', 'https://www.youtube.com/embed/U7GoYtXvGvA', 'https://www.youtube.com/embed/Dhk2zl4FUEw'];
    var modal_title = ['D TOWER', 'Yi Sun Sin Bridge', 'Petrochemical Plant'];
    var modal_des = ['도시를 개발하다.', '세계 6번째 현수교 기술자립국, 세계최고의 기술력, 대림.', '1973년 해외플랜트 수출1호, 기본과 원칙으로 쌓아온 플랜트 노하우 43년.'];

    $('#main .video-list > li').mouseenter(function(){
        $(this).addClass('on');
        var video_index_num = $(this).index();
        // console.log(video_index_num);
        $('#main .visual_bg-slide').slick('slickGoTo', video_index_num);
    });
    $('#main .video-list > li').mouseleave(function(){
        $(this).removeClass('on');
    });

    $('#main .video-list li').click(function(){
        var video_index_num2 = $(this).index();
        // console.log(video_index_num2);
        $('.cover').show();
        $('.cover iframe').attr('src', video_url[video_index_num2]);
        $('.cover .modal-title').html(modal_title[video_index_num2]);
        $('.cover .modal-des').html(modal_des[video_index_num2]);
        $('body, html').css({'overflow':'hidden'});

        $('.cover .modal-arrow_next').click(function(){
            if(video_index_num2 == 2){
                video_index_num2 = 0;
            } else {
                video_index_num2++;
            }
            $('.cover iframe').attr('src', video_url[video_index_num2]);
            $('.cover .modal-title').html(modal_title[video_index_num2]);
            $('.cover .modal-des').html(modal_des[video_index_num2]);
        });

        $('.cover .modal-arrow_prev').click(function(){
            if(video_index_num2 == 0){
                video_index_num2 = 2;
            } else {
                video_index_num2--;
            }
            $('.cover iframe').attr('src', video_url[video_index_num2]);
            $('.cover .modal-title').html(modal_title[video_index_num2]);
            $('.cover .modal-des').html(modal_des[video_index_num2]);
        });
    });

    $('.cover .modal-close_btn').click(function(){
        $('.cover').hide();
        $('.cover iframe').attr('src', 'about:blank;');
        $('body, html').css({'overflow':'auto'});
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
   

// 푸터 패밀스박스 관련 -------------------------------------------------------
    $('.family_menu li .family_btn').click(function(){
        $(this).siblings().fadeToggle(0).parents('li').siblings().children('.family-box').hide();
        $(this).toggleClass('on').parent().siblings().children('.family_btn').removeClass('on');
    });
    $('.family-box .close_btn').click(function(){
         $('.family_menu_wrap .family-box').hide();
         $('.family_menu_wrap .family_btn').removeClass('on');
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