/*Joshua Elliott
10 December 2013
Conditionals: Industry
 */

//This script will help determine if your restaurant is on target with your food costs.  On target is within 25% of net sales

//Collect variables for calculation

var netSales = prompt("Please enter your net sales for the week."); //Net sales for the week
if (netSales == ""){   //Conditional testing user input
    netSales = prompt("You must enter your net sales to continue!", 10000);   //Second request for data
    if (netSales == ""){   //Conditional testing user input
        alert("We are declaring net sales to be $10,000.");   //Alert auto-assigning value
        netSales = 10000;   //Auto-assigned value
    }
}
var inventoryActual = prompt("Please enter the value of your inventory used this week.");   //Dollar values used in inventory
if (inventoryActual == ""){   //Conditional testing user input
    inventoryActual = prompt("You must enter your actual closing inventory dollars to continue!", 2500);  //Second request for data
    if (inventoryActual == ""){   //Conditional testing user input
        alert("We will assume that you used $2500 this week.");   //Alert auto-assigning value
        inventoryActual = 2500;   //Auto-assigned value
    }
}
var cosPercent = 25; //Percentage allowed for food cost


//Calculate Cost of Sales to compare if within allowable variance
var salesCost = (inventoryActual / netSales); //Calculates the percentage of inventory used
var cosTarget = netSales * (cosPercent/100);  //Calculates the target to compare usage against

//Conditionals to determine if CoS is within variance
if (salesCost * netSales < cosTarget){
    alert("Your food cost is on target. Good job!  You made food by $" + Math.abs(cosTarget - salesCost * netSales));
}else{
    alert("Your food cost is out by $" + Math.abs(cosTarget - salesCost * netSales));
}