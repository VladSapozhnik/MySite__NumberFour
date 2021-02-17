$(document).ready(function () {  
    $('.top-slider').slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="./img/next-arrow.svg" alt="next"></button>',
      prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="./img/prev-arrow.svg" alt="next"></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
          }
        },
        {
          breakpoint: 640,
          settings: {
            arrows: false,
          }
        }
      ]
    });
    $('.quotes-slider').slick({
      dots: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
          }
        },
        {
          breakpoint: 640,
          settings: {
          }
        }
      ]
    });
});

$(document).ready(function () {
    var margin = 0; // переменная для контроля докрутки
    $("a").click(function () { // тут пишите условия, для всех ссылок или для конкретных
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + margin + "px" // .top+margin - ставьте минус, если хотите увеличить отступ
        }, {
            duration: 800, // тут можно контролировать скорость
            easing: "swing"
        });
        return false;
    });
});

$( function() {
    $( document ).tooltip();
} );