(function () {
  ("use strict");
  // classes - Getters & Setters
  class Square {
    constructor(_width) {
      this.width = _width;
      this.height = _width;
      this.numOfRequestsForArea = 0;
    }
    get area() {
      this.numOfRequestsForArea++;
      return this.width * this.height;
    }
    set area(area) {
      this.width = Math.sqrt(area);
      this.height = this.width;
    }
  }

  let squareOne = new Square(4);
  squareOne.area = 25;

  console.log(squareOne.area);
  console.log(squareOne.area);
  console.log(squareOne.area);
  console.log(squareOne.area);

  console.log(squareOne.numOfRequestsForArea);

  // console.log(squareOne.width);
  // console.log(squareOne.height);
})();
