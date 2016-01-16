var Behavior = {
    initScroll: function() {
        $(window).scroll(function() {
            if ($(".navbar").offset().top > 50) {
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
        });

        $(function() {
            $('a.page-scroll').bind('click', function(event) {
                event.preventDefault();
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
            });
        });
    },
    initNavbar: function() {
        // Closes the Responsive Menu on Menu Item Click
        $('.navbar-collapse ul li a').click(function() {
            $('.navbar-toggle:visible').click();
        });

    },
    initHashParser: function() {

        var hash = location.hash.replace('#','');
        if (hash != ''){
            var $section = $('#' + hash);
            if ($section.length > 0) {
                $('html, body').animate({ scrollTop: $section.offset().top}, 1000);
            }
        }

    },
    displayEmailAddresses: function() {
        $(".mlto").attr("href", "mailto" + ":info@tr" + "ophiesofman.com");
        $(".mdress").html("info@tr" + "ophiesofman.com");
    }
};
var LiveShows =  {
    load :function() {
        $.getJSON("data/live.json", {}, function(data){
            if (data.shows) {
                var $showListString = '';
                $(data.shows).each(function(i,show){
                    var $date = (show.date) ? show.date : '';
                    $showListString +=  '<div class="col-xs-3">' + $date + '</div>';
                    var $venue = (show.venue) ? show.venue : '';
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
    Behavior.initScroll();
    Behavior.initNavbar();
    Behavior.initHashParser();
    Behavior.displayEmailAddresses();
    LiveShows.load();
});
