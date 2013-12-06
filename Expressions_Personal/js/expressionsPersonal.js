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
hoursArray[0] = prompt("How many 4 hour shifts do you have this week?"); //Establish short shifts
hoursArray[1] = prompt("How many 8 hour shifts do you have this week?"); //Establish mid shifts
hoursArray[2] = prompt("How many 12 hour shifts do you have this week?"); //Establish long shifts

//calculate the data here
var totalCans = (hoursArray[0] * cansPerShift[0]) + (hoursArray[1] * cansPerShift[1]) + (hoursArray[2] * cansPerShift[2]); //Calculate how many cans of soda will be needed.

//print to console
console.log("You will need " + totalCans + " cans of soda this week if you are working " + hoursArray[0] + " four hour shift\(s\), " + hoursArray[1] + " eight hour shift\(s\), and " + hoursArray[2] + " twelve hour shift\(s\).");

//print to alert for testing
alert("You will need " + totalCans + " cans of soda this week if you are working " + hoursArray[0] + " four hour shift\(s\), " + hoursArray[1] + " eight hour shift\(s\), and " + hoursArray[2] + " twelve hour shift\(s\).");