$( document ).ready(function() {
  
  $( function() {
      $( "#accordion" ).accordion();
    } );

  $( function() {
    $( "#tabs" ).tabs();
  } );

  $( function() {
    $( "#menu" ).menu();
  } );

  $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );

  $( function() {
    $( "#selectable" ).selectable();
  } );

  $(window).load(function() {
    $('#slideshow').desoSlide({
      thumbs: $('#slideshow_thumbs li > a'),
      thumbEvent: 'mouseover',
      first: 0
    });
  });

});


