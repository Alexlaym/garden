"use strict";

var burger = document.getElementById('burger');
var sidebar = document.getElementById('header-mobile');
var page = document.getElementById('page');
var body = document.body;
$(document).ready(function () {
  AOS.init({
    duration: 1000
  });
  var width = $(window).width();
  var height = $(window).height();
  console.log('Width: ' + width + 'px');
  console.log('Height: ' + height + 'px');
  svg4everybody();
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
    load_delay: 100
  });

  if (/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /rv:10.0/i.test(navigator.userAgent)) {
    //Добавить класс ie в боди
    document.body.className = "ie"; //Перенаправить на другую страницу

    window.location = '/ie.html';
  }

  slUpdateImg(lazyLoadInstance);

  if ($('.styler').length) {
    $('.styler').styler();
  }

  burger.addEventListener('click', function (event) {
    if (body.classList.contains('show-sidebar')) {
      closeSidebar();
    } else {
      showSidebar();
    }
  });

  function showSidebar() {
    var mask = document.createElement('div');
    mask.classList.add('page__mask');
    mask.addEventListener('click', closeSidebar);
    page.appendChild(mask);
    body.classList.add('show-sidebar');
  }

  function closeSidebar() {
    body.classList.remove('show-sidebar');
    document.querySelector('.page__mask').remove();
  }

  var $page = $('html, body');
  $('a[href*="#"]').click(function () {
    event.preventDefault();
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
  });
});

function getWindowWidth() {
  return window.innerWidth || document.body.clientWidth;
}

var slUpdateImg = function slUpdateImg(lazyLoadInstance) {
  var sl = $('.slick-initialized');
  sl.each(function () {
    $(this).on('beforeChange', function () {
      var img = $(this).find('.lazy:not(.loaded)');
      lazyLoadInstance.update();
    });
  });
};