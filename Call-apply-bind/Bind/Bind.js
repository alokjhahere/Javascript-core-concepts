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

const user = printDetails.bind(person1, "New Delhi", "Bind");
user();

// Polyfil for bind method

Function.prototype.myBind = function (...args) {
  let arr = args.slice(1);
  return function () {
    printDetails.apply(args[0], arr);
  };
};

const personality = printDetails.myBind(person1, "New Delhi", "myBind");
personality();
