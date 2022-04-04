$(document).ready(function(){
    $(".links a").click(function(){
        $(".links a").removeClass("active");
        $(this).toggleClass("active");
    })
})