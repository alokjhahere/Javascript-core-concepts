//Example
let person1 = {
  firstName: "Alok",
  lastName: "Jha",
};

function printDetails(city, state) {
  console.log(
    this.firstName + " " + this.lastName + " from" + " " + city + ", " + state
  );
}

printDetails.apply(person1, ["New Delhi", "India"]);

// Polyfil for Apply method

Function.prototype.myApply = function (context = {}, args = []) {
  context.fn = this;
  context.fn(...args);
};

printDetails.myApply(person1, ["New Delhi", "Apply method"]);
