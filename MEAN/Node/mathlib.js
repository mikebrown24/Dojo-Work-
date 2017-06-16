module.exports = {
    add: function(num1, num2) { 
         // add code here 
         console.log(num1 + num2);
    },
    multiply: function(num1, num2) {
         // add code here 
         console.log(num1 * num2);
    },
    square: function(num) {
         // add code here 
         console.log(num *2);
    },
    random: function(num1, num2) {
         // add code here

         console.log(Math.random(num1,num2));
    }
  }

  //How the solutions did it :
var mylib = require("mathlib.js");
var math = new mylib(); 

a = 1;
b = 35;

console.log("\nSum of " + a + " and " + b + " is: ", math.add(a, b));
console.log("Product of " + a + " and " + b + " is: ", math.multiply(a, b));
console.log("Square of " + a + " is: ", math.square(a));
console.log("Random number between " + a + " and " + b + ": ", math.random(a, b));