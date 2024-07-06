// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

console.log(arr2);

let obj1 = {
    a: 1,
    b: 2,
};
let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};

console.log(obj2);

function funcA(p1, p2, p3) { // 값으로 일일히 받는다.
    console.log(p1, p2, p3);
}
funcA(...arr1);

// 2. Rest 매개변수
// -> 나머지 매개변수
function funcB(...rest) { // Rest 매개변수, 배열형태로 그대로 받는다, 배열에 한방에 다 저장
    // console.log(typeof rest);
    // console.log(rest.length);
    console.log(`array: [${rest}]`);
}
funcB(...arr1);

function funcB2(one, ...rest) { // Rest 매개변수, 배열형태로 그대로 받는다, 배열에 한방에 다 저장
    console.log(`one: ${one}`); // rest[0]을 one으로 따로 뺌
    console.log(`array: [${rest}]`); // rest[1]부터 나머지값 저장
}
funcB2(...arr1);

