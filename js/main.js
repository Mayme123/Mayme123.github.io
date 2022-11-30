$(document).ready(function(){
    
    /*----- Sliding animations for projects---------------------------------------------*/
    $(".preview-container").click(function(event){
        event.preventDefault();
        $(".preview-container").removeClass("slideOutLeft slideOutRight");
        $(".project-left .preview-container").addClass("slideInLeft");
        $(".project-right .preview-container").addClass("slideInRight");
    });
    
    $(".project-left .preview-container").click(function(event){
        event.preventDefault();
        $(this).removeClass("slideInLeft");
        $(this).addClass("animated slideOutLeft");
    });
    
    $(".project-left .close-btn").click(function(event){
        event.preventDefault();
        $(this).parent().siblings().removeClass("animated slideOutLeft");
        $(this).parent().siblings().addClass("animated slideInLeft");
    });
    
    $(".project-right .preview-container").click(function(event){
        event.preventDefault();
        $(this).removeClass("slideInRight");
        $(this).addClass("animated slideOutRight");
    });
    
    $(".project-right .close-btn").click(function(event){
        event.preventDefault();
        $(this).parent().siblings().removeClass("animated slideOutRight");
        $(this).parent().siblings().addClass("animated slideInRight");
    });
    
    /*----- Smooth scroll on all links---------------------------------------------*/
    
    $("a").on('click', function(event){
        //this makes sure this.hash has a value before overrideing 
        //default behavior
        if (this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;
            
            //use jquery's animate method to smooth scroll
            $('html, body').animate({
               scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }    
    });
});