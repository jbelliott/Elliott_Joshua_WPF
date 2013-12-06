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
var avgHourly = prompt("What is your store's average hourly wage? \(type 0 for help calculating\)",0); //Capture if know or redirect for help


//possibly offer a calculation for average hourly rate??

if (avgHourly = 0);
{
  var employees = prompt("How many employees do you have?");  //Total number of crew members
    var totalHourly = prompt("Add all of the hourly rates together and type the total.");  //Cumbersome, but prevents having to enter each rate manually
    totalHourly /= employees; //calculates the average hourly rate
    alert("The average hourly rate is $" + totalHourly);  //return the value for the user
    avgHourly = totalHourly;  //assign value to avgHourly variable
}

//This section will calculate the results

var availHours = forecast * percentage / avgHourly; //calculate the available number of hours
availHours = Math.round(availHours);  //round the value to the nearest whole number to prevent partial hours

//This section will print the results

//print to console
console.log("With a forecast of " + forecast + ", a crew percentage of " + laborPer + "%, and an average hourly rate of $" + avgHourly + ", you will have " + availHours + " to spend this week.");
//print to alert
alert("With a forecast of " + forecast + ", a crew percentage of " + laborPer + "%, and an average hourly rate of $" + avgHourly + ", you will have " + availHours + " to spend this week.");