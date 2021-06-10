$(document).ready(function() {
  $("#boxes").change(function() {
      $(".box").hide();
         
      var selectedVal = $('option:selected',this).attr('value');

      for (i = 0; i <= selectedVal; i++) {
        $("#box" + i).show(); 
      }
    
    })
  });