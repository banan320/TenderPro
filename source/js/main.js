// slider =====================================================
$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    loop: true,
    dots: true,
    slidesToShow: 3,
    autoplay: false,
    speed: 800,
    autoplaySpeed: 5000,
    swipe: true,
    touchThreshold: 5,

    // interval: 800,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          adaptiveHeight: true,
        },
      },
    ],
    appendArrows: $(".reviews__btn-arrows"),
  });

  // $(".project__slider").slick({

  // });

  $(window).on("load resize", function () {
    var width = $(document).width();

    if (width >= 769) {
      $(".project__slider").slick("unslick");
    } else {
      $(".project__slider")
        .not(".slick-initialized")
        .slick({
          arrows: true,
          loop: true,
          dots: false,
          slidesToShow: 4,
          autoplay: true,
          speed: 800,
          autoplaySpeed: 5000,
          swipe: true,
          touchThreshold: 10,
          centerMode: true,
          centerPadding: "0px",
          // variableWidth: true,
          // adaptiveHeight: true,
          // interval: 800,
          responsive: [
            {
              breakpoint: 321,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
          appendArrows: $(".project__btn-arrows"),
        });
    }
  });
});
// slider =====================================================

// $(".menu__burger").click(function () {
//   $(".menu__burger").toggleClass("open-menu");
// });

$(document).ready(function () {
  $(".menu__burger").click(function () {
    $(".menu__burger").toggleClass("open-menu");
    $(".header__menu").toggleClass("open-menu");
  });
});
