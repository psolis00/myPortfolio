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
