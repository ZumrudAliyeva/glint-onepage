$(document).ready(function () {




$(document).on("click", ".header-toggle-menu", function () {

  $(".header-nav").addClass("active");



});
$(document).on("click", ".header-nav-close", function () {

  $(".header-nav").removeClass("active");



});

$(document).on("click", ".submit", function () {

  if ($(".form-input").val().length < 1) {
    $(".message-warning").show();

  
  }else{
    $(".message-success").show();
    $(".message-warning").hide();
  }


});
let ScrolledAmount = 600;
$(window).on("scroll", function () {
    if ($(window).scrollTop() > ScrolledAmount) {
        $('.go-top').addClass('back-top-visible');
    } else {
        $('.go-top').removeClass('back-top-visible');
    }
});
$(document).on("click", '.go-top', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 700);
    return false;
});
$('[data-fancybox = "image"]').fancybox({
  loop:true,


   'transitionIn': 'elastic',
 'transitionOut': 'elastic',
 'speedIn': 600,
  'speedOut': 200,
  buttons: [
    'slideShow',
    'fullScreen',
    'thumbs',
      'zoom',
      'close'
  
   
 ]
 

})

let sliderCount = 0;
 
$(document).on("click", ".right", function () {
    if(sliderCount == ($(".slick-current").length - 1)){
        sliderCount = 0;
    }
    else{
        sliderCount++;
    }
    $(".slick-current.active2").removeClass("active2");
    $(".slick-current").eq(sliderCount).addClass("active2");
});
$(document).on("click", ".left", function () {
    if(sliderCount == 0){
        sliderCount = $(".slick-current").length - 1;
    }
    else{
        sliderCount--;
    }
    $(".slick-current.active2").removeClass("active2");
    $(".slick-current").eq(sliderCount).addClass("active2");
    

});
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  
  center: true,
  
    nav:true,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})


 $(document).on("click", ".nav-item a", function () {
  $(".header-nav").removeClass("active");
 })


});