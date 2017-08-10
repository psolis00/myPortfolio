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

function openAboutSub(){
    document.getElementById("aSub").style.height = "116px";
    document.getElementById("projectsButton").style.marginTop = "116px";
}

function openProjectsSub(){
    document.getElementById("pSub").style.height = "75px";
    document.getElementById("contactButton").style.marginTop = "75px";
}

function closeAboutSub(){
    document.getElementById("aSub").style.height = "0px";
    document.getElementById("projectsButton").style.marginTop = "0px";
}

function closeProjectsSub(){
    document.getElementById("pSub").style.height = "0px";
    document.getElementById("contactButton").style.marginTop = "0px";
}

$(document).ready(function(){
    
    $("#homeButton").click(function(){
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 1000);
        closeAboutSub();
        closeProjectsSub();
    });

    $("#aboutButton").click(function(){
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
        closeProjectsSub();
    });

    $("#bio").click(function(){
        $('html, body').animate({
            scrollTop: $("#miag").offset().top
        }, 1000);
    });

    $("#skills").click(function(){
        $('html, body').animate({
            scrollTop: $("#ss").offset().top
        }, 1000);
    });

    $("#edu").click(function(){
        $('html, body').animate({
            scrollTop: $("#education").offset().top
        }, 1000);
    });

    $("#projectsButton").click(function(){
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 1000);
        closeAboutSub();
    });

    $("#p1").click(function(){
        $('html, body').animate({
            scrollTop: $("#etes").offset().top
        }, 1000);
    });

    $("#p2").click(function(){
        $('html, body').animate({
            scrollTop: $("#brca1").offset().top
        }, 1000);
    });

    $("#contactButton").click(function(){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
        closeAboutSub();
        closeProjectsSub();
    });

    $("#b1").toggle(
        function(){ $("#hidden1").css({"height": "700px"}); $("#b1").text("^");},
        function(){ $("#hidden1").css({"height": "0px"}); $("#b1").text("v");}
    );

    $("#b2").toggle(
        function(){ $("#hidden2").css({"height": "550px"}); $("#b2").text("^");},
        function(){ $("#hidden2").css({"height": "0px"}); $("#b2").text("v");}
    );
});
    