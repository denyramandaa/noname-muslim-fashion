/*global Vue*/
Vue.config.devtools = true;
'use strict';
new Vue({
  el: '#app',
  data:{
    jumbotronImage: ['01.jpg','cov1.jpg','cov2.jpg','cov3.jpg'],
    products: ['09.jpg', '11.jpg', '03.jpg'],
    menus: [{
      name: 'about us',
      url: 'about-us'
    },{
      name: 'our product',
      url: 'our-product'
    },{
      name: 'why us?',
      url: 'why-us'
    },{
      name: 'gallery',
      url: 'our-gallery'
    },{
      name: 'articles',
      url: 'articles'
    },{
      name: 'contact us',
      url: 'contact-us'
    }],
    openMenu: false,
    scrolled: false,
    productView: 1.2,
  },
  methods:{
    initSwiper(){
      swiper = new Swiper('.swiper--jumbotron', {
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
    },
    initSwiperProducts(a){
      const _self = this;
      swiper = new Swiper('.swiper--products', {
          effect: 'slide',
          followFinger: true,
          centeredSlides: true,
          loop: true,
          slidesPerView: a,
          spaceBetween: 0,
          pagination: {
            el: '.product--pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.product--next',
            prevEl: '.product--prev',
          }
      });
    },
    registScroll: function (){
      window.scrollY  > document.getElementsByClassName('jumbotron')[0].clientHeight/2 ? this.scrolled = true : this.scrolled = false
    },
    gointTo(a) {
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: document.getElementById(a).offsetTop - 50
      })
    }
  },
  mounted(){
    this.$nextTick(function(){
      this.initSwiper();
      const _self = this
      window.innerWidth >= 1024 ? this.productView = 2.2 : this.productView = 1.2
      setTimeout(function(){
        _self.initSwiperProducts(_self.productView);
      },1000)
    });
  },
  created(){
    window.addEventListener('scroll', this.registScroll);
  },
  beforeDestroy(){
    window.removeEventListener('scroll', this.registScroll);
  }
});