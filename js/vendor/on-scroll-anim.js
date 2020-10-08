// var tl = new TimelineLite();


function onScrollAnim() {

  var docScroll = $(document).scrollTop(),

  heroSection = $(".el-hero-section").offset().top + 250;


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

}

window.addEventListener("scroll", onScrollAnim);
