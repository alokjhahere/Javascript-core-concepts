function hidden() {
  let count = 0;

  return function incrementCounter() {
    count++;
    console.log(count);
  };
}

let access = hidden();
access();

//Cannot be accessed this way now

console.log(count);
