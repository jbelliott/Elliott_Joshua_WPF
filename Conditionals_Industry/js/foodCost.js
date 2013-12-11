/*Joshua Elliott
10 December 2013
Conditionals: Industry
 */

//This script will help determine if your restaurant is on target with your food costs.  On target is within 25% of net sales

//Collect variables for calculation

var netSales = prompt("Please enter your net sales for the week.");
if (netSales == ""){
    netSales = prompt("You must enter your net sales to continue!", 10000);
    if (netSales == ""){
        alert("We are declaring net sales to be $10,000.");
        netSales = 10000;
    }
}
var inventoryActual = prompt("Please enter the value of your inventory used this week.");
if (inventoryActual == ""){
    inventoryActual = prompt("You must enter your actual closing inventory dollars to continue!", 2500);
    if (inventoryActual == ""){
        alert("We will assume that you used $2500 this week.");
        inventoryActual = 2500;
    }
}
var cosPercent = 25;


//Calculate Cost of Sales to compare if within allowable variance
var salesCost = (inventoryActual / netSales);
var cosTarget = netSales * (cosPercent/100);

//Conditionals to determine if CoS is within variance
if (salesCost * netSales < cosTarget){
    alert("Your food cost is on target. Good job!  You made food by $" + Math.abs(cosTarget - salesCost * netSales));
}else{
    alert("Your food cost is out by $" + Math.abs(cosTarget - salesCost * netSales));
}