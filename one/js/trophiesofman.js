/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

var LiveShows =  {

    load :function() {
        $.getJSON("data/live.json", {}, function(data){
            console.log(data);
            if (data.shows) {
                var $showListString = '';
                    $(data.shows).each(function(i,show){
                        var $date = (show.date) ? show.date : '';
                        $showListString +=  '<div class="col-xs-3">' + $date + '</div>';
                        var $venue = (show.venue) ? show.venue : ''
                        $showListString += '<div class="col-xs-6">' + $venue + '</div>';

                        var $info = (typeof show.info != 'undefined') ? ('<a href="'+ show.info +'">Tickets/Info</a>') : '';

                        $showListString += '<div class="col-xs-3 text-right">' + $info + '</div>';
                        $showListString += '<div class="col-xs-12"><hr/></div>';
                    });
                $(".show-list").html($showListString);
            }
        }, 'json')
    }
};

$(document).ready(function(){
    $(window).load(function(){
        var hash = location.hash.replace('#','');
        if (hash != ''){
            var $section = $('#' + hash);
            if ($section.length > 0) {
                $('html, body').animate({ scrollTop: $section.offset().top}, 1000);
            }
        }
    });

    $(".mlto").attr("href", "mailto" + ":info@tr" + "ophiesofman.com");
    $(".mdress").html("info@tr" + "ophiesofman.com");
    LiveShows.load();
});
