//Joshua Elliott
//5 December 2013
//Expressions:  Industry

//This script is designed for my current industry--Restaurant Management

//The purpose of this script is to calculate how many crew labor hours are available for a schedule week

alert("The purpose of this script is to calculate how many payroll hours are available for a schedule week, rounded to the nearest whole hour.");

//This section will collect the user's data

var forecast = prompt("What is the sales forecast for the week \(in dollars\)?"); //Total expected sales for the week
var laborPer = prompt("What is your target crew labor percentage?"); //Pennies per dollar allowed to be spent on crew labor
percentage = laborPer / 100;   //convert to a decimal for percentage calculations
var avgHourly = prompt("What is your store's average hourly wage?"); //Average of what crew members earn per hour

//This section will calculate the results

var availHours = forecast * percentage / avgHourly; //calculate the available number of hours
availHours = Math.round(availHours);  //round the value to the nearest whole number to prevent partial hours

//This section will print the results

//print to console
console.log("With a forecast of " + forecast + ", a crew percentage of " + laborPer + "%, and an average hourly rate of $" + avgHourly + ", you will have " + availHours + " hours to spend this week.");