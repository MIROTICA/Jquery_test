$(function() {
  var priMary = $('.page-header'),
    priMaryDistance = priMary.offset().top;

  $(window).scroll(function() {
    if ($(this).scrollTop() >= priMaryDistance) {
      priMary.addClass('sticky');
    } else {
      priMary.removeClass('sticky');
    }

    console.log($(this).scrollTop());
  });
});
