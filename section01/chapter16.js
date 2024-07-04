// 1. 상수 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

// 객체 자체를 바꿔버리는건 안됨.
// animal = 123;

// 객체 내의 프로퍼티 수정, 추가, 삭제는 가능
animal.age = 2;
animal.name = "까마귀";
delete animal.color;

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
const person = {
    name: "이종화",
    sayHi: function() {
        console.log("안녕!");
    },
    sayHi2: () => {
        console.log("안녕2!");
    },
    // 메서드 선언
    sayHi3() {
        console.log("안녕3!");
    }
};

person.sayHi();

person["sayHi2"]();

// 메서드 선언 호출
person["sayHi3"]();

