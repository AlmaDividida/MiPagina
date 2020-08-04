$(document).ready(function() {
    if ($('header').width() < 1200) {
        $("#nav").hide();
    } else {
        $("#nav").show();
    }
    $("#toogle").click(function() {
        $("#nav").toggle("linear");
        $(this).toggleClass('rotate');

    });
});

$(window).resize(function() {
    if ($('header').width() < 1200) {
        $("#nav").hide();
    } else {
        $("#nav").show();
    }
});