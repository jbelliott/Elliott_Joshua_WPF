/*Joshua Elliott
10 December 2013
Conditionals: Industry
 */

//This script will help determine if your restaurant is on target with your food costs.  On target is within 1% of net sales EITHER positive or negative

//Collect variables:  Net Sales, starting inventory dollars, closing inventory dollars, cost of sales target %
var netSales = prompt("Please enter your net sales for the week.");
if (netSales == ""){
    netSales = prompt("You must enter your net sales to continue!");
    if (netSales == ""){
        alert("For the sake of argument, we are declaring net sales to be $10,000.");
        netSales = 10000;
    }
}
var inventoryOpen = prompt("Please enter your starting inventory dollar value.");
if (inventoryOpen == ""){
    inventoryOpen = prompt("You must enter your starting inventory dollars to continue!");
    if (inventoryOpen == ""){
        alert("We will assume that you have starting inventory of $1000.");
        inventoryOpen = 1000;
    }
}
var inventoryClose = prompt("Please enter your ending inventory dollar value.");
if (inventoryClose == "" || inventoryClose > inventoryOpen){
    inventoryClose = prompt("Invalid entry. Closing inventory must be equal to or less than opening inventory. \nPlease enter your ending inventory dollar value.");
    if (inventoryClose == ""){
        alert("Since no value was entered, we will assume $5000.");
        inventoryClose = 5000;
    }else if (inventoryClose > inventoryOpen){
        alert("Since you entered a value higher than the opening inventory, the value will be set to match opening inventory.");
        inventoryClose = inventoryOpen;
    }
}
var cosPercent = 1;


//Calculate Cost of Sales to compare if within allowable variance
var salesCost = ;
var cosTarget = netsales * (cosPercent/100);

//Conditionals to determine if CoS is within variance
if (salesCost/netSales < cosTarget){
    alert("Your food cost is on target. Good job!");
}else{
    alert("Your food cost is out by " + Math.abs(cosTarget - salesCost));
}