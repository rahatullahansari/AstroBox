// For Typing Effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["A revelation to our Next Location"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
// End of Typing effect

(function ($, window, document, undefined) {
  "use strict";
  var $winW = function () {
    return $(window).width();
  };
  var $winH = function () {
    return $(window).height();
  };
  var $screensize = function (element) {
    $(element).width($winW()).height($winH());
  };
  var screencheck = function (mediasize) {
    if (typeof window.matchMedia !== "undefined") {
      var screensize = window.matchMedia("(max-width:" + mediasize + "px)");
      if (screensize.matches) {
        return true;
      } else {
        return false;
      }
    } else {
      if ($winW() <= mediasize) {
        return true;
      } else {
        return false;
      }
    }
  };
  $(document).ready(function () {
    $(window).on("load", function () {
      $(".preloader").fadeOut();
      $(".animated-row").each(function () {
        var $this = $(this);
        $this.find(".animate").each(function (i) {
          var $item = $(this);
          var animation = $item.data("animate");
          $item.on("inview", function (event, isInView) {
            if (isInView) {
              setTimeout(function () {
                $item.addClass("animated " + animation).removeClass("animate");
              }, i * 50);
            } else if (!screencheck(767)) {
              $item.removeClass("animated " + animation).addClass("animate");
            }
          });
        });
      });
    });
    if ($(".facts-list").length) {
      $(".facts-list").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 3,
        margin: 30,
        autoplay: false,
        smartSpeed: 700,
        autoplayTimeout: 6000,
        responsive: {
          0: {
            items: 1,
            margin: 0,
          },
          460: {
            items: 1,
            margin: 0,
          },
          576: {
            items: 2,
            margin: 20,
          },
          992: {
            items: 3,
            margin: 30,
          },
        },
      });
    }
    if ($(".services-list").length) {
      $(".services-list").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 3,
        margin: 30,
        autoplay: false,
        smartSpeed: 700,
        autoplayTimeout: 6000,
        responsive: {
          0: {
            items: 1,
            margin: 0,
          },
          460: {
            items: 1,
            margin: 0,
          },
          576: {
            items: 2,
            margin: 20,
          },
          992: {
            items: 3,
            margin: 30,
          },
        },
      });
    }
    if ($(".gallery-list").length) {
      $(".gallery-list").owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        autoplayTimeout: 4000,
        responsive: {
          0: {
            items: 1,
            margin: 0,
          },
          576: {
            items: 2,
            margin: 20,
          },
          992: {
            items: 3,
            margin: 30,
          },
        },
      });
    }
    if ($(".testimonials-slider").length) {
      $(".testimonials-slider").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        margin: 30,
        autoplay: true,
        smartSpeed: 700,
        autoplayTimeout: 6000,
        responsive: {
          0: {
            items: 1,
            margin: 0,
          },
          768: {
            items: 1,
          },
        },
      });
    }
    if ($(".fullpage-default").length) {
      var myFullpage = new fullpage(".fullpage-default", {
        licenseKey: " C7F41B00-5E824594-9A5EFB99-B556A3D5",
        anchors: [
          "slide01",
          "slide02",
          "slide03",
          "slide04",
          "slide05",
          "slide06",
          "slide07",
          "slide08",
          "slide09",
          "slide10",
          "slide11",
          "slide12",
          "slide13",
          "slide14",
          "slide15",
          "slide16",
        ],
        menu: "#nav",
        lazyLoad: true,
        navigation: true,
        navigationPosition: "right",
        scrollOverflow: true,
        responsiveWidth: 768,
        responsiveHeight: 600,
        responsiveSlides: true,
      });
    }
    $(document)
      .on("click", ".navbar-toggle", function () {
        $(".navbar-collapse").slideToggle(300);
        return false;
      })
      .on("click", ".navigation-menu > li > a", function () {
        $(".navbar-collapse").slideUp(300);
      })
      .on("click", ".next-section", function () {
        fullpage_api.moveSectionDown();
      });
    $(".facts-row").on("inview", function (event, isInView) {
      $(".count-number").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 1000,
              easing: "swing",
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
        setTimeout(function () {
          $(".count-number").removeClass("count-number").addClass("counted");
        }, 1000);
      });
    });
    $(".skills-row").on("inview", function (event, isInView) {
      $(this).addClass("view");
    });
    $(document)
      .on("click", ".menu-trigger", function () {
        $("body").toggleClass("sidemenu-open");
      })
      .on("click", ".side-menu .navbar-nav li a", function () {
        $("body").removeClass("sidemenu-open");
      });
  });
})(jQuery, window, document);
