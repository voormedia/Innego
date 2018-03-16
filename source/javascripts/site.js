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

});
