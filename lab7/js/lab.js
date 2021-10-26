/*
 *Summary: .js script that sorts out the letters given to it.
 *Description: Creates a string of jumbled letters based on user input.
 *@link: https://ryanpalmberg.github.io/art101/
 *@file: This file creates an array from input
 *@Author: Ryan Palmberg <rpalmber@ucsc.edu>
 *@since  10.25.21
*/

function windows(x) {
  return window.prompt(x);
}

function scrambleName() {
  var userName = windows("Hi! Please type your name here:");
  console.log("your dumb name:", userName);

  var lowerCase = userName.toLowerCase('');
  console.log("lowerCase =", lowerCase);

  var newArray = userName.split('');
  console.log("array thingy:", newArray);

  var newArraySort = newArray.sort();
  console.log("newArraySort =", newArraySort);

  var nameSorted = newArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}

document.writeln("Hey look! I fixed your name: ", scrambleName(), "</br>");
