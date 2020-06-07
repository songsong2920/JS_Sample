(function () {
  ("use strict");

  /**
   * array.fill
   * -시작 인덱스 부터 끝 인덱스 이전 까지 정적인 값 하나로 채운다.
   *
   */

  // Create array
  let arr = ["css", "javascript", "html"];

  console.log("Before arr", arr);

  // Change value

  // arr.fill("Change");

  // arr.fill({
  //   name: "Songs",
  //   profession: "Software Developer",
  // });

  arr = arr.map(() => {
    return {
      name: "change",
      profession: "Software Developer",
    };
  });

  arr[0].name = "song";

  console.log("after arr", arr);

  let prople = new Map();

  prople.set("Danal", 22);
  prople.set("Joop", 21);

  console.log(prople);

  let joopCount = prople.get("Joop");
  console.log(joopCount);
})();
