// Debouncing and Throttling are 2 ways to optimize Event handling in JS.

// Debouncing - It helps us optimizing how we call certain events.

// If we make an API call on every key stroke, on every single letter we write on the search Box,
// it will make a lot of unnessasary API calls to the backend which will put a lot of pressure
// on our server, to avoid all these issues - we use Debouncing.

// Debouncing - it limits the execution of a function call and wait for a certain amount of time
// before running it again.

// Throttling - it is a technique to limit the execution of a event handler function, even when
// this event triggered contineously due to user action (scrolling, resizing a window)

let count = 0;
const getData = function () {
  // Makes an API call
  console.log("Fetchig Data...", count++);
};

const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
};

const betterFunction = debounce(getData, 300);
