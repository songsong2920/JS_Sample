(function () {
  ("use strict");

  const myArray = [1, 2, 3];
  console.log(Symbol.iterator in myArray);

  for (const item of myArray) {
    console.log(item);
  }
  const myObject = { name: "myObject", value: null };
  console.log(Symbol.iterator in myObject);

  // for (const item of myObject) {
  //   console.log(item);
  // }
  const iterator = myArray[Symbol.iterator]();
  console.log("next" in iterator);

  const iteratorResult = iterator.next();
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
})();
