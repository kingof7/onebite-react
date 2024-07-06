// 1. 단락평가 (앞의 함수만 실행 됨)
function returnFalse() {
    console.log("False 함수");
    return false;
}

function returnTrue() {
    console.log("True 함수");
    return true;
}

console.log(returnFalse() && returnTrue()); // 단락 평가 작동

console.log(returnTrue() && returnFalse()); // 단락 평가 작동 안됨

console.log(returnTrue() || returnFalse()); // 작동

function returnFalsy() {
    console.log("False 함수");
    return undefined;
}

function returnTruethy() {
    console.log("True 함수");
    return 10;
}

console.log(returnTruethy() || returnFalsy()); // 단락 평가작동, 트루시값인 10만 반환하고 말음

console.log(returnFalsy() && returnTruethy()); // 단락 평가작동, 펄시한 값 찍고 끝

console.log("\n\n\n");

// 2. 단락 평가 활용 사례

function printName(person) {
    // if(!person) {
    //     console.log("person에 값이 없음");
    //     return;
    // }
    // console.log(person.name);
    
    // console.log(person && person.name); // person에서 undefined이기 떼문에, 펄시한 값이라서 바로 찍고 끝
    const name = person && person.name;
    console.log(name || "person에 값이 없음"); // undefined or truthy -> truthy가 찍힘
}

printName(); // 펄시, person의 값으로 아무것도 안넘겨줌
printName({name : "이종화"}); // 트루시한 값

// + 꿀팁
// 트루시 || 트루시 -> 첫번쨰 트루시값이 찍힘 (앞에 것만 검사하고 끝나니까)
// 트루시 && 트루시 -> 뒤에있는 트루시값이 찍힘 (뒤에 것까지 검사하니까)

