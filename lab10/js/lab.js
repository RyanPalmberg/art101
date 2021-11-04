/*
 *Summary: .js script that scrambles text input by user.
 *Description: Takes both the button for scrambling and the input method and returns a string on the page itself.
 *@link: https://ryanpalmberg.github.io/art101/
 *@file: ordinary .js file.
 *@Author: Ryan Palmberg <rpalmber@ucsc.edu>
 *@since  11.3.21
*/

//Implementing button
var button = document.getElementById("button");

//Implementing The return string after clicking button
var outputEl = document.getElementById("output");

var new1El = document.createElement("scrambled");
//Keeping the output blank at first
new1El.innerHTML = "";

button.addEventListener('click', function(){
  inputValue = document.getElementById("feed").value;
  //Scrambling the input by alphabetical order
  var newArray = inputValue.split('');
  var jumbled = newArray.sort();
  var finalArray = jumbled.join('');
  console.log('you input:', inputValue);

  //Updating the output
  new1El.innerHTML = finalArray;
});

document.body.appendChild(new1El);
