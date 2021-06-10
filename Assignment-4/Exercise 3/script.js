let usedSrc = [];

$( document ).ready(function() {
  
$( function() {
  $("button").click(function() { 
    $(".droppable img").removeAttr("src");  
    $(".droppable img").removeAttr("href");
    $(".droppable a").attr("href", '');
    $(".droppable").addClass("inactiveLink"); 
    usedSrc = [];  
    }); 

    $("#myTable").tablesorter();

    $(".draggable").draggable({
      helper: "clone",
      revert: "invalid"
    });
    
    $(".droppable").droppable({
      
      drop: function(event, ui) {
        
        $(this)
        .find( 'img', '.fancyboxLink' )

        let index = usedSrc.indexOf($('img',this).attr("src"));
        if (index != -1) {
         usedSrc.splice(index, 1);''
        }
        
        if (usedSrc.indexOf(ui.draggable.attr("src")) === -1) {
        $('img', this).attr("src", ui.draggable.attr("src"));
        $(".fancyboxLink", this).attr("href", ui.draggable.attr("src"));
        usedSrc.push(ui.draggable.attr("src"));
        $(this).removeClass("inactiveLink");
        }

        }
    });
      
    
  });
 
});