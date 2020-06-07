(function () {
  ("use strict");
  let orders = [{ price: 9500 }, { price: 28530 }, { price: 10000 }];
  /**
   * for Statement
   */
  {
    let totalPrice = 0;
    for (let i = 0; i < orders.length; ++i) {
      totalPrice += orders[i].price;
    }
    // console.log(totalPrice);
  }

  /**
   *
   * arr.reduce(callback[, initialValue])
   * 배열 각 요소에 대해 주어진 reduce() 실행하고, 하나의 결과를 반환, 왼쪽에서 오른쪽으로 방향
   *
   * ① accumulator  : 누산기 콜백의 반환값을 누적한다. 콜백 이전의 반환 값 또는, 콜백의 첫번째 initialValue 값
   * ② currentValue : 처리할 현재 요소
   * ③ array        : reduce 호출한 배열
   * ② initialValue : - callback의 처음 호출에서 첫 번째 인수에 되는 제공 값, 그렇지 않으면 빈 배열
   * 									- 빈 배열에서 초기값 없이 reduce()를 호출 하면 오류 발생
   */
  {
    const totalPrice = orders.reduce((sum, order) => {
      return sum + order.price;
    }, 0);
    // console.log(totalPrice);
  }
  {
    const arr = [1, 2, 3, 4, 5];
    // x(0)  + y(1) = 1
    // x(1)  + y(2) = 3
    // x(3)  + y(3) = 9
    // x(9)  + y(4) = 14
    // x(14) + y(5) = 19
    const sum = arr.reduce((x, y) => {
      return x + y;
    }, 0);

    // x(2)  * y(1) = 2
    // x(2)  * y(2) = 4
    // x(4)  * y(3) = 12
    // x(12) * y(4) = 48
    // x(48) * y(5) = 240
    const product = arr.reduce((x, y) => {
      return x * y;
    }, 2);

    const max = arr.reduce((x, y) => {
      return x > y ? x : y;
    }, 0);
  }
})();
