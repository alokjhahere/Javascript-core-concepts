// Closures : a function bundled together with the reference to its parents enviroment forms a closure

function outer() {
  let a = 10;
  function inner() {
    console.log(a);
  }

  return inner;
}

let z = outer();
z();

/* Advantages of Closure : 
 1. Module Design pattern
  2. HOF like Once , Memoize
  3. setTimeouts
  4. maintaining state in async worlf
  5. Function Currying

*/
