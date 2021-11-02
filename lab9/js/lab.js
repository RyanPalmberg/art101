/*
 *Summary: .js script that returns text to the HTML doc via tags.
 *Description: Elements asn Ids are written out individually and pcackaged together..
 *@link: https://ryanpalmberg.github.io/art101/
 *@file: ordinary .js file.
 *@Author: Ryan Palmberg <rpalmber@ucsc.edu>
 *@since  11.1.21
*/

var outputEl = document.getElementById("output");

//Creating an elements for outputEl
var new1El = document.createElement("p");
//tagging them and giving them content
new1El.id = "dog";
new1El.innerHTML = "What is the best animal?";

//repeat
var new2El = document.createElement("output");
new2El.id = "next";
new2El.innerHTML = "Wrong answer! It's a wallaby.";

//adding variables to outputEl
document.body.appendChild(new1El);
document.body.appendChild(new2El);
