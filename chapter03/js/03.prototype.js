/*
 * Prototype이 필요한 이유 ?
 * - 생성자 함수 안에서 메서드를 정의하는 것은 생산성이 떨어진다.
 * - 생성자 함수를 통해서 생성된 모든 인스턴스 객체가 공통적으로
 *   사용하는 함수를 사용하기 위해서 이다. 공통적
 *
 * Prototype 이용해서 재사용성 높이기
 * - 생성자 함수 안에 메서드를 정의 하지 않므로 객체가 만들어질 때 마다
 * 	 실행되지 않고, 한 번만 정의된다. 성능 메모리 절약
 *
 * - 객체 자신이 정의한 메서드 있는지 확인한다. 정의한 메서드 없다면
 * 	 객체 생성자의 Prototype 메서드가 정의 되어있는지를 찾는다.
 */

function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}
// Person prototype
Person.prototype.sum = function () {
  return "prototype : " + (this.first + this.second);
};

let lee = new Person("lee", 20, 30);

lee.sum = function () {
  return "this : " + (this.first + this.second);
};

let kim = new Person("kim", 50, 30);

console.log("lee sum() :", lee.sum());
console.log("kim sum() :", kim.sum());
