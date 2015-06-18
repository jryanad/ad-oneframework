
/*-------------------------------------------------------------------------*/
/*  Simple Accordion
/*-------------------------------------------------------------------------*/


$(document).ready(function() {

	$('h4.acc-trigger > a').each(function(){
		$(this).prepend('<span class="icon-openClose"></span>')
	});
  
  var allPanels = $('.accordion > .acc-detail').hide();
  var button =    $('h4.acc-trigger > a');

  $('h4.acc-trigger > a').click(function(e) {
    $(button).removeClass('open');
    $this = $(this);
    $this.addClass('open');
    $target =  $this.parent().next();

    if(!$target.hasClass('active')){
      allPanels.removeClass('active').slideUp();
      $target.addClass('active').slideDown();
    }
    else {
      allPanels.removeClass('active').slideUp();
      $(button).removeClass('open');
    }
    e.preventDefault();
  });

 });