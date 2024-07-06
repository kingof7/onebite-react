// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // 아주 큰 값 (웹개발에서 잘 안쓰임)

if (!f1) {
  // !를 넣어야 안에 로직을 타서 넣어준것. // f1자체가 falsy이기 때문에
  console.log("falsy");
}
if (!f2) console.log("falsy");
// ~
if (!f7) console.log("falsy");

// 2. Truthy 한 값
// -> 7가지 Falsy 제외하고 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t1) {
  console.log("truthy");
}
if (t2) console.log("truthy");
// ~
if (t5) console.log("truthy");

// 3. 활용 사례
function printName(person) {
  //   if (person === undefined || person === null) { // falsy
  if (!person) {
    // undefined나 null은 falsy한 값이기 때문에 그냥 !person으로 때려버린다.
    console.log("person값 없음");
    return; // 아래로 진행 못하게
  }
  console.log(person.name);
}

// let person = { name: "이종화" };
let person = null;
console.log(typeof person); // undefined는 undefined 타입, null은 object 타입
printName(person);
