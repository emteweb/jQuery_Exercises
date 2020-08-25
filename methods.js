// text(); html();

$("h1").text(); // return the content of an element (Vanilla JS => textContent )
$("h1").text("New text"); // changes the content of an element
$("ul").html(); // (VJS => innerHtml)

// attr(); to access specific attribute / set specific attribute


$('img').css("width");
"1931px"
$('img').css("width", "300px");
$("img").attr("src"); // returns the value of src
$("img").attr("src", "https://images-na.ssl-images-amazon.com/images/I/71%2B1tRw991L._AC_SX466_.jpg");

// with more elements
$("img:first-of-type").attr("src", "https://..."); // changing the first element from the list
$("img").last().attr("src", "https://..."); // // changing the last element from the list 


// val(); returns the value of the selected element
$("input").val();

// addClass(); removeClass(); toggleClass(); (VJS => classList.add)

$("h1").addClass("myClass");

// click(); (VJS => 1.Grab all items 2. Loop through and add addEventListener)

// prints when the iten with id 'submit' is clicked
$("#submit").click(function(){
    console.log("Item clicked!");
});

// alerts when ANY button is clicked
$('button').click(function(){
    alert("Someone clicked the button!")
});
// changes the background of clicked elements
$('button').click(function(){
    $(this).css("backround", "yellow")
});
//getting the content of an element
$('button').click(function(){
    var text = $(this).text();
    console.log("You clicked: " + text)
});

// keypress();

// listens for any keypress in any text input
/* $("input[type='text']").keypress(function(){
    alert("Text input field was clicked!")
}); */

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        alert("You hit ENTER!")
    }
});

// on();

$("h1").on("click", function(){
    $(this).css("color", "yellow")
});

$("h1").on("mouseenter", function(){
    $(this).css("color", "red")
});

$("h1").on("mouseleave", function(){
    $(this).css("color", "green")
});