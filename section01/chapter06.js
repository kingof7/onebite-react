// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는것

let num = 10;
let str = "20";
console.log(num + str);

// 2. 명시적 형변환
// 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = Number(str2);

console.log(Number(str2)); // failed
console.log(parseInt(str2)); // 변수안에 숫자로 시작할떄, 뒤에 문자를 잘라버리고 정수로 변환

// 숫자 -> 문자
let num1 = 20;
console.log(num1 + "입니다.");

let numToStr1 = String(num1);
console.log(numToStr1 + "입니다.");

