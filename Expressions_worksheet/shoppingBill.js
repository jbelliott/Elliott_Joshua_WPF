//Joshua Elliott
//December 4, 2013
//Expressions Worksheet: Average Shopping Bill


var moneySpent = new Array(153, 127, 143, 140, 159);  //define array

var totalDollars = moneySpent[0] + moneySpent[1] + moneySpent[2] + moneySpent[3] + moneySpent[4];  //value of array
var avgDollars = totalDollars / 5;  //average of array's values

console.log("You have spent a total of $" + totalDollars + " on groceries over 5 weeks. That is an average of $" + avgDollars + " per week");
//print results to console
alert("You have spent a total of $" + totalDollars + " on groceries over 5 weeks. That is an average of $" + avgDollars + " per week.");
//print results to alert