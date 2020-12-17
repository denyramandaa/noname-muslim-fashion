$(document).ready(function() {
  function initSwiper(){
    new Swiper('.swiper--jumbotron', {
        effect: 'fade',
        followFinger: false,
        centeredSlides: true,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        navigation: {
          nextEl: '.jumbotron--next',
          prevEl: '.jumbotron--prev',
        },
        pagination: {
          el: '.jumbotron--pagination',
          clickable: true
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        }
    });
  }
  initSwiper();
  $(window).scroll(function() {
    // untuk scroll event
  });
  $(window).load(function(){
    // loader
  });
});
function gointTo(a) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: document.getElementById(a).offsetTop - 50
  })
}
function openMenu() {
  $('.side-menu').addClass('show');
  $('.overlay-side').fadeIn(100);
}
function closeMenu() {
  $('.side-menu').removeClass('show');
  $('.overlay-side').fadeOut(100);
}