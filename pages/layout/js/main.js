$(function(){

    $(window).on('load', function () {
      $preloader = $('.loaderArea'),
        $loader = $preloader.find('.loader');
      $loader.fadeOut();
      $preloader.delay(350).fadeOut('slow');
    });

    $('.nav__btn').click(function(){
      $(this).toggleClass('open');
    });

    $('.nav__btn-box').on('click', function(){
      $('.nav__list').toggleClass('nav__list--active');
    })

    $(".nav, .footer__nav").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.houses__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true
      });
    
})