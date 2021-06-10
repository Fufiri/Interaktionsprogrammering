$(document).ready(function() {
    /* only triggers once - in firefox?*/
    $('.circle').hover(function () {
        $(this).hide();
    }, function() {
        $(this).show();
    });
});