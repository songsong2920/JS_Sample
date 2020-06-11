(function () {
  ("use strict");

  /**
   * Set
   * - Set은 값(value)만 모아둔다. 중복을 허용하지 않는다.
   * - Set 객체는 value 콜렉션으로, 삽입을 순서대로 한다.
   * - for ~ of 문 사용해서 요소를 순서대로 순회할 수 있다.
   * - 배열과 다르게 index 개념이 없다 key = value 똑같다.
   *
   * Set의 사용용도
   * - 중복 제거, 전체 순회할 필요성이 없는 경우, 값의 유무판단
   * - 특정 요소에 접근하거나, index가 필요할 경우에는 Set의 사용은 적철치 않다.
   *
   * Set method
   * Set.prototype.clear() - Set 객체에 모든 요소를 제거한다.
   * Set.prototype.values() - Set 객체 내에서 각 요소에 대한 값을 포함하는 "Iterator" 객체 반환
   */
  {
    // Create set and array
    const myArray = [1, 2, 3, 4, 5, 5, 2, 1];

    // Remove all dupliacata values from an array
    const mySet = new Set(myArray);

    // Add value
    mySet.add("Set");
    mySet.add({ changeName: "JavaScript Mastery" });

    mySet.add(12);
    mySet.add(999.99);

    // Find size of set
    console.log("mySet Size ?", mySet.size); // 9

    // Check for value
    console.log("mySet has(12) ?", mySet.has(12)); // true

    // Delete item
    mySet.delete(12);

    // Loop through set item
    for (let item of mySet) {
      console.log("Loop item ?", item);
    }

    for (let item of mySet.values()) {
      console.log("Loop item.values ?", item);
    }

    // Set as array containing unique values
    const uniqueArray = [...mySet];
    console.log("uniqueArray :", uniqueArray);

    console.log("myArray index[3] ?", myArray[3]); // 4

    console.log("mySet index[3] ? ", mySet[3]); // undefined

    /**
     * WeakSet
     * - Set 객체와 유사하다. Set 객체와 다르게 객체만 수집할 수 있다.
     * - 약한 참조가 이루어져 메모리 누수를 예방할 수 있다.
     *
     */
    // Create WeakSet
    let carWeakSet = new WeakSet();

    let carOne = { make: "Jeep", model: "Cherokee" };
    let carTwo = { make: "Toyota", model: "Camry" };

    // Add value
    carWeakSet.add(carOne);
    carWeakSet.add(carTwo);

    // Check for object
    console.log("carWeakSet carTwo ?", carWeakSet.has(carTwo));

    console.log("cars ?", carWeakSet.has({ make: "Jeep" }));
    console.log("carWeakSet :", carWeakSet);
    console.log("mySet :", mySet);
  }
})();
