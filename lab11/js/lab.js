/*
 *Summary: .js script that Lets the html buttons toggle between css styles.
 *Description: Takes css styles as arguments and switches between them using id's and classes.
 *@link: https://ryanpalmberg.github.io/art101/
 *@file: ordinary .js file.
 *@Author: Ryan Palmberg <rpalmber@ucsc.edu>
 *@since  11.8.21
*/

// The first button function
$("button.button1").click(function(){
  //Switches off the current class being used to style the targeted text.
  $("#challengetarget").toggleClass("smol")
  //Turns on the new stylization at the same time the first is turned off.
  $("#challengetarget").toggleClass("big");
});

//Repeat
$("button.button2").click(function(){
  $("#challengetarget2").toggleClass("boring")
  $("#challengetarget2").toggleClass("fancy");
});

//Repeat
$("button.button3").click(function(){
  $("#challengetarget3").toggleClass("eh")
  $("#challengetarget3").toggleClass("verysmol");
});

//The use of toggle for both styles allows for it to be switched back even if
//the styles share similar properties that would ordinarily cancel each other out.
