// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 -> 많이 사용

// 2. 객체 프로퍼티(=속성)
let person = {
    name: "이종화", // key: value
    age: 33,
    hobby: "cycle",
    job: "DevOps Enginner",
    extra: {},
    10 : 20,
    "like cat" : true, // 공백이 있는 키는 ""로 묶어줌
};

console.log(person["like cat"]);

// 3. 객체 프로퍼티 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name); // -- 줄그어지는건 vscode 내장 타입스크립트 검사 기능, 무시

let age = person["age"];
console.log(age);

// 3-2. 새로운 프로퍼티 추가 방법
person.secondJob = "fe developer";
person["favoriteFood"] = "pizza";

console.log(person["secondJob"]);
console.log(person.favoriteFood);

// 3-3. 프로퍼티 값을 수정하는 방법
person.name = "리종화";
console.log(person.name);
console.log(person);

// 3-4. 프로퍼티 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3-5. 프로퍼티의 존재 유무를 확인하는 방법
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1);
console.log(result2);