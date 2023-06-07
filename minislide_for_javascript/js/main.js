let section = document.querySelector('.section');
let slideWrap = document.querySelector('.slide_wrap');
let slide = document.querySelectorAll('.slide');
let slideCount = slide.length;
// let prev = document.querySelector('#prev');
// let next = document.querySelector('#next');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let currentIndex = 0;
let page = document.querySelector('.page');


// slide[0].style.left = '0%';
// slide[1].style.left = '100%';
// slide[2].style.left = '200%';

for(let i = 0; i < slideCount; i++){
    slide[i].style.left = i * 100 + '%';
    page.innerHTML += "<span class='dot'>" + (i + 1) + "</span>";
}

let dot = document.querySelectorAll('.dot');
dot[0].classList.add('on');

function moveSlide(index){
    slideWrap.style.left = index * -100 + '%';
    currentIndex = index;
    for(let i = 0; i < slideCount; i++){
        dot[i].classList.remove('on');
    }
    dot[index].classList.add('on');
}

// prev, next 버튼 클릭 이벤트
prev.addEventListener('click', function(){
    if(currentIndex > 0){
        moveSlide(currentIndex - 1);
    } else {
        moveSlide(slideCount - 1)
    }
});

next.addEventListener('click', function(){
    if(currentIndex < slideCount - 1){
        moveSlide(currentIndex + 1);
    } else {
        moveSlide(0)
    }
});

// 페이지 dot 클릭 이벤트
for(let i = 0; i < slideCount; i++){
    dot[i].addEventListener('click', function(event){
       for(let j = 0; j < slideCount; j++){
           dot[j].classList.remove('on');
       }
       event.target.classList.add('on'); 
       let innerData = event.target.innerText - 1;
       moveSlide(innerData);
    });
}

// 버튼 숨기기
// prev.classList.add('on');
// prev.addEventListener('click', function(){
//     moveSlide(currentIndex - 1);
//     if(currentIndex === 0){
//         prev.classList.add('on');
//     } else {
//         prev.classList.remove('on');
//         next.classList.remove('on');
//     }
// });


// 슬라이드 자동 재생하는 setInterval을 변수에 담아줌
let autoSlide = setInterval(function(){
    let ind = (currentIndex + 1) % slideCount;
    moveSlide(ind);
}, 3000)

// 자동 재생 함수
function startSlide(){
    autoSlide = setInterval(function(){
        let ind = (currentIndex + 1) % slideCount;
        moveSlide(ind);
    }, 3000)
}

// mouseenter: 슬라이드 일시정지, mouseleave: 다시 자동 재생
// clearInterval(멈추고자 하는 setInterval을 적어줌 -> 변수로 담아줘야 함)
section.addEventListener('mouseenter', function(){
    clearInterval(autoSlide);
});

section.addEventListener('mouseleave', function(){
    startSlide();
});