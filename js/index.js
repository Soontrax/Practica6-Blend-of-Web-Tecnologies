$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop > 100) {
            console.log("HAY SCROLL!!!");
        } else {
            console.log("No scroll");
        }
    })
});