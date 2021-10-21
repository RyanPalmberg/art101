/*
 *Summary: .js script that gives an array of vehicles and an object that details a single car
 *Description: Creates an array of modes of transport, and gives an object with the car details used in the previous lab.
 *@link: https://ryanpalmberg.github.io/art101/
 *@file: This file creates an array and object
 *@Author: Ryan Palmberg <rpalmber@ucsc.edu>
 *@since  10.20.21
*/

//Kinds of Transportation
myTransport = ["Bus", " Car", " My Feet", " Bicycle"]

//A Car I like
myMainRide = {
  make : "Toyota",
  model : "4Runner",
  color : "Millenium Silver",
  year: 2000,
  age : function() {
    return 2021 - year;
  }
}

document.writeln("Using " + myTransport + " to get around?<br>");

document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
