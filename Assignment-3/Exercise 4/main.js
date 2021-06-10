$(document).ready(function() {

   $('.circles').click(function(){
    this.style.backgroundColor = this.style.backgroundColor == 'green' ? '#abcdef' : 'green';
    });

    $('.squares').click(function () {
        $(this).css("width", $(this).width() * 0.707107);
        $(this).css("height", $(this).height() * 0.707107);
    });

    $('.rectangles').click(function () {
        $(this).css("margin-top", $(this).outerHeight(true) + 10);
    });
});

