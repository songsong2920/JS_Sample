(function () {
  ("use strict");
  /**
   * arr.every()
   * - 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트
   * - 빈 배열은 true를 반환
   *
   * arr.some()
   * - 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트
   * - 빈 배열은 false를 반환
   */
  {
    const arr = [1, 2, 3, 4, 5];

    const product = arr.every((x, y) => x < 10); // true, 모든 값이 10 보다 작음

    const result = arr.some((x) => x % 2 === 0); // true, 원소 중에 짝수가 있음

    // console.log(result);
  }
})();
