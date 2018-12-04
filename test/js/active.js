(function($) {
    'use strict';

    // [ JS Active Code Index ]

    // :: 1.0 Owl Carousel Active Code
    // :: 2.0 Slick Active Code
    // :: 3.0 Footer Reveal Active Code
    // :: 4.0 ScrollUp Active Code
    // :: 5.0 CounterUp Active Code
    // :: 6.0 onePageNav Active Code
    // :: 7.0 Magnific-popup Video Active Code
    // :: 8.0 Sticky Active Code
    // :: 9.0 Preloader Active code

    // :: 1.0 Owl Carousel Active Code
    if ($.fn.owlCarousel) {
        $(".welcome_slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            nav: true,
            navText: ["<i class='pe-7s-angle-left'</i>", "<i class='pe-7s-angle-right'</i>"]
        });
        $(".app_screenshots_slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 800,
            margin: 30,
            center: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });
    }

    // :: 2.0 Slick Active Code
    if ($.fn.slick) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            slide: 'div',
            autoplay: true,
            centerMode: true,
            centerPadding: '30px',
            mobileFirst: true,
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>'
        });
    }

    // :: 3.0 Footer Reveal Active Code
    if ($.fn.footerReveal) {
        $('footer').footerReveal({
            shadow: true,
            shadowOpacity: 0.3,
            zIndex: -101
        });
    }

    // :: 4.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }

    // :: 5.0 CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 6.0 onePageNav Active Code
    if ($.fn.onePageNav) {
        $('#nav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 2000,
            easing: 'easeOutQuad'
        });
    }

    // :: 7.0 Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
        $('.video_btn').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
    }

    $('a[href="#"]').click(function($) {
        $.preventDefault()
    });

    var $window = $(window);

    if ($window.width() > 767) {
        new WOW().init();
    }

    // :: 8.0 Sticky Active Code
    $window.on('scroll', function() {
        $('.header_area').addClass('sticky');

    });

    // :: 9.0 Preloader Active code
    $window.on('load', function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });



    /* jVector Maps
     * ------------
     * Create a world map with markers
     
    $('#world-map-markers').vectorMap({
        map: 'world_mill_en',
        normalizeFunction: 'polynomial',
        hoverOpacity: 0.7,
        hoverColor: false,
        backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: 'rgba(210, 214, 222, 1)',
                'fill-opacity': 1,
                stroke: 'none',
                'stroke-width': 0,
                'stroke-opacity': 1
            },
            hover: {
                'fill-opacity': 0.7,
                cursor: 'pointer'
            },
            selected: {
                fill: 'yellow'
            },
            selectedHover: {}
        },
        markerStyle: {
            initial: {
                fill: '#00a65a',
                stroke: '#111'
            }
        },
        markers: [
            { latLng: [60, 100], name: 'Russia' },
            { latLng: [25, 45], name: 'Sausi Arabia' },
            { latLng: [38, -97], name: 'USA' },
            { latLng: [32, 53], name: 'Iran' },
            { latLng: [35, 105], name: 'China' },
            { latLng: [23, -102], name: 'Mexico' },
            { latLng: [8, -66], name: 'Venezuela' },
            { latLng: [24, 54], name: 'UAE' },
            { latLng: [54, -100], name: 'Canada' },
            { latLng: [33, 44], name: 'Iraq' },
            { latLng: [-22, 17], name: 'Nigeria' },
            { latLng: [29.3375, 47.6581], name: 'Kuwait' },
            { latLng: [62, 10], name: 'Norway' },
            { latLng: [54, -2], name: 'UK' },
            { latLng: [41, 20], name: 'Algeria' },
            { latLng: [33.8333, 35.833], name: 'Libya' },
            { latLng: [12.25, -68.75], name: 'Angola' },
            { latLng: [25.5, 51.25], name: 'Quatar' }
        ]
    }); */


})(jQuery);