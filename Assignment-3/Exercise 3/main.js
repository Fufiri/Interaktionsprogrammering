$(document).ready(function() {
    $('#myTextBox').val('');
    $('#myTextBox').keyup(function() {
        var keyed = $(this).val().replace(/\n/g, '<br/>');
        $(".textResult .active").html(keyed);
    });

    $("#style-btn").click(function() {
        
        var selectedVal = $('option:selected').text();
    
        if (selectedVal == "Bold") {
            $(".active").css({
                "font-weight": "bold",
                "font-style": "normal"
            })
        } else if (selectedVal == "Italic") {
            $(".active").css({
                "font-weight": "normal", 
                "font-style" : "italic"
               })
            
        } else {
            $(".active").css({
                "font-weight": "normal", 
                "font-style" : "normal"
               })
            
        }

    });

    $("#p-btn").click(function() {

        $("p").removeClass("active");
        $('#myTextBox').val('');

        var newPara = {
            class: "active"
          };
          var newP = $("<p>", newPara);

        $(".textResult").append(newP);

        
    })

});
