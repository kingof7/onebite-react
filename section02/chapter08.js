// 5가지의 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1,2,3];
// function() 은 배열의 갯수만큼 호출되니까 총 3번 호출
// item idx arr
// 1     0  
// 2     1
// 3     2

arr1.forEach(function (item, idx, arr) {
    console.log(idx, item * 2);
});
console.log('\n');

let doubledArr = [];

arr1.forEach((item) => {
    doubledArr.push(item * 2);
});

console.log(doubledArr);
console.log('\n');

// 2. includes
// 배열에 특정 요소가 있는지 확인한다.
let arr2 = [1, 2, 3, 4];
let isInclude = arr2.includes(3); // 3이라는 요소 포함여부
console.log(isInclude);
console.log('\n');

// 3. indexOf
// 특정 요소의 인덱스, 위치를 찾아서 반환
let arr3 = [1,2,3];
let index = arr3.indexOf(2); // 2라는 값의 인덱스?
let index2 = arr3.indexOf(20);
console.log(index);
console.log(index2); // -1
console.log('\n');

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
// arr.findIndex(true) 인 순간의 첫 인덱스.


let arr4 = [1,2,3];
const foundIndex = arr4.findIndex((item)=>{
    if(item === 2) return true; // 이 조건에 맞는 위치를 찾아서 반환
});
console.log(foundIndex); // 2의 인덱스는 1

const foundIndex2 = arr4.findIndex((item) => item % 2 !== 0);
console.log(foundIndex2);


let objectArr = [
    { name: "이종화" },
    { name: "이정환" },
];

// indexOf는 기본적으로 얕은 비교임,
// 따라서 얕은 비교로는 못찾아서 findIndex 써야함
let idx = objectArr.indexOf({ name : "이정환" });
console.log(idx); // -1

// 깊은 비교해야됨
let foundIndex3 = objectArr.findIndex(
    (item) => item.name === "이정환" // true인 값을 return으로 반환한다.
);

let foundIndex32 = objectArr.findIndex(
    (item) => {return item.name === "이정환"} // true인 값을 return으로 반환한다.
);

console.log(foundIndex3);
console.log(foundIndex32);
console.log('\n');

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [
    { name: "이종화" },
    { name: "이정환" },
];

const found = arr5.find(
    (item) => item.name === "이정환"
);
console.log(found);