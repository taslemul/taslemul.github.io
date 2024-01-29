AOS.init();
$(document).ready(function(){
    if(window.location.hash == '#particlesAreFun'){
        if($(window).width() >= 768){
            $("#navigate").toggle();
        }
        $("#container").toggle();
        $("#fineprint").toggle();
        $("#hamburger-menu").toggle();
    }
    $(".hamburger-button").on( "click", function() {
        $(".hamburger-button").animate({
            opacity: 'toggle'
        }, 400);
        $(".nav-links").animate({
            height: 'toggle'
        }, 400);
    });
    $(".nav-links").on("click", function(){
        $(".hamburger-button").animate({
            opacity: 'toggle'
        }, 400);
        $(".nav-links").animate({
            height: 'toggle'
        }, 400);
    });
});