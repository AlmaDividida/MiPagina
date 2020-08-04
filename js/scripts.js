$(document).ready(function() {
    $("#nav").hide();
    $("#toogle").click(function() {
        $("#nav").toggle("linear");
        $(this).toggleClass('rotate');
        $(this).toggleClass('rotate-reset');

    });
});

$(window).resize(function() {

    if ($('header').width() <= 980) {
        $("#nav").hide();
    } else {
        $("#nav").show();
    }

});