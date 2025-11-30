// Call-apply-bind methods are used to explictly set the value of this inside a JS object
// Example
let person1 = {
  firstName: "Alok",
  lastName: "Jha",
};

function printDetails(city, state) {
  console.log(
    this.firstName + " " + this.lastName + " from" + " " + city + ", " + state
  );
}

printDetails.call(person1, "New Delhi", "India");

//Implement Call method

Function.prototype.myCall = function (context = {}, ...args) {
  context.fn = this;
  context.fn(...args);
};

printDetails.myCall(person1, "New Delhi", "India");
