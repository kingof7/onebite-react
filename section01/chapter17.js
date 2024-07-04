// 1. 배열 (array) 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴

let arrC = [1, 2, 3,
true, "hello", null, undefined, function() {console.log("hihi")}];
console.log(arrC);
// console.log(arrC.toString());

console.log(arrC[arrC.length-1]);

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];
let item3 = arrC[2];

arrC[0] = "hello";

console.log(arrC);

let arrCC = arrC;
console.log(arrCC);

arrC[0] = "얕은복사";
console.log(arrC);

// 깊은 복사 -> 나중에 뒤에가서 다시 배울 것
let arrD = [...arrC];
arrD[0] = "기픈복사?";

console.log(arrD);
console.log(arrC);