// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
// -> 웹서비스에서 검색 등의 기능을 구현할 때 요긴하게 쓰임.

let arr1 = [
    {name: "이정환", hobby: "테니스"},
    {name: "홍길동", hobby: "검도"},
    {name: "장보고", hobby: "활쏘기"},
];

// 콜백함수 (item) => {} 형식은 내부에 return이 필요하다. 함수니까
const tennisPeople = arr1.filter((item) => {
    if(item.hobby === "테니스") return true;
});
console.log(tennisPeople);

// 콜백함수 (item) => 조건 형식은 return 필요 없음.
const tennisPeople2 = arr1.filter((item) => item.hobby === "테니스");
console.log(tennisPeople2);
console.log('\n');

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고
// 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResArr = arr2.map((item, idx, arr) => {
    console.log(idx, item);
    return item * 2;
});
console.log(mapResArr);
console.log('\n');

let names = arr1.map((item) => item.name);
let names2 = arr1.map((item) => {return item.name});
console.log(names);
console.log(names2);

console.log(arr1.map((item) => item.name));
console.log('\n');

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();
console.log(arr3);

let arr32 = [10, 3, 6];
// console.log(arr32.sort());
// 정렬은 number를 사전순으로 하지 대소로 하는게 아님.
// 따라서 비교기준을 제시하는 콜백함수를 같이써야 함.
arr32.sort((a, b) => {
    console.log(`arr32: ${a}, ${b}`);
    if(a > b) {
        return 1; // b가 a 앞으로 오도록 정렬 됨 // b, a 배치
    }else if(a < b) {
        return -1; // a가 b 앞으로 // a, b 배치
    }else {
        return 0; // 자리 바꾸지 마라 // a, b 자리 유지
    }
});

console.log(arr32);
console.log('\n');

// 4. toSorted (최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드
// 원본 배열을 안건드리고 새로운 배열을 만들어냄
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환
let arr6 = ["hi", "im", "winterwood"];
const joined = arr6.join('-'); // 구분자 콤마를 -> '-'로 바꿔줌
console.log(joined);


