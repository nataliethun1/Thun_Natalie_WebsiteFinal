$(document).ready(function(){
  $("#mobile-button").click(function(){
    $("#mobile-nav").fadeIn("slow");
    });
    $("#close-menu").click(function(){
        $("#mobile-nav").fadeOut("slow"); 
    });

    $("#menuimg").mouseenter(function(){
        $(this).css("transform", "scale(1.05)");
        $(this).css("transition", "200ms")
        
    });
    $("#menuimg").mouseleave(function(){
        $(this).css("transform", "scale(1)");
        $(this).css("transition", "200ms")
        
    });
    $("#menuimg2").mouseenter(function(){
        $(this).css("transform", "scale(1.05)");
        $(this).css("transition", "200ms")
        
    });
    $("#menuimg2").mouseleave(function(){
        $(this).css("transform", "scale(1)");
        $(this).css("transition", "200ms")
        
    });
    $("#menuimg3").mouseenter(function(){
        $(this).css("transform", "scale(1.05)");
        $(this).css("transition", "200ms")
        
    });
    $("#menuimg3").mouseleave(function(){
        $(this).css("transform", "scale(1)");
        $(this).css("transition", "200ms")
        
    });
});