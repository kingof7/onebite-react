// Primitive Type (원시 타입)
// 1. Number type
let num1 = 1;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

let inf = Infinity;
let mInf = -Infinity;   

let nan = NaN; // NaN = Not a number라는 뜻
console.log(1 * "nan");

// 2. String type
let myName = "이종화";
let myLocation = "동작구";
let introduce = myName + myLocation;

// 템플릿 리터럴 문법
let introduceText = `${myName}는(은) ${myLocation}에 거주합니다.`;
console.log(introduceText);

// 3. Boolean type
let isSwitchOn = true;
let isEmpty = false;

// 4. null type (아무것도 없다.) <- 개발자가 임의로 넣어준 값.
let empty = null;

// 5. undefined
// 변수를 선언만 하고 초기화(할당)하지 않으면 자동으로 할당되는 값.
let none;
console.log(none);