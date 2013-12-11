/* Joshua Elliott
10 December, 2013
Conditionals Worksheet: Group 1
 */

//Return "Yes, you can make it without stopping for gas! or You only have x gallons of gas in your tank, better get gas now while you can!
//This will calculate if you should get gas now or if you can make it 200 miles to the next station.

//Variables collected to make script more reusable

var fuelEfficiency = prompt("How many miles do you get per gallon of gas?");
var fuelLevel = prompt("How full is the tank now (percentage)?");
var fuelCapacity = prompt("How many gallons of fuel can your tank hold?");

//Calculate if gas should be gotten now

var currentLevel = fuelLevel/100 * fuelCapacity;
if (currentLevel * fuelEfficiency >= 200){
    console.log("Yes, you can make it without stopping for gas!");
}else{
    console.log("You only have " + currentLevel + " gallons of gas in your tank, better get gas now while you can!");
}