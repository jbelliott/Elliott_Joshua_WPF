//Joshua Elliott
//5 December 2013
//Expressions: Personal

//This script will help me determine how many cases of soda I will need to buy for my week

//Cans of Soda per type of shift

var shortDay;
var midDay;
var longDay;

//collect the data in these variables
var hoursArray[0] = prompt("One can of soda is taken for a 4 hour shift. \nHow many 4 hour shifts do you have this week?"); //Establish short shifts
var hoursArray[1] = prompt("Two cans of soda are taken for an 8 hour shift. \nHow many 8 hour shifts do you have this week?"); //Establish mid shifts
var hoursArray[2] = prompt("Four cans of soda are taken for a 12 hour day. \nHow many 12 hour shifts do you have this week?"); //Establish long shifts

//calculate the data here
var totalCans = (1 * shortDay) + (2 * midDay) + (4 * longDay); //Calculate how many cans of soda will be needed.

//print to console
console.log("You will need " + totalCans + " this week if you are working " + shortDay + " 4-hr shift\(s\), " + midDay + " 8-hr shift\(s\), and " + longDay + " 12-hr shift\(s\).");

//print to alert for testing
alert("You will need " + totalCans + " this week if you are working " + shortDay + " 4-hr shift\(s\), " + midDay + " 8-hr shift\(s\), and " + longDay + " 12-hr shift\(s\).");