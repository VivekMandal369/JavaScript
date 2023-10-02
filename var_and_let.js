/*

  ❓ Difference between var and let 

  ☝ The keywords let and var both declare new variables in JavaScript. The difference between let and var is in the scope of the variables they create:
  ☝ Variables declared by let are only available inside the block where they're defined.
  ☝ Variables declared by var are available throughout the function in which they're declared.

*/

// Examples
var i = 1;
// Created a scope using {}
{
  var i = 2;
  console.log(i); // Output: 2
}
console.log(i) // Output: 2

// Examples

let j = 3;
// Created a scope using {}
{
  let j = 4;
  console.log(j); // Output: 4
}
console.log(j) // Output: 3

