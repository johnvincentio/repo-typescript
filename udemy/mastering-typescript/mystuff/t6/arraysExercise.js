// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
var list = [];
list.push({ name: "coffee mug", price: 11.50 });
list.push({ name: "tea mug", price: 4.50 });
list.push({ name: "milk mug", price: 2.50 });
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(list) {
    return list.reduce(function (previousValue, currentValue) { return previousValue + currentValue.price; }, 0);
}
console.log("getTotal ".concat(getTotal(list)));
