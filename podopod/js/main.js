// window.onload = function() {
//     setTimeout (function() {
//     scrollTo(0, 0);
//     }, 100);
// }

$(function(){
    $('.section1 .btn_down').click(function(){
        $('body, html').animate({'scrollTop':'1277px'}, 1000);
    })
    $('.section2 .btn_down').click(function(){
        $('body, html').animate({'scrollTop':'2302px'}, 1000);
    })
    $('.section3 .btn_down').click(function(){
        $('body, html').animate({'scrollTop':'3302px'}, 1000);
    })
    $('.section4 .btn_down').click(function(){
        $('body, html').animate({'scrollTop':'4442px'}, 1000);
    })
    $('.section5 .btn_down').click(function(){
        $('body, html').animate({'scrollTop':'5482px'}, 1000);
    })
    $('.section9 .btn_down').click(function(){
        $('body, html').animate({'scrollTop':'6632px'}, 1000);
    })
    $('.section10 .btn_down').click(function(){
        $('body, html').animate({'scrollTop':'7709px'}, 1000);
    })
    $('.section11 .btn_down').click(function(){
        $('body, html').animate({'scrollTop':'8849px'}, 1000);
    })

    $('.dots li').click(function(){
        var num = $(this).index();
        console.log(num);
        $('.dots li a').removeClass('on');
        $(this).find('a').addClass('on');
        if(num == 0){
             $('body, html').animate({'scrollTop':0}, 1000);
        } else if (num == 1){
            $('body, html').animate({'scrollTop':'1277px'}, 1000);
        } else if (num == 2){
            $('body, html').animate({'scrollTop':'2302px'}, 1000);
        } else if (num == 3){
            $('body, html').animate({'scrollTop':'3302px'}, 1000);
        } else if (num == 4){
            $('body, html').animate({'scrollTop':'4442px'}, 1000);
        } else if (num == 5){
            $('body, html').animate({'scrollTop':'5482px'}, 1000);
        } else if (num == 6){
            $('body, html').animate({'scrollTop':'6632px'}, 1000);
        } else if (num == 7){
            $('body, html').animate({'scrollTop':'7772px'}, 1000);
        } else {
            $('body, html').animate({'scrollTop':'8849px'}, 1000);
        }
    })

    $(window).scroll(function(){
        var scroll_num = $(document).scrollTop();
        console.log(scroll_num);
        if(scroll_num > 1277) {
            $('.section2_header').addClass('on');
        } else {
            $('.section2_header').removeClass('on');
        }

        if(scroll_num >= 900 && scroll_num <= 2301) {
            $('.mobile_case').addClass('on');
        } else if(scroll_num >= 1910 && scroll_num <= 3301){
            $('.cat, .phone').addClass('on');
        } else if(scroll_num >= 2895 && scroll_num <= 4441){
            $('.section4 .img_wrap, .section4 .img2').addClass('on');
        } else if(scroll_num >= 3999 && scroll_num <= 5481){
            $('.section5 .img2, .section5 .img3').addClass('on');
        } else if(scroll_num >= 5000 && scroll_num <= 6631){
            $('.section9 h2, .section9 p, .section9 a, .section9 .img_left, .section9 .img_right').addClass('on');
        } else if(scroll_num >= 6006 && scroll_num <= 7771){
            $('.section10 .img-inbox').addClass('on');
        } else if(scroll_num >= 7772 && scroll_num <= 8849){
            $('.section11 .img_left, .section11 .img_right').addClass('on');
        } else {
            $('.mobile_case').removeClass('on');
            $('.cat, .phone').removeClass('on');
            $('.section4 .img_wrap, .section4 .img2').removeClass('on');
            $('.section5 .img2, .section5 .img3').removeClass('on');
            $('.section9 h2, .section9 p, .section9 a, .section9 .img_left, .section9 .img_right').removeClass('on');
            $('.section10 .img-inbox').removeClass('on');
            $('.section11 .img_left, .section11 .img_right').removeClass('on');
        } 


        if(scroll_num >= 0 && scroll_num <= 1276){
            $('.dots li').removeClass('on');
            $('.dots li').eq(0).addClass('on');
        } else if (scroll_num >= 1277 && scroll_num <= 2301){
            $('.dots li').removeClass('on');
            $('.dots li').eq(1).addClass('on');
        } else if (scroll_num >= 2302 && scroll_num <= 3301){
            $('.dots li').removeClass('on');
            $('.dots li').eq(2).addClass('on');
        } else if (scroll_num >= 3302 && scroll_num <= 4441){
            $('.dots li').removeClass('on');
            $('.dots li').eq(3).addClass('on');
        } else if (scroll_num >= 4442 && scroll_num <= 5481){
            $('.dots li').removeClass('on');
            $('.dots li').eq(4).addClass('on');
        } else if (scroll_num >= 5482 && scroll_num <= 6631){
            $('.dots li').removeClass('on');
            $('.dots li').eq(5).addClass('on');
        } else if (scroll_num >= 6632 && scroll_num <= 7771){
            $('.dots li').removeClass('on');
            $('.dots li').eq(6).addClass('on');
        } else if (scroll_num >= 7772 && scroll_num <= 8848){
            $('.dots li').removeClass('on');
            $('.dots li').eq(7).addClass('on');
        }
          else {
            $('.dots li').removeClass('on');
            $('.dots li').eq(8).addClass('on');
        }
    })
    

    $('.section10 .left-list li').click(function(){
        var section10_index1 = $(this).index();
        $('.section10 .left-list li').removeClass('on');
        $('.section10 .right-list li').removeClass('on');
        $(this).addClass('on');
        $('.section10 .left-inbox img').removeClass('on');
        $('.section10 .right-inbox img').removeClass('on');
        $('.section10 .left-inbox img').eq(section10_index1).addClass('on');
    })

    $('.section10 .right-list li').click(function(){
        var section10_index2 = $(this).index();
        $('.section10 .left-list li').removeClass('on');
        $('.section10 .right-list li').removeClass('on');
        $(this).addClass('on');
        $('.section10 .left-inbox img').removeClass('on');
        $('.section10 .right-inbox img').removeClass('on');
        $('.section10 .right-inbox img').eq(section10_index2).addClass('on');
    })
})