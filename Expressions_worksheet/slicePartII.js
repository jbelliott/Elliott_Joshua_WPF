//Joshua Elliott
//December 4, 2013
//Expressions Worksheet: Slice of Pie, Part II


var partyGoers = 13;  //The number of people attending the party
var slicesPerPie = 8;  //The number of slices per pizza
var totalPizzas = 7;   //The total number of pizzas brought to the party

var sparkyGets = (totalPizzas * slicesPerPie)%partyGoers;  //Use Modulo to determine Sparky's take

console.log("Sparky is going to get " + sparkyGets + " slices of pizza."); //print results to console
alert("Sparky is going to get " + sparkyGets + " slices of pizza.");   //print results to alert