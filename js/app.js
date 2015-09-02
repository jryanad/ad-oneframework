// Site JS Goes Here

$(document).ready(function() {

  /*-------------------------------------------------------------------------*/
  /*  jQuery Dropdown Navigation
  /*-------------------------------------------------------------------------*/

  if (Modernizr.csstransitions) {
    console.log('using transitions for menus');
    // Use CSS transitions for the fade
    $('li:not(.has-columns) ul > li').append('<span class="nav-arrow"></span>');
    $('li:not(.has-columns) ul > li:has(ul) > span').css('display', 'block');

  } else {
    console.log('using jquery fade for menus');
    // css('visibility', 'visible') to undo the visibility hide/show stuff in CSS (to support IE8 display fading)
    $('li:not(.has-columns) ul > li').append('<span class="nav-arrow"></span>');
    $('li:not(.has-columns) ul > li:has(ul) > span').css('display', 'block');

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
  /*  To Do:
  /*  Figure out fix for fadeIn and fadeOut for level-2 dropdown.
  /*  Current CSS3 solution doesn't play nice in Google Crome if
  /*  { display: none; } isn't set.
  /*-------------------------------------------------------------------------*/

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
});
