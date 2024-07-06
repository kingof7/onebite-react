// 1. 구조 분해 핟당
let arr = [1,2,3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
let [one, two, three, four = 4] = arr; // 각각 순서대로 변수에 값이 할당
console.log(one, two, three, four);
console.log("\n\n");
// 2. 객체의 구조 분해 할당
let person = {
    name: "이종화",
    age: 33,
    hobby: "테니스",
}
// let { name, age, hobby, extra="extra" } = person;
// console.log(name, age, hobby, extra);

let {
    age: myAge, // age값을 myAge에 할당
    hobby,
    name,
    extra = "hello",
} = person;
console.log(name, myAge, hobby, extra); // age가아니라 myAge로 찍는다.

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra);
};

func(person);

