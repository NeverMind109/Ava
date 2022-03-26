$(function () {
  $(function () {
    $(".menu-mobile").on("click", function () {
      $(".menu").toggleClass("menu--active");
      $("body").toggleClass("overflow-hidden");
      $(".menu-mobile").toggleClass("menu-mobile--active");
      let link = $(".menu-list__link");
      let logo = $(".logo");
      function click(element) {
        element.on("click", function () {
          $(".menu").removeClass("menu--active");
          $("body").removeClass("overflow-hidden");
        });
      }
      click(link);
      click(logo);
    });
  });
});
