$(function() {
    'use strict';

    // fix height header
    // $('#header_part').height($('.navbar.navbar-default.my_nav').height());

    // gallery js
    $("#animated-thumbnails").justifiedGallery({
                captions: false,
                lastRow: "nojustify",
                rowHeight: 200,
                margins: 10
    });

    lightGallery(document.getElementById('animated-thumbnails'), {
        thumbnail: true,
        selector: ".col-sm-3 a",
    });

    // fix height members
    var max_height = $('.team_memb img')[0];
    max_height = $(max_height).height();
    $('.team_memb').each(function (index, element) {
        if ($(element).height > max_height){
            max_height = $(element).height;
        }
    });
    $('.team_memb').each(function (index, element) {
        $(element).height(max_height);
    });


    var windo = $(window);

    /* pre-load js */
    windo.on('load', function() {
        $("#preloader").delay(1000).fadeOut(800);
    });

    /* Scroll spy */
    $('body').scrollspy({
        target: ".my_nav",
        offset: 200
    });

    /* back to top button*/
    var HtmlBody = $('html, body'),
        backtotop = $("#backtotop");

    backtotop.on('click', function() {
        HtmlBody.animate({
            scrollTop: 0
        }, 2000);
    });

    /* Navbar Scroll js */
    var my_nav = $(".my_nav"),
        ofset = my_nav.offset().top;

    windo.on('scroll', function() {
        var scrltop = windo.scrollTop();

        if (scrltop > 400) {
            my_nav.addClass("nav_scrl");
        } else {
            my_nav.removeClass("nav_scrl");
        }
        // Back to top button

        if (scrltop > 200) {
            backtotop.fadeIn();
        } else {
            backtotop.fadeOut();
        }

        $('[data-parallax="image"]').each(function() {
            var actualHeight = $(this).position().top;
            var speed = $(this).data('parallax-speed');
            var reSize = actualHeight - $(window).scrollTop();
            var makeParallax = -(reSize / 2);
            var posValue = makeParallax + "px";
            $(this).css({
                backgroundPosition: '50% ' + posValue,
            });
        });
    });


    $('[data-parallax="image"]').each(function() {
        $(this).css({
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        });
    });
    /* background images*/
    $('[data-bg-image]').each(function() {
        var img = $(this).data('bg-image');
        $(this).css({
            background: 'url(' + img + ')',
        });
    });

    /* smooth Scroll */
    $('a[href*="#"]:not([href="#').on('click', function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                HtmlBody.animate({
                    scrollTop: target.offset().top - 100
                }, 1000);
                return false;
            }
        }
    });


    /* Banner Slick js */
    $('.slide_active').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 1000,
        fade: true,
        infinite: true,
        arrows: true,
        prevArrow: '.banner_arrow_left',
        nextArrow: '.banner_arrow_right',
        dots: true,
        autoplay: true,
        // cssEase: 'linear'
    });

    /* About veno box js */
    $('.venoboxvideo').venobox({
        autoplay: true,
        closeColor: '#fcac45'
    });

    /* Achivement Counter js */
    $('.counting').counterUp({
        delay: 30,
        time: 3000
    });

    /* Work filtrizr js */
    // var filterContainer = $('.filtr-container');
    //
    // var filterFunction = filterContainer.filterizr();
    //
    // filterFunction.imagesLoaded().progress(function() {
    //     filterFunction
    // });


    // work filtrizr control js 
    // $('.simplefilter li').on('click', function() {
    //     $('.simplefilter li').removeClass('active');
    //     $(this).addClass('active');
    // });

    /* Work Venobox js */
    // $('.venobox').venobox({
    //     arrowsColor: "#fcac45",
    //     spinner: 'three-bounce',
    //     spinColor: '#fcac45',
    //     closeColor: '#fcac45'
    // });

    /* Skill Progress Bar js */

    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'manual'
    }).tooltip('show');

    var waypoints = $('.progress-bar').waypoint(function(direction) {
        $(".progress-bar").each(function() {
            var each_bar_width = $(this).attr('aria-valuenow');
            $(this).width(each_bar_width + '%');
        });
    }, {
        offset: '90%'
    });

    /* Testimonal slick js */
    $('.client_testi').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        prevArrow: '.testi_prev',
        nextArrow: '.testi_next',
        fade: true,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    /* Team slick js */
    $('.team_members').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.team_prev',
        nextArrow: '.team_next',
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }

            }
        ]
    });

    /* Blog Slick js */
    $('.blog_content_part').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 991,
                settings: {
                    infinite: true,
                    slidesToScroll: 1,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            }
        ]
    });

});


// Map js

function initMap() {
    'use strict';
    var Location = {
        lat: 40.749278,
        lng: -73.985894
    };
    var Canvas = document.getElementById('map');
    var options = {
        center: Location,
        zoom: 18,
        scrollwheel: false
    };
    var map = new google.maps.Map(Canvas, options);

    var marker = new google.maps.Marker({
        position: Location,
        map: map,
        animation: google.maps.Animation.BOUNCE
    });
}