$(document).ready(function(){
    $(".iconopen").click(function(){
        $(".responsive-nav").slideDown(200);
        $("#icon-open").css("display", "none");
        $("#icon-close").show();
    });
    $(".iconclose").click(function(){
        $(".responsive-nav").slideUp(200);
        $("#icon-close").css("display","none");
        $("#icon-open").show();
    })

   // changing between resize
    function checkWidth(){
        var $window=$(window);
        var $width=$window.width();
        if($width>=979){
            $(".responsive-nav").slideUp(200);
            $("#icon-open").show();
            $("#icon-close").hide();
        } 
    }
    checkWidth();
    $(window).resize(checkWidth);
});