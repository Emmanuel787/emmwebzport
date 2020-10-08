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
    $('.wwas-left-box').addClass('wwas-anim');
  }

}

window.addEventListener("scroll", onScrollAnim);
