$(document).ready(function(){
    $("[class=page]").click(function()
    {
        var cn = $(this).get(0).id;
        if(cn != $("#active").get(0).className)
        {
            $("#active").css("opacity", "0");
            $("." + cn).css("opacity", "1");

            $("#active").attr("id", "inactive");    
            $("." + cn).attr("id", "active");
        }
    });
});