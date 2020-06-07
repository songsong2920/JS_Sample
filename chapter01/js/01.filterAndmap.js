(function () {
  ("use strict");

  // member Array
  let member = [
    {
      name: "Jameson",
      relationship: "friend",
      phone: "010-2394-4939",
    },
    {
      name: "Harry",
      relationship: "family",
      phone: "010-3984-7755",
    },
    {
      name: "Jamie",
      relationship: "friend",
      phone: "010-3366-8723",
    },
  ];

  /**
   * for Statement
   */
  function forFun() {
    let names = [];
    for (let i = 0; i < member.length; ++i) {
      names.push(member[i].name);
    }

    console.log(names);
  }

  /**
   * 아래와 같은 방법으로 filter를 쓰면 코드는 재사용 할 수 없다.
   * 그 이유는 callback, filter 섞여 있기 때문이다.
   */
  {
    const isFriend = member.filter((m) => m.relationship === "friend");

    const isAllNames = member.map((m) => m.name);
  }

  /**
   * arrow function expression composable
   *
   * array size : map < filter < find
   */
  {
    const isFriend = (m) => m.relationship === "friend";

    const isFriendNames = (m) => {
      return m.name;
    };

    const filterd = member.filter(isFriend);

    const friend_names = filterd.map(isFriendNames);

    console.log(friend_names);
  }

  let songs = [
    { title: "내 눈물 모아", singer: "서지원", genre: "발라드" },
    { title: "어떤 날엔", singer: "김재환", genre: "발라드" },
    { title: "아무 노래", singer: "지코(ZICO)", genre: "힙합" },
    { title: "이제 나만 믿어요", singer: "임영웅", genre: "임영웅" },
    { title: "주라주라 ", singer: "둘째이모 김다비", genre: "트로트" },
    { title: "진또배기", singer: "이찬원", genre: "트로트" },
  ];

  const isTitle = (s) => {
    return s.title;
  };

  const titleCount = (s) => s.length > 4;

  const title = songs.map(isTitle);
  const count = title.filter(titleCount);
})();
