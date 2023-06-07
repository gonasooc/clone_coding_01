$(function(){
  $('.visual-slide').slick({
    autoplay: true,
    dots: true,
  });

  $('.banner-slide').slick({
    autoplay: true,
    dots: true,
    arrows: false,
  });

  $('#header .m_btn').click(function(){
    $('.m_gnb_wrap').animate({'left': 0}).css({'overflow':'auto'});
    $('.cover').fadeIn();
    $('body, html').css({'overflow':'hidden'});
  })
  $('.cover').click(function(){
    $('.m_gnb_wrap').animate({'left': '-100%'});
    $('.cover').fadeOut();
    $('body, html').css({'overflow':'auto'});
  })


  $(window).resize(function(){
    var num = $(this).width();
    console.log(num);    
    if(num <= 750){
      $('#main .visual-slide .slick-prev, #main .visual-slide .slick-next').hide();
      $('#main .visual-slide .slick-dots').show();
      $('#main .visual-slide .visual1 img').attr('src','./images/visual01_m.jpg');
      $('#main .visual-slide .visual2 img').attr('src','./images/visual02_m.jpg');
      $('#main .visual-slide .visual3 img').attr('src','./images/visual03_m.jpg');
      $('#main .visual-slide .visual4 img').attr('src','./images/visual04_m.jpg');
      $('#main .banner-slide .banner1 img').attr('src', './images/banner1_m.jpg');
      $('#main .banner-slide .banner2 img').attr('src', './images/banner2_m.jpg');
      $('#main .banner-slide .banner3 img').attr('src', './images/banner3_m.jpg');
      $('#main .banner-slide .banner4 img').attr('src', './images/banner4_m.jpg');
    } else {
      $('#main .visual-slide .slick-prev, #main .visual-slide .slick-next').show();
      $('#main .visual-slide .slick-dots').hide();
      $('#main .visual-slide .visual1 img').attr('src','images/visual01.jpg');
      $('#main .visual-slide .visual2 img').attr('src','images/visual02.jpg');
      $('#main .visual-slide .visual3 img').attr('src','images/visual03.jpg');
      $('#main .visual-slide .visual4 img').attr('src','images/visual04.jpg');
      $('#main .banner-slide .banner1 img').attr('src', './images/banner1.jpg');
      $('#main .banner-slide .banner2 img').attr('src', './images/banner2.jpg');
      $('#main .banner-slide .banner3 img').attr('src', './images/banner3.jpg');
      $('#main .banner-slide .banner4 img').attr('src', './images/banner4.jpg');
    }   
  })
  
  var width_num = $(window).width();
  if(width_num <= 750){
      $('#main .visual-slide .slick-prev, #main .visual-slide .slick-next').hide();
      $('#main .visual-slide .slick-dots').show();
      $('#main .visual-slide .visual1 img').attr('src','./images/visual01_m.jpg');
      $('#main .visual-slide .visual2 img').attr('src','./images/visual02_m.jpg');
      $('#main .visual-slide .visual3 img').attr('src','./images/visual03_m.jpg');
      $('#main .visual-slide .visual4 img').attr('src','./images/visual04_m.jpg');
      $('#main .banner-slide .banner1 img').attr('src', './images/banner1_m.jpg');
      $('#main .banner-slide .banner2 img').attr('src', './images/banner2_m.jpg');
      $('#main .banner-slide .banner3 img').attr('src', './images/banner3_m.jpg');
      $('#main .banner-slide .banner4 img').attr('src', './images/banner4_m.jpg');
  } else {
      $('#main .visual-slide .slick-prev, #main .visual-slide .slick-next').show();
      $('#main .visual-slide .slick-dots').hide();
      $('#main .visual-slide .visual1 img').attr('src','images/visual01.jpg');
      $('#main .visual-slide .visual2 img').attr('src','images/visual02.jpg');
      $('#main .visual-slide .visual3 img').attr('src','images/visual03.jpg');
      $('#main .visual-slide .visual4 img').attr('src','images/visual04.jpg');
      $('#main .banner-slide .banner1 img').attr('src', './images/banner1.jpg');
      $('#main .banner-slide .banner2 img').attr('src', './images/banner2.jpg');
      $('#main .banner-slide .banner3 img').attr('src', './images/banner3.jpg');
      $('#main .banner-slide .banner4 img').attr('src', './images/banner4.jpg');
  }


  $('#footer .btn_top').click(function(){
    $('html').animate({'scrollTop':0});
  });

  $('.model_list li').mouseenter(function(){
    var num = $(this).find('img').attr('src');
    // console.log(num);
    var num2 = num.replace('_off', '_on');
    console.log(num2);
    $(this).find('img').attr('src', num2);
  })
  $('.model_list li').mouseleave(function(){
    var num = $(this).find('img').attr('src');
    // console.log(num);
    var num2 = num.replace('_on', '_off');
    console.log(num2);
    $(this).find('img').attr('src', num2);
  })


  var 서울 = '<option value="강남구">강남구</option><option value="강동구">강동구</option><option value="강북구">강북구</option><option value="강서구">강서구</option><option value="관악구">관악구</option><option value="광진구">광진구</option><option value="구로구">구로구</option><option value="금천구">금천구</option><option value="노원구">노원구</option><option value="도봉구">도봉구</option><option value="동대문구">동대문구</option><option value="동작구">동작구</option><option value="마포구">마포구</option><option value="서대문구">서대문구</option><option value="서초구">서초구</option><option value="성동구">성동구</option><option value="성북구">성북구</option><option value="송파구">송파구</option><option value="양천구">양천구</option><option value="영등포구">영등포구</option><option value="용산구">용산구</option><option value="은평구">은평구</option><option value="종로구">종로구</option><option value="중구">중구</option><option value="중랑구">중랑구</option>';
  
  var 강원 = '<option value="강릉시">강릉시</option><option value="고성">고성</option><option value="동해시">동해시</option><option value="삼척시">삼척시</option><option value="속초">속초</option><option value="양구">양구</option><option value="양양">양양</option><option value="영월">영월</option><option value="원주시">원주시</option><option value="인제">인제</option><option value="정선">정선</option><option value="춘천시">춘천시</option><option value="태백시">태백시</option><option value="평창">평창</option><option value="홍천군">홍천군</option><option value="화천">화천</option><option value="횡성">횡성</option>';

  var 경기 = '<option value="가평시">가평시</option><option value="고양시">고양시</option><option value="과천시">과천시</option><option value="광명시">광명시</option><option value="광주시">광주시</option><option value="구리시">구리시</option><option value="군포시">군포시</option><option value="김포">김포</option><option value="남양주시">남양주시</option><option value="동두천시">동두천시</option><option value="부천시">부천시</option><option value="성남시">성남시</option><option value="수원시">수원시</option><option value="시흥시">시흥시</option><option value="안산시">안산시</option><option value="안성시">안성시</option><option value="안양시">안양시</option><option value="양주시">양주시</option><option value="양평군">양평군</option><option value="여주시">여주시</option><option value="연천군">연천군</option><option value="오산시">오산시</option><option value="용인시">용인시</option><option value="의왕시">의왕시</option><option value="의정부시">의정부시</option><option value="이천시">이천시</option><option value="파주시">파주시</option><option value="평택시">평택시</option><option value="포천시">포천시</option><option value="하남시">하남시</option><option value="화성시">화성시</option>';

  var 경남 = '<option value="거제시">거제시</option><option value="거창군">거창군</option><option value="고성">고성</option><option value="김해시">김해시</option><option value="남해">남해</option><option value="밀양">밀양</option><option value="사천">사천</option><option value="산청">산청</option><option value="양산시">양산시</option><option value="의령">의령</option><option value="진주시">진주시</option><option value="창녕">창녕</option><option value="창원시">창원시</option><option value="통영시">통영시</option><option value="하동">하동</option><option value="함안">함안</option><option value="함양">함양</option><option value="합천">합천</option>';

  var 경북 = '<option value="경산시">경산시</option><option value="경주시">경주시</option><option value="고령">고령</option><option value="구미시">구미시</option><option value="군위">군위</option><option value="김천시">김천시</option><option value="독도">독도</option><option value="문경">문경</option><option value="봉화">봉화</option><option value="상주시">상주시</option><option value="성주군">성주군</option><option value="안동">안동</option><option value="영덕">영덕</option><option value="영양">영양</option><option value="영주시">영주시</option><option value="영천시">영천시</option><option value="예천군">예천군</option><option value="울릉도">울릉도</option><option value="울진">울진</option><option value="의성">의성</option><option value="청도군">청도군</option><option value="청송">청송</option><option value="칠곡군">칠곡군</option><option value="포항시">포항시</option>';

  var 광주 = '<option value="광산구">광산구</option><option value="남구">남구</option><option value="동구">동구</option><option value="북구">북구</option><option value="서구">서구</option>';

  var 대구 = '<option value="남구">남구</option><option value="달서구">달서구</option><option value="달성군">달성군</option><option value="동구">동구</option><option value="북구">북구</option><option value="서구">서구</option><option value="수성구">수성구</option><option value="중구">중구</option>';

  var 대전 = '<option value="대덕구">대덕구</option><option value="동구">동구</option><option value="서구">서구</option><option value="유성구">유성구</option><option value="중구">중구</option>';

  var 부산 = '<option value="강서구">강서구</option><option value="금정구">금정구</option><option value="기장군">기장군</option><option value="남구">남구</option><option value="동구">동구</option><option value="동래구">동래구</option><option value="부산진구">부산진구</option><option value="북구">북구</option><option value="사상구">사상구</option><option value="사하구">사하구</option><option value="서구">서구</option><option value="수영구">수영구</option><option value="연제구">연제구</option><option value="영도구">영도구</option><option value="중구">중구</option><option value="해운대구">해운대구</option>';

  var 세종 = '<option value="세종로">세종로</option>';

  var 울산 = '<option value="남구">남구</option><option value="동구">동구</option><option value="북구">북구</option><option value="울주군">울주군</option><option value="중구">중구</option>';

  var 인천 = '<option value="강화">강화</option><option value="계양구">계양구</option><option value="남구">남구</option><option value="남동구">남동구</option><option value="동구">동구</option><option value="부평">부평</option><option value="서구">서구</option><option value="연수구">연수구</option><option value="옹진">옹진</option><option value="중구">중구</option>';

  var 전남 = '<option value="강진">강진</option><option value="고흥군">고흥군</option><option value="곡성">곡성</option><option value="광양시">광양시</option><option value="구례군">구례군</option><option value="나주">나주</option><option value="담양">담양</option><option value="목포시">목포시</option><option value="무안">무안</option><option value="보성">보성</option><option value="순천시">순천시</option><option value="신안">신안</option><option value="여수시">여수시</option><option value="영광">영광</option><option value="영암군">영암군</option><option value="완도군">완도군</option><option value="장성">장성</option><option value="장흥군">장흥군</option><option value="진도">진도</option><option value="함평">함평</option><option value="해남">해남</option><option value="화순군">화순군</option>';

  var 전북 = '<option value="고창">고창</option><option value="군산시">군산시</option><option value="김제시">김제시</option><option value="남원">남원</option><option value="무주">무주</option><option value="부안">부안</option><option value="순창군">순창군</option><option value="완주">완주</option><option value="익산시">익산시</option><option value="임실">임실</option><option value="장수">장수</option><option value="전주시">전주시</option><option value="정읍">정읍</option><option value="진안">진안</option>';

  var 제주 = '<option value="서귀포시">서귀포시</option><option value="제주시">제주시</option>';

  var 충남 = '<option value="계룡시">계룡시</option><option value="공주시">공주시</option><option value="금산">금산</option><option value="논산시">논산시</option><option value="당진시">당진시</option><option value="보령시">보령시</option><option value="부여">부여</option><option value="서산시">서산시</option><option value="서천군">서천군</option><option value="아산시">아산시</option><option value="연기">연기</option><option value="예산">예산</option><option value="천안시">천안시</option><option value="청양군">청양군</option><option value="태안">태안</option><option value="홍성군">홍성군</option>';

  var 충북 = '<option value="괴산">괴산</option><option value="단양">단양</option><option value="보은">보은</option><option value="영동군">영동군</option><option value="옥천군">옥천군</option><option value="음성">음성</option><option value="제천시">제천시</option><option value="증평">증평</option><option value="진천">진천</option><option value="청주시">청주시</option><option value="충주시">충주시</option>';


  $('.search_wrap #local').on('change', function(){
    if($('#local').val() == '서울'){
      $('#local2').html('');
      $('#local2').append(서울);
    } else if($('#local').val() == '강원'){
      $('#local2').html('');
      $('#local2').append(강원);
    } else if($('#local').val() == '경기'){
      $('#local2').html('');
      $('#local2').append(경기);
    } else if($('#local').val() == '경남'){
      $('#local2').html('');
      $('#local2').append(경남);
    } else if($('#local').val() == '경북'){
      $('#local2').html('');
      $('#local2').append(경북);
    } else if($('#local').val() == '광주'){
      $('#local2').html('');
      $('#local2').append(광주);
    } else if($('#local').val() == '대구'){
      $('#local2').html('');
      $('#local2').append(대구);
    } else if($('#local').val() == '대전'){
      $('#local2').html('');
      $('#local2').append(대전);
    } else if($('#local').val() == '부산'){
      $('#local2').html('');
      $('#local2').append(부산);
    } else if($('#local').val() == '세종'){
      $('#local2').html('');
      $('#local2').append(세종);
    } else if($('#local').val() == '울산'){
      $('#local2').html('');
      $('#local2').append(울산);
    } else if($('#local').val() == '인천'){
      $('#local2').html('');
      $('#local2').append(인천);
    } else if($('#local').val() == '전남'){
      $('#local2').html('');
      $('#local2').append(전남);
    } else if($('#local').val() == '전북'){
      $('#local2').html('');
      $('#local2').append(전북);
    } else if($('#local').val() == '제주'){
      $('#local2').html('');
      $('#local2').append(제주);
    } else if($('#local').val() == '충남'){
      $('#local2').html('');
      $('#local2').append(충남);
    } else {
      $('#local2').html('');
      $('#local2').append(충북);
    }
  })


})