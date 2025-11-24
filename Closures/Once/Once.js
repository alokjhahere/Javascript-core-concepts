//Once Polyfill

function once(func, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }

    return ran;
  };
}

const sum = once(function (a, b) {
  console.log("Answer :", a + b);
});

sum(1, 2);
sum(1, 2);
sum(1, 2);

// Useful when:
// You want to initialize something only once
// Prevent multiple event handler executions
// Avoid accidental repeated API calls or payments