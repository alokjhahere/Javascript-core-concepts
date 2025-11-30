// throttling is a technique which limits the execution of a event handler function even when this event is triggered contineously due to user action (scrolling, resizing a window)

function expensive() {
  //Makes an API call
  console.log("Expensive");
}

function throttle(fn, limit) {
  let flag = true;
  return function () {
    let context = this;
    args = arguments;

    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}

const betterFunction = throttle(expensive, 1000);

window.addEventListener("resize", betterFunction);
