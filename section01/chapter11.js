// 함수 선언
// function greetings() {
//     console.log("안녕하세요.");
// }
// // 함수 호출 == 실행한다.
// console.log("호출 전");
// greetings();
// console.log("호출 후");

let area1 = getArea(20, 30);
console.log(area1);

let area2 = getArea(30, 40);
console.log(area2);

let area3 = getArea(120, 300);
console.log(area3);

// 자바스크립트의 호이스팅 기능, 함수를 밑에다가 선언해도 위로 끌어올려서 실행부를 선언부보다 위로 선언해도 문제 없음
function getArea(a, b) { // 매개 변수
    function another() { // 중첩 함수
        console.log("another");
    }
    another();
    let area = a * b;

    return area; // 반환 값
}