//Joshua Elliott
//5 December 2013
//Expressions: Personal

//This script will help me determine how many cases of soda I will need to buy for my week

//collect the data in these variables
var shortDay = prompt("One can of soda is taken for a 4 hour shift. \nHow many 4 hour shifts do you have this week?"); //Establish short shifts
var midDay = prompt("Two cans of soda are taken for an 8 hour shift. \nHow many 8 hour shifts do you have this week?"); //Establish mid shifts
var longDay = prompt("Four cans of soda are taken for a 12 hour day. \nHow many 12 hour shifts do you have this week?"); //Establish long shifts

//calculate the data here
var totalCans = (1 * shortDay) + (2 * midDay) + (4 * longDay);

//print to console
console.log(totalCans);

//print to alert for testing
alert(totalCans);