var value;
$(document).ready(function() {

    $('.button').click(function(){
        $(this).siblings('.button').removeClass('active');
        $(this).addClass('active');

    
        
        value =  $(this).attr("value");
        
        $('#square' + value).css( "width", "120px" );
        $('#square' + value).css( "height", "120px" );

        $('#square' + value).siblings('.square').css( "width", "100px" );
        $('#square' + value).siblings('.square').css( "height", "100px" );
       
        $('#myRange').val($('#square' + value).css("opacity") * 100);
       
     });

     
     $('#myRange').on('input', function(){
        
        let opVal = $(this).val();
            
         $('#square' + value).css('opacity', opVal/100);
        
            
        
     });
 
 });
 