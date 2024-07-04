// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능
// 스콥의 기준은 { } 임

let a = 1; // 전역 스코프

function funcA() {
    let b = 2;
    console.log(a);
}
funcA();
// console.log(b); // 불가

if (true) {
    let c = 1;
}
// console.log(c);

// 함수도 스코프를 갖는다.

function A() {
    console.log("A func");
    function B() {
        console.log("B func");
    }
}
A();

// var는 여러번 선언가능, 이래서 안쓰는게 좋음
var aa = 1;
var aa = 100;
if (true) {
    var aa = 3;
    var aa = 4;
}
console.log(aa);

if(true) {
    var bb = 3;
}
console.log(bb); // var는 무조건 전역변수이면서 재선언 가능
