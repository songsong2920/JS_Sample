(function () {
  ("use strict");

  /**
   * class
   *
   * Instance Properties : what they have
   * - name
   * - age
   * - height
   *
   * Instance Methods : what they do
   * - run
   * - jump
   * - talk
   */
  class Reactangle {
    // Setup - 객체를 생성할 때 자동으로 생성 되기 전에 실행하는 함수
    constructor(_width, _height, _color) {
      console.log("The Reactangle is being created !!");

      // Current object
      this.width = _width;
      this.height = _height;
      this.color = _color;
    }
    getArea() {
      return this.width * this.height;
    }
    printDescription() {
      console.log(
        `I am a reactangle of ${this.width} X ${this.height} and I am ${this.color}`
      );
    }
  }

  let myReactangleOne = new Reactangle(7, 7, "blue");
  myReactangleOne.printDescription();
})();
