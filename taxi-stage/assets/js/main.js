$(document).ready(function() {		
		
    $(".fa-bars").click(function(e){
        e.preventDefault();
        $(".fa-bars").hide();
        $("#slide").slideDown(1000);
        $(".fa-window-close").show();
    });

    $(".fa-window-close").click(function(e){
        e.preventDefault();
        $(".fa-window-close").hide();
        $("#slide").slideUp(1000);
        $(".fa-bars").show();
    });

    
});


// ------------------------------------------
// $('.parallax').parallax();
// ------------------------------------------
// $(document).ready(function(){
//     $('.parallax').parallax();
//   });