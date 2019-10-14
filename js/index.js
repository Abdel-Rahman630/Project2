$(function () {

    //  Carousel Timer
    $('.carousel').carousel({
        interval: 5000
      })

    //  CountTo Plugin
    $('.timer').countTo();

    // NiceScroll
    $(function() {  
      $("body").niceScroll({
        cursorcolor: "teal",
        cursorborder: "1px solid teal",
        cursorwidth: '10px',
      });
    });

    // Show Option-Box
    $(".option-box .cog-check").click(function () {

      $(".color-option").fadeToggle()

    })

    //  Change Color
    var colorOption = $('.color-option ul li')

    colorOption
    .eq(0).css("backgroundColor", 'teal').end()
    .eq(1).css("backgroundColor", '#9300ff').end()
    .eq(2).css("backgroundColor", '#009AFF').end()
    .eq(3).css("backgroundColor", '#E41B17').end()

    colorOption.click(function () {

      $("link[href*='theme']").attr('href', $(this).attr('data-value'))

    })

    //  Scroll Top
    $(window).scroll(function () {

      if ($(window).scrollTop() >= 800) {

        $(".scroll-top").show()
  
      } else {
        $('.scroll-top').hide()
      }

      $(".scroll-top").click(function () {

        $("html, body").animate({

          scrollTop: 0

        }, 600)

      })

    })

    

})
