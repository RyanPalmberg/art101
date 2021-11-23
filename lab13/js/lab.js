/*
 *Summary: .js script that checks the divisibility of numbers.
 *Description: Loops through the numbers 1 through 200, and checks if each is divisble by 3, 5, or 7. It then prescribes a string to each one. They can be combined if more than one check is true.
 *@link: https://ryanpalmberg.github.io/art101/
 *@file: ordinary .js file.
 *@Author: Ryan Palmberg <rpalmber@ucsc.edu>
 *@since  11.22.21
*/

var outputEl = document.getElementById("output");

function FizzBuzz() {
  //Makes sure the first string isn't indented
  let x = '<p>'+'</p>';

  //Loops through each number from 1 to 200
  for (let i=1; i<201; i++) {

    //Creates empty string to start
    let y = '';

    //Checks for divisbility
    if (i%3 == 0) {
      y = y + 'Fizz';
    }
    if (i%5 == 0) {
      y = y + 'Buzz';
    }
    if (i%7 == 0) {
      y = y + 'Boom';
    }

    //Checks if anything was added
    if (y != '') {
      y = y + '! ';
      x = '<p>'+x + i +': '+ y+'</p>';
    }

  }
  console.log('x', x)
  //Updates the HTMl text to include the output.
  outputEl.innerHTML = x;
}

//Calls the function
FizzBuzz()
