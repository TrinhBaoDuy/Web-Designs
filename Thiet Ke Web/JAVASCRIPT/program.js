(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $(".btn-primary").addClass("show");
    } else {
      $(".btn-primary").removeClass("show");
    }
  });
});
