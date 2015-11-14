$(document).ready(function(){
    
    
    
	$('#scott').click (function() {
		$('#bio').slideToggle();
	});
	
    function hideAll() {
        $('#player1').hide();
        $('#player2').hide();
        $('#player3').hide();
        $('#player4').hide();
    }
    
    
    hideAll();
    
   
    $('.album').click (function() {
       
        hideAll();
                
        
        
        switch ( $(this).attr("id") ) {
            case "owlPharaoh" :
                $('#player1').show();
                break;
            case "daysBeforeRodeo" :
                $('#player2').show();
                break;
            case "rodeo" :
                $('#player3').show();
                break;
            case "rodeoDeluxe" :
                $('#player4').show();
                break;
        }
    });  

    
});
