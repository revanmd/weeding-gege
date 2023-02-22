/* ----------------------------------------------------------------

[ Custom settings ]

01. Mobile 
02. Preloader
03. ScrollIt
04. Full Height
05. Animations
06. Navbar scrolling background
07. Close navbar-collapse when a clicked
08. Sections background image from data background 
09. YouTubePopUp
10. Story owlCarousel
11. Events owlCarousel
12. Gift Registry owlCarousel
13. Slider
14. Gallery
15. Magnific Popup
16. Progress-wrap
17. RSVP Form
18. Countdown wedding


------------------------------------------------------------------- */

(function () {
    'use strict';
    
    // Mobile
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        }
        , BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        }
        , iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        }
        , Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        }
        , Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        }
        , any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    
    // Preloader 
    $(window).load(function() {
    $('.preloader').fadeOut("slow");
    });
    
    var wind = $(window);
    
    // ScrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -70            // offste (in px) for fixed top navigation
    });
    
    // Full Height
    var fullHeight = function () {
        if (!isMobile.any()) {
            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function () {
                $('.js-fullheight').css('height', $(window).height());
            });
        }
    };
    
    // Animations
    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function () {
                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated');
                            }
                            else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated');
                            }
                            else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated');
                            }
                            else {
                                el.addClass('fadeInUp animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {
            offset: '85%'
        });
    };
    
    // Navbar scrolling background
    wind.on("scroll",function () {
        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar .logo> img");
        if(bodyScroll > 100){
            navbar.addClass("nav-scroll");
            logo.attr('src', 'images/logo-dark.png');
        }else{
            navbar.removeClass("nav-scroll");
            logo.attr('src', 'images/logo-light.png');
        }
    });
    
    // Close navbar-collapse when a  clicked
    $(".navbar-nav .dropdown-item a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    // Sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function(indx){
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
    
    $(function () {
        contentWayPoint();
    });
    
    // YouTubePopUp
    $("a.vid").YouTubePopUp();
    
    // Story owlCarousel
    $('.story .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: false
        , dots: true
        , nav: false
        , animateOut: 'fadeOut'
        , navText: ['<i class="ti-arrow-left" aria-hidden="true"></i>', '<i class="ti-arrow-right" aria-hidden="true"></i>']
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 1
            }
            , 1000: {
                items: 1
            }
        }
    });
    
    // Events owlCarousel
    $('.events .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: false
        , dots: true
        , nav: false
        , animateOut: 'fadeOut'
        , navText: ['<i class="ti-arrow-left" aria-hidden="true"></i>', '<i class="ti-arrow-right" aria-hidden="true"></i>']
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 1
            }
            , 1000: {
                items: 1
            }
        }
    });
    
    // Bridesmaid owlCarousel
    $('.bridesmaid .owl-carousel').owlCarousel({
        loop: true
        , margin: 10
        , mouseDrag: true
        , autoplay: false
        , dots: false
        , responsiveClass: true
        , responsive: {
            0: {
                margin: 10
                , items: 1
            }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 3
            }
        }
    });
    
    // Groomsmen owlCarousel
    $('.groomsmen .owl-carousel').owlCarousel({
        loop: true
        , margin: 10
        , mouseDrag: true
        , autoplay: false
        , dots: false
        , responsiveClass: true
        , responsive: {
            0: {
                margin: 10
                , items: 1
            }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 3
            }
        }
    });
    
    // Gift Registry owlCarousel
    $('.gift-registry .owl-carousel').owlCarousel({
        loop: true
        , margin: 10
        , mouseDrag: true
        , autoplay: true
        , dots: false
        , responsiveClass: true
        , responsive: {
            0: {
                margin: 10
                , items: 2
            }
            , 600: {
                items: 4
            }
            , 1000: {
                items: 5
            }
        }
    });
    
    // Slider
    var sliderMain = function () {
        $('.flexslider').flexslider({
            animation: "fade"
            , slideshowSpeed: 5000
            , slideshow: false
            , directionNav: true
            , start: function () {
                setTimeout(function () {
                    $('.slider-text').removeClass('animated fadeInUp');
                    $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
                }, 500);
            }
            , before: function () {
                setTimeout(function () {
                    $('.slider-text').removeClass('animated fadeInUp');
                    $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
                }, 500);
            }
        });
    };
    
    // Gallery 
    $(window).on("load", function () {
    var e = $(".gallery-filter")
        , a = $("#gallery-filter");
    e.isotope({
        filter: "*"
        , layoutMode: "masonry"
        , animationOptions: {
            duration: 750
            , easing: "linear"
        }
    }), a.find("a").on("click", function () {
        var o = $(this).attr("data-filter");
        return a.find("a").removeClass("active"), $(this).addClass("active"), e.isotope({
            filter: o
            , animationOptions: {
                animationDuration: 750
                , easing: "linear"
                , queue: !1
            }
        }), !1
    })
});
    
    // Magnific Popup
    $(".img-zoom").magnificPopup({
    type: "image"
    , closeOnContentClick: !0
    , mainClass: "mfp-fade"
    , gallery: {
        enabled: !0
        , navigateByImgClick: !0
        , preload: [0, 1]
    }
});
    
    // Document on load.
    $(function () {
        fullHeight();
        contentWayPoint();
        sliderMain();
    });
    
    // Progress-wrap
     var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })
    
    // RSVP FORM 
    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
        form.find('input:not([type="submit"]), textarea').val('');
    }
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
    }
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
    
    
}());


// Countdown wedding
  (function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  let birthday = "Dec 24, 2023 00:00:00",
      countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    
        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");

          headline.innerText = "It's our wedding!";
          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
  }());
    
