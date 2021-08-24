"use strict";

$(document).ready(function () {
  resizeContact();
  var msSlider = $('.care-slider');

  if (msSlider.length) {
    msSlider.each(function () {
      if ($(this).children().length > 2) {
        $(this).slick({
          autoplay: true,
          infinite: true,
          autoplaySpeed: 3000,
          arrows: false,
          dots: false,
          slidesToShow: 2,
          vertical: true,
          responsive: [{
            breakpoint: 991,
            settings: {
              vertical: false,
              slidesToShow: 3
            }
          }, {
            breakpoint: 601,
            settings: {
              vertical: false,
              slidesToShow: 2
            }
          }]
        });
      }
    });
  }

  var outlookSlider = $('.outlook__images');

  if (outlookSlider.length) {
    outlookSlider.each(function () {
      if ($(this).children().length > 2) {
        $('.outlook__images').slick({
          arrows: false,
          dots: false,
          slidesToShow: 3,
          responsive: [{
            breakpoint: 601,
            settings: {
              slidesToShow: 2
            }
          }]
        });
      }
    });
  }

  function getWindowWidth() {
    return window.innerWidth || document.body.clientWidth;
  }

  $(window).resize(function () {
    resizeContact();
  });

  function resizeContact() {
    if (getWindowWidth() < 601) {
      $('.header-top__info').prependTo($('.header-bottom'));
    } else if (getWindowWidth() >= 601) {
      $('.header-top__info').appendTo($('.header-top__wrp'));
    }
  }

  $("#ajax-popup, .form__close").on("click", function (e) {
    var $this = $(this);
    var form = $('.ajax-form');
    $this.toggleClass("open");

    if (form.hasClass("open")) {
      body.classList.remove('show-form');
      form.removeClass("open");
    } else {
      body.classList.add('show-form');
      form.addClass("open");
    }
  });
});