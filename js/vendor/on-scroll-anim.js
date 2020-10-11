// var tl = new TimelineLite();

function onScrollAnim() {

  var docScroll = $(document).scrollTop(),

  heroSection = $(".el-hero-section").offset().top + 250;

  heroSectionF = $(".el-hero-section").offset().top + 5;


  if (docScroll > heroSection) {
    $('.el-main-header').css({
      "background":"#1d1f23d6"
    });
  } else{
    $('.el-main-header').css({
      "background": ""
    });
  }

  if (docScroll > heroSection) {
    $('.el-main-header').css({
      "background":"#1d1f23d6"
    });
  } else{
    $('.el-main-header').css({
      "background": ""
    });
  }

  if (docScroll > heroSectionF) {
    $('.inner-wrb-anim-box').addClass('iwrb-anim');
    tl.to('.wrb-title, .wrb-txt, .wrb-btn', { y: '0%', duration: 1, delay: 3.2, stagger: 0.15 });
  }

}

window.addEventListener("scroll", onScrollAnim);
