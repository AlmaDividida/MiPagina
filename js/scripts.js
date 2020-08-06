$(document).ready(function() {
    if ($('header').width() < 1200) {
        $("#nav").hide();
    } else {
        $("#nav").show();
    }
    $("#menu-toogle").click(function() {
        $("#nav").toggle("linear");
        $("#toogle").toggleClass('rotate');

    });
});

$(window).resize(function() {
    if ($('header').width() < 1200) {
        $("#nav").hide();
    } else {
        $("#nav").show();
    }
});

$(window).scroll(function() {
    $(".site-header").css("transition", ".4s");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        $(".site-header").css("background", "#222222");
    } else {
        $(".site-header").css("background", "none");
    }
});