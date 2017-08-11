$(document).ready(function(){
    $("[class=page]").click(function()
    {
        var cn = $(this).get(0).id;

        $("#active").attr("id", "inactive");
        $(".background-active").addClass("background");
        $(".background-active").removeClass("background-active");
        $("." + cn).attr("id", "active");
        $("." + cn + " img.background").addClass("background-active");
        $("." + cn + " img.background").removeClass("background");
    });
});