(function () {
  ("use strict");

  /**
   * Map
   * - [key, value] 형식으로 이루어진 list
   * - 즉, key를 넣으면 value을 준다.
   * - String, Symbol 외에 타입을 key로 사용 가능
   * - Map은 기본적으로 Symbol.iterator을 가지고 있다.
   * - 즉, iterble protocol 지원 for ~ of문을 사용해서 순회할 수 있다.
   *
   * Map VS Object
   * - Map은 Object와 달리 삽입순으로 순서가 보장된다.
   * - Map은 기본 size 속성으로 쉽게 길이 얻을 수 있다.
   * - Map의 key는 Object와 달리 key로 어떤 타입이든 사용 가능하다.
   * - Map은 iterable 프로트콜 지원해서 바로 순회가 가능하다.
   *
   * - Objct는 기본으로 하지 못하고 따로 함수를 만들어야 한다.
   * - Object는 key로 Symbol, String만 가능하다.
   *
   */
  {
    // Create Map
    const myMap = new Map([
      ["name", "songsong"],
      ["surname", "Lee"],
    ]);

    let keyObj = {};

    // Add value
    myMap.set("a1", "Hello");
    myMap.set(keyObj, "keyObj 관련된 값");
    myMap.set(NaN, "not a number");

    // Delete item
    myMap.delete("a1");

    // Find size of set
    console.log("myMap Size ?", myMap.size); // 3

    // Check for key
    myMap.get(NaN); // not a number

    // Loop through Map item
    for (let [key, value] of myMap) {
      console.log(key + " = " + value);
    }

    console.log("myMap :", myMap);

    /**
     * WeakMap
     * - Map 값의 타입을 신경 쓰지 않았다.
     * - 하지만 WeakMap은 주소 값(Object)만 받는다.
     * - number, string 일반적인 타입은 안된다.
     * - 개발자는 접근할 수 있지만, 가비지 컬렉터는 접근할 수 없는
     * - 연결 선을 만든다.
     *
     * Garbage Collector
     * - 모든 객체들 중에서 직접 접근할 수 없는 객체들을 지워버리는 역할
     *
     * Map VS Object
     * - Map은 Object와 달리 삽입순으로 순서가 보장된다.
     * - Map은 기본 size 속성으로 쉽게 길이 얻을 수 있다.
     * - Map의 key는 Object와 달리 key로 어떤 타입이든 사용 가능하다.
     * - Map은 iterable 프로트콜 지원해서 바로 순회가 가능하다.
     *
     * - Objct는 기본으로 하지 못하고 따로 함수를 만들어야 한다.
     * - Object는 key로 Symbol, String만 가능하다.
     *
     */
  }
})();
