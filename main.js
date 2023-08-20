$(document).ready(function(){
    $("#btn-menu").click(function(){
        $("#slide-box").slideDown("slow");
    });

    $("#btn-cancel").click(function(){
        $("#slide-box").slideUp();
    });
});