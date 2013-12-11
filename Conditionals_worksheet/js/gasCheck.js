/* Joshua Elliott
10 December, 2013
Conditionals Worksheet: Group 1
 */

//Variables collected to make script more reusable

var fuelEfficiency = prompt("How many miles do you get per gallon of gas?");   //User prompt to establish efficiency
var fuelLevel = prompt("How full is the tank now (percentage)?");   //Percentage of tank full
var fuelCapacity = prompt("How many gallons of fuel can your tank hold?");   //Capacity of tank

//Calculate if gas should be gotten now

var currentLevel = fuelLevel/100 * fuelCapacity;  //Convert to how many gallons are in fuel tank
if (currentLevel * fuelEfficiency >= 200){   //Test if car will travel 200 miles before running out of gas
    console.log("Yes, you can make it without stopping for gas!");  //Response if test is true
}else{
    console.log("You only have " + currentLevel + " gallons of gas in your tank, better get gas now while you can!");
} //Response if test is false