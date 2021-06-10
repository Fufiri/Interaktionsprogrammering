$(document).ready(function() {
  $("#boxes").change(function() {
     $(".box").remove();

       var selectedVal = $('option:selected',this).attr('value');

      for (i = 1; i <= selectedVal; i++) {
        
        var newElement = {
          id: "box" + i,
          class: "box"
        };
        var $orangeBox = $("<div>", newElement);

        $("#box-container").append($orangeBox);
      }
    
    })
  });