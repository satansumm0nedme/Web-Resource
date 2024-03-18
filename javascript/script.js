document.addEventListener("DOMContentLoaded", function() {
    $(".step").click(function() {
        $(this).addClass("active").prevAll().addClass("active");
        $(this).nextAll().removeClass("active");
    });
    
    $(".step01").click(function() {
        $("#line-process").css("width", "10%");
        $(".cocaine").addClass("active").siblings().removeClass("active");
    });
    
    $(".step02").click(function() {
        $("#line-process").css("width", "50%");
        $(".sober").addClass("active").siblings().removeClass("active");
    });
    
    $(".step03").click(function() {
        $("#line-process").css("width", "100%");
        $(".crash").addClass("active").siblings().removeClass("active");
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        var windowHeight = $(window).height();
        var scrollPosition = $(window).scrollTop();
        $('.animate-on-scroll').each(function() {
            var offset = $(this).offset().top;
            if (scrollPosition > offset - windowHeight + 200) {
                $(this).addClass('active');
            }
        });
    });
});

