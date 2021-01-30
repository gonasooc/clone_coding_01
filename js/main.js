$(function(){
    $('.visual-slide').slick({
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000
      });

    $('#footer .btn_wrap button').mouseover(function(){
      var tab_index_num = $(this).index();
      console.log(tab_index_num);
      $('#footer .btn_wrap button').removeClass('on');
      $(this).addClass('on');
      $('.tab-list ul').hide();
      $('.tab-list ul').eq(tab_index_num).show();
    });
})