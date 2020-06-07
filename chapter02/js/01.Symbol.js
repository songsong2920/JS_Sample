(function () {
  ("use strict");

  /**
   * Primitive Value
   * - number
   * - string
   * - boolean
   * - null
   * - undefined
   * - Symbol - es6
   *
   * [Symbol]
   * - 유일무이 하고 고유한 존재
   * - 비공개 멤버, 기본적인 열거 대상에서 제외
   * - 암묵적 형변환 불가
   * - 기본적인 열거대상 제외 → (for~in)
   * - Symbol()로 부터 반환되는 모든 심볼 값은 고유하다.
   */

  const sym1 = Symbol();
  const sym2 = Symbol(42);

  console.log(typeof sym1); // symbol

  console.log(sym2 === 42); // fasle

  // Symbol은 비공개 목적 이므로, for ~ in 에서 출력되지 않는다.
  const obj = {
    [Symbol("1")]: true,
    "02": true,
    "10": false,
    symbol: String,
    [Symbol("2")]: true,
  };

  const keys = [];

  for (const key in obj) {
    keys.push(key);
  }

  console.log(keys);

  // Symbol 암묵적 형변환 불가
  const syms = Symbol();

  // Uncaught TypeError: Cannot convert a Symbol value to a string
  // const ples = syms + "a";
  // console.log(syms + "a");

  // Symbol 참조는 가능하다
  const c = syms;

  console.log(syms === c); // true

  const x = () => {
    const a = Symbol("a");
    return {
      [a]: 10,
      // propety 은닉화는 a를 밖으로 빼주는지 여부에서 결정된다. 그렇지 않으면 값은 노출되어 있지만
      // 사용할 수 없게 된다.

      // a: a,
    };
  };

  const y = x();
  console.log(y); // {Symbol(a):10}

  console.log(y.a);
  console.log(y["a"]);
  console.log(y[Symbol("a")]);

  // const b = Reflect.ownKeys(y);
  // console.log(b);
  {
    const obj = { a: 1 };
    const sb1 = Symbol(obj);
    console.log(sb1);
    console.log(obj.toString());
  }

  {
    const NAME = Symbol("이름");
    const GENDER = Symbol("성별");

    const songs = {
      [NAME]: "song",
      [GENDER]: "female",
      age: 29,
    };

    const jun = {
      [NAME]: "jun",
      [GENDER]: "male",
      age: 2,
    };

    console.log(songs, jun);
    console.log(songs[NAME], jun[NAME]);

    for (const prop in jun) {
      console.log(prop, jun[prop]); // age 2
    }

    Object.keys(jun).forEach((key) => {
      console.log(key, jun[key]);
    });

    Object.getOwnPropertyNames(jun).forEach((key) => {
      console.log(key, jun[key]);
    });

    Object.getOwnPropertySymbols(jun).forEach((key) => {
      console.log(key, jun[key]);
    });

    Reflect.ownKeys(jun).forEach((key) => {
      console.log(key, jun[key]);
    });
  }
  {
    const sym6 = Symbol.for("Global symbol");
    const sym8 = Symbol.for("Global symbol");
    const sym9 = Symbol.for("Global");
    console.log(sym6 === sym8); // true
    console.log(sym8 === sym9); // flase
  }
})();
