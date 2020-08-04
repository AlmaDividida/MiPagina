$(document).ready(function() {
    $("#toogle").click(function() {
        $("#nav").toggle("linear");
        $(this).toggleClass('rotate');
        $(this).toggleClass('rotate-reset');

    });
});

$(window).resize(function() {

    if ($('body').width() <= 980) {
        $("#nav").hide();
    } else {
        $("#nav").show();
    }

});