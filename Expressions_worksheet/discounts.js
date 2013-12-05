//Joshua Elliott
//December 4, 2013
//Expressions Worksheet: Discounts


var purchaseItem = "Laser Pointer"; //We're buying a laser pointer today
var listPrice = 12;  //This item's original cost or "list price"
var discount = 15;   //The % discount being offered before tax
var salesTax = 4;    //The current sales tax

var salePrice = listPrice * (100 - discount)/100;   //Calculating the sale price, pre tax
salesPer = salesTax / 100;  //Convert tax rate to percent value
var totalPrice = salePrice + (salePrice * salesPer);   //Calculate the total price with sales tax included
totalPrice = Math.round(totalPrice * 100)/100; //Round to 2 decimal places

console.log("Your " + purchaseItem + " was originally $" + listPrice + ", but after a " + discount + "\% discount, it is now $" + salePrice + " without tax and $" + totalPrice + " with tax.");
//Print result to console
alert("Your " + purchaseItem + " was originally $" + listPrice + ", but after a " + discount + "\% discount, it is now $" + salePrice + " without tax and $" + totalPrice + " with tax.");
//Print result to alert