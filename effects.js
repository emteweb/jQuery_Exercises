// "console.log" doesn't wait for "fadeOut" to be completed

$("button").on("click", function(){
    $("div").fadeOut(1400);
    console.log("Fade completed!");
});
// "console.log" is shown after "fadeOut" completes

$("button").on("click", function(){
    $("div").fadeOut(1400, function(){
        console.log("Fade completed!");
        $("div").remove();
    });
});

// fadeIn();
// fadeToggle();
// slideUp();
// slideDown(1000);
// slideToggle();
