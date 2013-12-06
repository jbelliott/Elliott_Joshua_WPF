//Joshua Elliott
//5 December 2013
//Expressions: Personal

//This script will help me determine how many cases of soda I will need to buy for my week

alert("This script will determine how many cans of soda you need this week based on the number and length of shifts worked.");

//Cans of Soda per type of shift

var cansPerShift = new Array();
cansPerShift[0] = prompt("How many cans of soda would you like per 4 hour shift?"); //Set number of cans per 4 hr day
cansPerShift[1] = prompt("How many cans of soda would you like per 8 hour shift?"); //Set number of cans per 8 hr day
cansPerShift[2] = prompt("How many cans of soda would you like per 12 hour shift?"); //Set number of cans per 12 hr day

//collect the data in these variables
var hoursArray = new Array(); //define array
hoursArray[0] = prompt("One can of soda is taken for a 4 hour shift. \nHow many 4 hour shifts do you have this week?"); //Establish short shifts
hoursArray[1] = prompt("Two cans of soda are taken for an 8 hour shift. \nHow many 8 hour shifts do you have this week?"); //Establish mid shifts
hoursArray[2] = prompt("Four cans of soda are taken for a 12 hour day. \nHow many 12 hour shifts do you have this week?"); //Establish long shifts

//test array
alert(hoursArray[0] + hoursArray[1] + hoursArray[2]);

//calculate the data here
var totalCans = (hoursArray[0] * shortDay) + (hoursArray[1] * midDay) + (hoursArray[2] * longDay); //Calculate how many cans of soda will be needed.

//print to console
console.log("You will need " + totalCans + " of soda this week if you are working " + shortDay + " 4-hr shift\(s\), " + midDay + " 8-hr shift\(s\), and " + longDay + " 12-hr shift\(s\).");

//print to alert for testing
alert("You will need " + totalCans + " of soda this week if you are working " + shortDay + " 4-hr shift\(s\), " + midDay + " 8-hr shift\(s\), and " + longDay + " 12-hr shift\(s\).");