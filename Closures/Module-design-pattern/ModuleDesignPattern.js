//Module design pattern in javascript is used for keeping particular pieces of code independent of other components.

const module = (function () {
  // declaration of private variables and functions
  let count = 0;
  function log() {
    console.log(count);
  }

  // declaration of public functions (which we want to expose)

  return {
    increment() {
      count++;
      log();
    },
    decrement() {
      count--;
      log();
    },
  };
})();

module.increment();
module.increment();
module.decrement();

// cannot be accessed

console.log(count);
