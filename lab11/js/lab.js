/*
 *Summary: .js script that scrambles text input by user.
 *Description: Takes both the button for scrambling and the input method and returns a string on the page itself.
 *@link: https://ryanpalmberg.github.io/art101/
 *@file: ordinary .js file.
 *@Author: Ryan Palmberg <rpalmber@ucsc.edu>
 *@since  11.3.21
*/

// var button1 = $("big");
// var button2 = $("Button2");
// var button3 = $("Button3");


$("button.button1").click(function(){
  $("#challengetarget").toggleClass("smol")
  $("#challengetarget").toggleClass("big");
});

$("button.button2").click(function(){
  $("#challengetarget2").toggleClass("boring")
  $("#challengetarget2").toggleClass("fancy");
});

$("button.button3").click(function(){
  $("#challengetarget3").toggleClass("eh")
  $("#challengetarget3").toggleClass("verysmol");
});




// $("#feed").click(function(){
//   $("button1").parent().toggleClass("special");
// }))
