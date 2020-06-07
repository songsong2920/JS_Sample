(function () {
  ("use strict");
  /**
   * arr.includes()
   * - 배열이 특정 요소를 포함하고 있는 판별
   *
   * arr.indexOf()
   * - 배열에 지정된 요소를 검색하고, 첫 번째 인덱스를 반환
   * - 기본 값 0 일 경우 배열 전체 검색
   * - 값이 없을 경우 -1를 반환
   */
  {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const isBanana = fruits.includes("Banana", 0); // true
    const isOrange = fruits.includes("Orange", 3); // false
    // console.log(isOrange);
  }

  {
    const dataType = ["NaN", "String", "Number", "Boolean", "String"];

    console.log(dataType.indexOf("NaN", 0)); // 0

    // strart from index 2
    console.log(dataType.indexOf("String", 2)); // 4

    // strart from index 3
    console.log(dataType.indexOf("Boolean", 3)); // 3

    const beasts = ["ant", "bison", "camel", "duck", "bison"];

    console.log(beasts.indexOf("bison")); // 1

    // start from index 2
    console.log(beasts.indexOf("bison", 2)); // 4
  }
  {
    const alpha = ["a", "b", "c"];
    const numeric = [1, 2, 3];

    const result = alpha.concat(numeric);
    const result2 = numeric.concat(2, [44, 55]);
    console.log(result2);
  }
})();
