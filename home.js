function openNav(event){
    var x = event.clientX;
    if(x <= 20)
    {
        document.getElementById("mySidebar").style.width = "250px";
    }
}

function closeNav(event){  
    document.getElementById("mySidebar").style.width = "0px";
}

$(document).ready(function(){

    $("#aboutButton").click(function(){
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });

    $("#homeButton").click(function(){
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 1000);
    });

    $("#projectsButton").click(function(){
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 1000);
    });

    $("#contactButton").click(function(){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
});