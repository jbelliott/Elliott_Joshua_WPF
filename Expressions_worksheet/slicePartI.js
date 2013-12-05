//Joshua Elliott
//December 4, 2013
//Expression Worksheet: A Slice of Pie, Part I


var partyGoers = 13;  //The number of people attending the party
var slicesPerPie = 8;  //The number of slices per pizza
var totalPizzas = 7;   //The total number of pizzas brought to the party

var perPerson = (totalPizzas * slicesPerPie)/partyGoers;  //Calculate total slices, then divide by number of people

console.log("Each person at the party ate " + perPerson + " slices of pizza."); //print results to console
alert("Each person at the party ate " + perPerson + " slices of pizza.");   //print results to alert