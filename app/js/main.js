$(function () {
  $(function () {
    $(".menu-mobile").on("click", function () {
      $(".menu").toggleClass("menu--active");
      $("body").toggleClass("overflow-hidden");
      $(".menu-mobile").toggleClass("menu-mobile--active");
      let link = $(".menu__list-link");
      let logo = $(".logo");
      function click(element) {
        element.on("click", function () {
          $(".menu").removeClass("menu--active");
          $("body").removeClass("overflow-hidden");
          $(".menu-mobile").removeClass("menu-mobile--active");
        });
      }
      click(link);
      click(logo);
    });
  });

  (function () {
    var forms = document.querySelectorAll(".needs-validation");
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();

  $(".reviews__slider").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: '<button class="reviews__slider-next" type="button"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 446,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  $("a.scroll-to").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr("href");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor).offset().top - 0,
        },
        200
      );
  });
});
