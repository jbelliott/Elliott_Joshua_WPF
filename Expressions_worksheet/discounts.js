//Joshua Elliott
//December 4, 2013
//Expressions Worksheet: Discounts


var purchaseItem = "Laser Pointer";
var listPrice = 12;
var discount = 15;
var salesTax = 4;

var salePrice = listPrice * (100 - discount)/100;
salesPer = salesTax / 100;
var totalPrice = salePrice + (salePrice * salesPer);
totalPrice = Math.round(totalPrice * 100)/100;

alert("Your " + purchaseItem + " was originally $" + listPrice + ", but after a " + discount + "\% discount, it is now $" + salePrice + " without tax and $" + totalPrice + " with tax.");