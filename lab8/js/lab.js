/*
 *Summary: .js script that uses functions and operators to give back numbers.
 *Description: Arrays and console logs call to written functions that return the given number into its square or itself divided by 3.
 *@link: https://ryanpalmberg.github.io/art101/
 *@file: This file creates console results based on operative functions and array input.
 *@Author: Ryan Palmberg <rpalmber@ucsc.edu>
 *@since  10.27.21
*/

function squared(x) {
  // Gives the square of any given number
  var returned = x * x;
  return returned;
}
// Testing
console.log("What is 4 squared? It is ", squared(4));
console.log("What is 5 squared? It is ", squared(5));

// Making an array for testing
let numbas = [3, 6, 9, 12, 15, 21, 300];
console.log("My Array: ", numbas);

// Giving the square of every number in the array
// Should give [9, 36, 81, 144, 225, 441, 90,000]
var result = numbas.map(squared);
console.log("The square of every number in the array: ", result);

var result2 = numbas.map(function(x){
  // Divides any given number by 3
  var returned = x/3;
  return returned;
})

// Should give [1, 2, 3, 4, 5, 7, 100]
console.log("Each number in the array divided by 3: ", result2);

// Unsuccessful attempt to show on main page:
// var outputEl = document.getElementById("output");
// outputEl.innerHTML = ("The square of every number in the array: ", result);
// var outputE2 = document.getElementById("output2");
// outputE2.innerHTML = ("Each number in the array divided by 3: ", result2);
