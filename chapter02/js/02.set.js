(function () {
  ("use strict");
  // Create set
  const firstSet = new Set();

  // Add value
  firstSet.add("String");
  firstSet.add({
    name: "songs",
    age: 29,
  });

  firstSet.add(12);
  firstSet.add(999.99);

  // Find size of set
  console.log("firstSet Size ?", firstSet.size); // 3

  // Check for value
  console.log("firstSet has(12) ?", firstSet.has(12));

  // Delete item
  firstSet.delete(12);

  // Loop through set
  for (let item of firstSet) {
    console.log("Loop item ?", item);
  }

  // Convert to Array
  const arr = Array.from(firstSet);
  console.log(arr);

  console.log(firstSet);
})();
