$(".femalebutton").mouseenter(function() {
    // $(".femalebutton ul").css("left","auto");
    $(".femalebutton ul").css("position","absolute");
    $(".femalebutton ul").show();
});

$(".femalebutton").mouseleave(function() {
    $(".femalebutton ul").hide();
})