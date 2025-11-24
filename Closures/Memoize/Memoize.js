// Implementing Caching / Memoize Function

// If we are given a function which has some expensive calculation written inside of it, which when executed everytimes takes a decent amount of time to run.

// We need to memoize the result of the function if the parameters of the functions are same

function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    //First of all convert the arguments that we get from the function into a string
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const product = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {}
  return num1 * num2;
};

const memoizedProduct = myMemoize(product);

// console.time("First call");
// console.log(product(9876, 5647));
// console.timeEnd("First call");

// console.time("Second call");
// console.log(product(9876, 5647));
// console.timeEnd("Second call");

console.time("First call");
console.log(memoizedProduct(9876, 5647));
console.timeEnd("First call");

console.time("Second call");
console.log(memoizedProduct(9876, 5647));
console.timeEnd("Second call");
