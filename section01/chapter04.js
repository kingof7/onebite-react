console.log("chapter04");
// 변수
let age;
console.log(age);
// let age = 40;


// 1. 상수
const birth = "1992.01.17"; // 반드시 초기화 필요
birth = "123"; // 재할당 못함

// 2. 변수 명명규칙
// 3-1. $, _ 제외한 기호는 사용불가
// let = #abc;
let $_variable = ''; // 가능

// 3-2. 숫자로 시작할 수 없다.
// let 1a;
let a1;
let _1a;

// 3-3. 예약어를 사용할 수 없다.
// let let;
// let const;
// let if;

// 4. 변수 명명 가이드, camelCase
let a = 1; // x
let salesCount = 1;
let b = 2; // x
let refundCount = 2;
let c = b - a; // x
let totalSalesCount = refundCount - salesCount;
