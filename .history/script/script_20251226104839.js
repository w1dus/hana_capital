

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
    name.addEventListener('input', () => {
      name.value = name.value
        .replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣]/g, '') 
        .slice(0, 8); 
      //한글 외 입력시 안내문구 출력
      if (/^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/.test(name.value)) {
        warning.classList.add('active');
      }
    });
    /* 전화번호 숫자만 입력가능 및 000-0000-0000 양식 */
    const phone = document.getElementById('form-number');
    $("#form-number").keyup(function(){
    $(this).val($(this).val().replace(/[^0-9]/gi, "").replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`));
    if (/^[0-9\-]*$/.test(name.value)) {
      warning.classList.add('active');
    }
  });
})


