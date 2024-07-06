// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
arr1.push(4);
arr1.push(5,6,7);
const newLength = arr1.push(8, 9, 10); // push후의 arr1의 길이를 newLength에 저장

console.log(arr1);
console.log(newLength);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

console.log(poppedItem);
console.log(arr2);

console.log('\n');

// 3. shift = 왼쪽으로 땡겨서 뺸다.
// 배열의 맨 앞에 있는 요소를 제거

let arr3 = [1,2,3];
const shiftedItem = arr3.shift(); // 1이 제거
console.log(shiftedItem, arr3);

// 4. unshift = 왼쪽부터 집어넣는다.
// 배열의 맨 앞에 새로운 요소를 추가
let arr4 = [1,2,3];
const newLen2 = arr4.unshift(0);
console.log(newLen2, arr4);

// shift와 unshift는 push와 pop보다 느림
// 모든 요소의 인덱스를 당기거나 밀어야되니까

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1,2,3,4,5];
let sliceArr = arr5.slice(2, 5); // 시작인덱스 마지막 인덱스 + 1, 시작인덱스부터 마지막인덱스+1 전까지 자름
let sliceArr2 = arr5.slice(2); // 이렇게 시작인덱스만 써도됨.
console.log(sliceArr);
console.log(arr5); // 원본 배열은 변하지 않음
console.log(`sliced 2 : ${sliceArr2}`);

let sliced3 = arr5.slice(-1); // 뒤에서 부터 1개만 자름
let sliced4 = arr5.slice(-3); // 뒤에서부터 3개 잘라라
console.log(sliced3);
console.log(sliced4);

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서, 새로운 배열을 반환
let arr6 = [1,2];
let arr7 = [3,4];
let concatedArr = arr6.concat(arr7);
console.log(concatedArr);