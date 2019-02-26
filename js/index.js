$(document).ready(function () {
    $("#carouselExampleIndicators").fadeIn(2000);
    $(".grid-item").fadeIn(1500);

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });
    $(function () { $(".scroll").click(function () { $("html,body").animate({ scrollTop: $(".thetop").offset().top }, "1000"); return false }) })
})

/*
$(window).scroll(function() {
    if($(window).scrollTop() > 0) {
        headerOff();
    } else {
        headerOn();
    }
});
*/

