//Joshua Elliott
//5 December 2013
//Expressions:  Industry

//The purpose of this script is to calculate how many crew labor hours are available for a schedule week
alert("The purpose of this script is to calculate how many payroll hours are available for a schedule week, rounded to the nearest whole hour.");

//This section will collect the user's data
var forecast = prompt("What is the sales forecast for the week \(in dollars\)?");
var laborPer = prompt("What is your target crew labor percentage?");
percentage = laborPer / 100;   //convert to a decimal for percentage calculations

var avgHourly = prompt("What is your store's average hourly wage? \(type 0 for help calculating\)",0);


//possibly offer a calculation for average hourly rate??
if (avgHourly = 0);
{
  var employees = prompt("How many employees do you have?");
    var totalHourly = prompt("Add all of the hourly rates together and type the total.");
    totalHourly /= employees;
    alert("The average hourly rate is $" + totalHourly);
    avgHourly = totalHourly;
}

//This section will calculate the results
var availHours = forecast * percentage / avgHourly;
availHours = Math.round(availHours);


//This section will print the results

//print to console
console.log("With a forecast of " + forecast + ", a crew percentage of " + laborPer + "%, and an average hourly rate of $" + avgHourly + ", you will have " + availHours + " to spend this week.");

//print to alert
alert("With a forecast of " + forecast + ", a crew percentage of " + laborPer + "%, and an average hourly rate of $" + avgHourly + ", you will have " + availHours + " to spend this week.");