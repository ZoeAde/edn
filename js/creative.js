/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict


// Check background size to determine video or image content to display
// function isIE () {
//     var myNav = navigator.userAgent.toLowerCase();
//     return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
// }

// window.isIEOld = isIE() && isIE() < 9;
// window.isiPad = navigator.userAgent.match(/iPad/i);

// var img = $('.video').data('placeholder'),
//     video = $('.video').data('video'),
//     noVideo = $('.video').data('src'),
//     el = '';

// if($(window).width() > 599 && !isIEOld && !isiPad) {
//     el +=   '<video autoplay loop poster="' + img + '">';
//     el +=       '<source src="' + video + '" type="video/mp4">';
//     el +=   '</video>';
// } else {
//     el = '<div class="video-element" style="background-image: url(' + noVideo + ')"></div>';
// }

// $('.video').prepend(el);
