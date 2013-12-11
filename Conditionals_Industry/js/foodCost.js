/*Joshua Elliott
10 December 2013
Conditionals: Industry
 */

//This script will help determine if your restaurant is on target with your food costs.  On target is within 1% of net sales EITHER positive or negative

//Collect variables:  Net Sales, starting inventory dollars, closing inventory dollars, cost of sales target %
var netSales;
var inventoryOpen;
var inventoryClose;
var cosPercent = 1;


//Calculate Cost of Sales to compare if within allowable variance
var salesCost = inventoryOpen - inventoryClose;
var cosTarget = netsales * (cosPercent/100);

//Conditionals to determine if CoS is within variance
if (salesCost/netSales < cosTarget){
    alert("Your food cost is on target. Good job!");
}else{
    alert("Your food cost is out by " + Math.abs(cosTarget - salesCost));
}