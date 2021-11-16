/*
 *Summary: .js script that returns Hogwarts houses.
 *Description: Takes a string input from webpage and reverse divides it into 0-3, then prescribes a house based on that number.
 *@link: https://ryanpalmberg.github.io/art101/
 *@file: ordinary .js file.
 *@Author: Ryan Palmberg <rpalmber@ucsc.edu>
 *@since  11.15.21
*/
function sortingHat(str) {
  //fetches length of given string
  let letters = str.length;
  let mod = letters % 4;
  if (mod == 0) {
    return 'Gryffindor';
  }
  if (mod == 1) {
    return 'Ravenclaw';
  }
  if (mod == 2) {
    return 'Slytherin';
  }
  if (mod == 3) {
    return 'Hufflepuff';
  }
}
//Creates link with the html button
let buttony = $("button.buttonsort");

//Gives text to html object and leaves it blank
let outputEl = $("#output").html('');
outputEl.append('');

buttony.click(function(){
  let firstyear = $("#input").val();
  let house = sortingHat(firstyear);
  let outputEl = $("#output").html('The Sorting Hat has sorted you into ' + house + "!");
  console.log(outputEl);
});
