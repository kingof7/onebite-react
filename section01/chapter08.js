// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// 두 변수 중에 null, undefined가 아닌 값을 찾아내는 연산자
// 둘다 해당안되면, 가장 맨처음 것이 출력됨

let var1; // undefined
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // 둘중에 null이나 undefined가 아닌 값을 찾아냄
console.log(var4); // 10

let var5 = var1 ?? var3;
console.log(var5); // 20

let var6 = var2 ?? var3; // 둘다 아닐 떄,
console.log(var6) // 맨처음 값은 var2가 출력됨, 10

let userName = "이종화";
let userNickName;

let displayName = userName ?? userNickName;
console.log(displayName);

// 2. typeof 연산자
// 값의 타입을 "문자열"로 반환하는 연산자.
let var7 = 1;
let var77 = "Hello";

console.log(typeof(var7));
console.log(typeof(var77));

// 3. 삼항 연산자
// --> 항을 3개 사용하는 연산자
let var8 = 10;
// 요구사항 : var8의 값이 짝수이면 "짝", 홀수이면 "홀"을 반환
let res = parseInt(var8) % 2 === 0 ? "짝" : "홀";
console.log(res);