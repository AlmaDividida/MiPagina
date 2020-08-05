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