

document.addEventListener("DOMContentLoaded", function(e){
    /* main page - sec1 swiper slider */
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      loop: true,
      centeredSlides: true,
      centeredSlidesBounds: false,
      spaceBetween: 86,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loopAdditionalSlides: 1,
      navigation: {
        nextEl: ".sec1 .slide-wrap .btn-wrap .next-btn",
        prevEl: ".sec1 .slide-wrap .btn-wrap .prev-btn",
      },
    });
    /* header trigger */
    $('.trigger-btn').click(function(){
        $(this).toggleClass('active')
        $('.trigger-gnb').toggleClass('active')
    })
    /* footer trigger */
    // $('.footer-trigger').click(function(){
    //   $(this).addClass('active')
    //   $(this).siblings('.inner').addClass('active')
    // })
    // $('footer .inner .close').click(function(){
    //   $(this).parents('footer .inner').removeClass('active')
    //   $(this).parents('footer .inner').siblings('.footer-trigger').removeClass('active')
    // })
    $('.footer-trigger').on('click', function(e){
      e.preventDefault();
      const target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 300)
    })
  
    /* sec4(공통) - index.html */
    $('.sec4 .bg-text').click(function(){
      $(this).siblings('.popup-wrap').addClass('active')
    })
    $('.operation03.popup .close').click(function(){
      $(this).parents('.popup-wrap').removeClass('active')
    })
    /* sec4(공통) 폼 양식 */

    //이름 한글만 입력가능
    const name = document.getElementById('form-name');
    const warning = document.getElementById('warning');

    name.addEventListener('beforeinput', (e) => {
      // 삭제는 허용
      if (e.inputType.startsWith('delete')) return;
      // 한글이 아닌 입력 시도
      if (e.inputType === 'insertText') {
        if (e.data &&!/^[ㄱ-ㅎㅏ-ㅣ가-힣]$/.test(e.data)) {
          e.preventDefault();                 
          warning.classList.add('active');   // 경고 표시
        }
      }
    });

    name.addEventListener('input', () => {
      name.value = name.value
        .replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣]/g, '') 
        .slice(0, 8); 
      if (/^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/.test(name.value)) {
        warning.classList.remove('active');  //경고 제거
      }
    });

    /* 전화번호 숫자만 입력가능 및 000-0000-0000 양식 */
    const phone = document.getElementById('form-number');
    const warning2 = document.getElementById('warning2');
    phone.addEventListener('beforeinput', (e) => {
      // 삭제는 허용
      if (e.inputType.startsWith('delete')) return;
      // 숫자가 아닌 입력 시도
      if (e.data && !/^[0-9]$/.test(e.data)) {
        e.preventDefault(); // 👉 입력 자체 차단
        warning.classList.add('is-show');
      }
    });
    phone.addEventListener('input', ()=>{
      //숫자만 추출
      let number = phone.value.replace(/[^0-9]/g, '').slice(0, 11);
      if (number.length <= 3) {
        input.value = numbers;
      } else if (number.length <= 7) {
        input.value = `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
      } else {
        input.value = `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
      }
      if (/^[0-9\-]*$/.test(phone.value)) {
        warning2.classList.remove('active'); //경고 제거
      }
    })
})


