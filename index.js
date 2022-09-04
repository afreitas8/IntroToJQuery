
//$("h1").before("<button>New</button>");


// $("h1").on("mouseover", function(){
//     $("h1").css("color", "purple");
// });


// $("document").keypress(function(event) {
//     $("h1").text(event.key);
// })


// $("h1").click(function(){
//     $("h1").css("color", "purple");
// });

$("button").click(function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

//$("a").attr("href","https://www.yahoo.com");
//alert("hello world");