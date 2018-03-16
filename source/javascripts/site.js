$(function() {

  function closePopup(e, that) {
    var targeted_popup_class = jQuery(that).attr('data-popup-close');
    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
    e.preventDefault();
  }

  $('.popup').on('click', function(e){
    if (!$(e.target).hasClass('popup')) {
      e.stopPropagation();
    } else {
      closePopup(e, $(this).find("a[data-popup-close]"))
    }
  })

  $('[data-popup-open]').on('click', function(e)  {
    var targeted_popup_class = jQuery(this).attr('data-popup-open');
    $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
    e.preventDefault();
  });

  $('[data-popup-close]').on('click', function(e)  {
    closePopup(e, this)
  });

  $('section').each(function(e) {
    var menu_item = $(this).attr('id');
    if (menu_item != null) {
      $("<li><a href='#"+menu_item+"'>"+menu_item+"</a></li>").appendTo('ul.menu');
    }
  });

  $(window).scroll(function() {
      if ($(window).scrollTop() >= 30) {
          $("nav.fixed").removeClass("transparent");
      } else {
        $("nav.fixed").addClass("transparent");
      }
  });

  $('.logos').on('click', function(e) {
     $('html, body').animate({
         scrollTop: $("body").offset().top
     }, 1000);
  });

  $('nav a').each(function(){
      $(this).parent().width($(this).width() + 4);
  });

  $('section').each(function() {
    var id = $(this).attr('id');
  });

  $('a[href*="#"]')
    .click(function(event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000 );
        }
      }
    });
});
