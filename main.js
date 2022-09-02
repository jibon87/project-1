(function ($) {
    "use strict";

    // jquery-bg
    $("*[data-background-image]").each(function () {
        $(this).css({
            "background-image": "url(" + $(this).data("background-image") + ")",
        });
    });

    // swiper c..
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        // spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 1,
                // spaceBetween: 50,
            },
        },
    });

    $(".logo-carousel").owlCarousel({
        items: 3,
        margin: 30,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            576:{
                items:3,
                nav:false
            },
            700:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });

})(jQuery);

// To Top Circle Button

$(document).ready(function () {
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();

    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;

    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - scroll * pathLength / height;
        progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();

    $(window).scroll(updateProgress);

    var offset = 50;
    var duration = 500;

    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });

    jQuery('.progress-wrap').on('click', function (event) {
        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);
    });
});