const obj = {
  이름: "홍길동",
  나이: 33,
  특기: "아버지없음",
  arr: [1, 2, 3],
  fn: function () {},
};
//javascript 전용
//JSON 형태 -> const obj = {"이름": "홍길동", "나이": 33, "특기": "아버지없음", "arr":[1, 2, 3] };
console.log(typeof JSON.stringify(obj, null, 2));
