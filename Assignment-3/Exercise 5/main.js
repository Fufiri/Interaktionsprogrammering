$(document).ready(function() {
    $('.dropdown').hover(function () {
      
        $(this).stop().animate({'height': '200px', 'top': "0px"}, {duration:2000});
    }, function() {
        
        $(this).stop().animate({'height': '50px', 'top': "0px"}, {duration: 500});
    });
});