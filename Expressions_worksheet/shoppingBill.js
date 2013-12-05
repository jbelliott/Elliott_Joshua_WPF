//Joshua Elliott
//December 4, 2013
//Expressions Worksheet: Average Shopping Bill


var moneySpent;
moneySpent = new Array(153, 127, 143, 140, 159);

var totalDollars = moneySpent[0] + moneySpent[1] + moneySpent[2] + moneySpent[3] + moneySpent[4];
var avgDollars = totalDollars / 5;

console.log("You have spent a total of $" + totalDollars + " on groceries over 5 weeks. That is an average of $" + avgDollars + " per week");
alert("You have spent a total of $" + totalDollars + " on groceries over 5 weeks. That is an average of $" + avgDollars + " per week.");