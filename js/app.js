// Site JS Goes Here

$(document).ready(function() {

  /*-------------------------------------------------------------------------*/
  /*  jQuery Dropdown Navigation
  /*-------------------------------------------------------------------------*/

  if (Modernizr.csstransitions) {
    console.log('using transitions for menus');
    // Use CSS transitions for the fade
    $('.primary-nav li:not(.has-columns) ul > li').append('<span class="nav-arrow"></span>');
    $('.primary-nav li:not(.has-columns) ul > li:has(ul) > span').css('display', 'block');

  } else {
    console.log('using jquery fade for menus');
    // css('visibility', 'visible') to undo the visibility hide/show stuff in CSS (to support IE8 display fading)
    $('.primary-nav li:not(.has-columns) ul > li').append('<span class="nav-arrow"></span>');
    $('.primary-nav li:not(.has-columns) ul > li:has(ul) > span').css('display', 'block');

    $('.primary-nav > ul > li > ul').css('visibility', 'visible').hide();
    $('.primary-nav > ul > li:has(ul)').hover(
      function () {
        //show its submenu
        $(this).find('> ul').fadeIn(100);
      },
      function () {
        //hide its submenu
        $(this).find('> ul').fadeOut(300);
      }
    );
  }

  $('li.column-2 > a').removeAttr('href').addClass("column-title");
  $('li.column-3 > a').removeAttr('href').addClass("column-title");
  $('li.column-4 > a').removeAttr('href').addClass("column-title");
  $('li.column-5 > a').removeAttr('href').addClass("column-title");

  /*-------------------------------------------------------------------------*/
  /*  Responsive Navigation Menu
  /*-------------------------------------------------------------------------*/

  $("#responsive-menu").mmenu({
    counters: true,
    header: {
      add: true,
      update: true,
      title: "Main Menu"
    },
    offCanvas: {
      position: "right"
    },
    classes: "mm-custom",
    searchfield: true
  });

  setTimeout(function() {
    $('.menu-wrapper').show(); // Show the responsive menu after half a second to prevent the flash of unstyled menu
  }, 500);

  /*-------------------------------------------------------------------------*/
  /*  Font Resizer 2.0
  /*-------------------------------------------------------------------------*/

  $('#main-content p, #main-content ul li').fontResizer({fontSet:16,setFontOn: 'OFF'});

  /*-----------------------------------------------------------------------------------*/
  /*  Scroll To Top Button
  /*-----------------------------------------------------------------------------------*/

  function initGoToTop() {

  // fade in #top_button
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.backtotop-btn').addClass("active");
      } else {
        $('.backtotop-btn').removeClass("active");
      }
    });

    // scroll body to 0px on click
    $('.backtotop-btn').click(function () {
      $('body,html').animate({
        scrollTop: 0
      },700);
      return false;
      });
    });

    if ($(window).scrollTop() > 100) {
      $('.backtotop-btn').addClass("active");
    }
  }
  initGoToTop();
});
