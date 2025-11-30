// Currying is a function that takes one argument at a time and returns a new function expecting the next argument
// Curried functions are constructed by chaining closures by immediatly returning thier inner functions simultaneously.
//Use to write f(a,b) into f(a)(b);

// Question1 - sum(2)(3)(4);

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       console.log(a + b + c);
//     };
//   };
// }

// console.log(sum(1)(2)(3));

// Question 2 -
/* evaluate("sum")(4)(2) => 6
   evaluate("multiply")(4)(2) => 8
   evaluate("divide")(4)(2) => 2
   evaluate("substract")(4)(2) => 2
*/

// function evaluate(operation) {
//   return function (a) {
//     return function (b) {
//       if (operation === "sum") return a + b;
//       else if (operation === "multiply") return a * b;
//       else if (operation === "divide") return a / b;
//       else if (operation === "subtract") return a - b;
//       else return "Invalid";
//     };
//   };
// }

// console.log(evaluate("divide")(100)(9));

// Question 3 - Infinite Currying -> sum(1)(2)(3)...(n)

// function sum(a) {
//   return function (b) {
//     if (b) return sum(a + b);
//     return a;
//   };
// }

// console.log(sum(1)(2)(3)());

// Question 4 - DOM Manupulation

// function updateElement(id) {
//   return function (content) {
//     return (document.querySelector("#" + id).textContent = content);
//   };
// }

// const updateHeader = updateElement("header");

// updateHeader("Hello Behen");

// Question 5 - Implement Currying
