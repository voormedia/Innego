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
      $("<li><a class='menu-link' href='#"+menu_item+"'>"+menu_item+"</a></li>").appendTo('ul.menu');
    }
  });

  $("<li><a class='menu-link' href='/Innego-Algemene-Voorwaarden-v201807.pdf'>Algemene voorwaarden</a></li>").appendTo('.footer ul.menu');

  $('.logos').on('click', function(e) {
     $('html, body').animate({
         scrollTop: $("body").offset().top
     }, 1000);
  });

  var left = 0;
  var cardWidth = 34.333
  var limit = ($(".references .cards .card").length - 3) * cardWidth
  var step = 0;
  console.log("loaded")
  $('body').on('click', '.next-reference', function () {
    if (!(Math.abs(left - cardWidth) > limit)) {
      step += 1
      left -= cardWidth
      $(".references .cards .card").css("left", left + "%")
      $('.previous-reference').css('opacity', 1);
    }
  });
  $('.next-reference').on("click", function() {

  })

  $('body').on('click', '.previous-reference', function () {
    if (left < 0) {
      step -= 1
      left += cardWidth
      $(".references .cards .card").css("left", left + "%")
    }
  })



  // var numberOfCards = $(".references .cards .card").length - 2
  // for (i = 0; i < numberOfCards; i++) {
  //   if (i == 0) {
  //     $('.cards-container .bullets').append("<div data-index='" + i + "' class='fas fa-circle'></div>")
  //   } else {
  //     $('.cards-container .bullets').append("<div data-index='" + i + "' class='far fa-circle'></div>")
  //   }
  // }

  // $('.fa-circle').on('click', function(e) {
  //   var index = $(e.target).data(index)
  //   console.log("Sdfs")
  // })

  var menu = $("nav.fixed");
  var menu_height = menu.outerHeight()+15;
  var menu_items = menu.find("a");
  var scroll_items = menu_items.map(function() {
    var item = $($(this).attr("href"));
    if(item.length) {
      return item;
    }
  });

  $(window).scroll(function() {
    var from_top = $(this).scrollTop()+menu_height;
    var active = scroll_items.map(function() {
      if ($(this).offset().top < from_top) {
        return this;
      }
    });

    active = active[active.length-1];
    var id = active && active.length ? active[0].id : "";

    menu_items
      .parent().removeClass("active")
      .end().filter("[href='#"+id+"']").parent().addClass("active");

    if ($(window).scrollTop() >= 30) {
        $("nav.fixed").removeClass("transparent");
    } else {
      $("nav.fixed").addClass("transparent");
    }
  });

  $('.menu-toggle').on('click', function(e) {
    $('body').toggleClass('show-menu');
  });

  $('.menu-link')
    .click(function(event) {
      $('body').removeClass('show-menu');
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        console.log(target)
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000 );
        }
      }
    });

  window.sr = ScrollReveal();
  sr.reveal('.scroll-reveal', {
      duration: 600,
      distance: '50px',
      scale: 1,
      easing: 'ease-out',
    });
});
