var swiper1 = new Swiper('#swiper1', {
  speed: 1000,
  autoplay: {
    delay:5000,
  },
  parallax : true,
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'wb-bullet',
    bulletActiveClass: 'wb-bullet-active',
    clickable: true,
  },
  on:{
    init: function(){
      swiperAnimateCache(this); //隐藏动画元素 
      swiperAnimate(this); //初始化完成开始动画
    }, 
    slideChangeTransitionEnd: function(){ 
      swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
    } 
  }
});
swiper1.pagination.$el.addClass('wb-pagination')
