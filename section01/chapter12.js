// 선언형
function funcA() {
    console.log("funcA");
}

// 1. 함수 표현식

let varA = funcA; // 함수를 변수에 저장
varA(); // funcA라는 함수 자체가 콘솔에 찍힘

// 함수를 굳이 먼저 선언하지 않고, 변수에 담을 수 있음
// 함수를 만들자마자 변수에 담음 : 이런건 함수 표현식이라고 한다.

// 주의점
// 아래는 선언식이 아니라, 그냥 변수를 정의한 것이기 떄문에
// funcB() 이렇게 바로 호출 못함, varB라는 변수를 호출해야 됨.

// varB(); -> 호이스팅이 안되기 떄문에 실행부를 위에 사용할 수 없다.

let varB = function funcB() {
    console.log("funcB");
};
varB(); // ** 함수 표현식은 그냥 호출만해도 콘솔에 찍힘

varB = function () {
    console.log("funcB");
};

varB();
// -> funcB()를 호출하지 못하기 떄문에, 따라서 funcB 이름을 생략하고
// let varB = function () {} -> 이런식으로 선언하자마자 변수에 담을 수 있다.
// -> 이름이 없기 떄문에 익명함수라고 함
// + 그리고 일반 함수처럼 선언형이 아니기 때문에, 호이스팅이 불가하다.
// 호이스팅 : 선언부보다 실행부가 위에 있어도 인식하는 것.

// 2. 화살표 함수, arrow function
let varC = () => {
    return 1;
};

console.log(varC()); // ** 애로우 펑션은, 콘솔로그 안에 넣어야 찍힘

// 더 간결하게,

let varD = () => 1;
console.log(varD()); // ** 애로우 평선연, 콘솔로그 안에 넣어야 찍힘

let varF = (value) => value + 1;
console.log(varF(10));

let varG = (v) => {
    console.log(v);
    return v + 1;
}

console.log(varG(10));

let varH = (v) => {return v + 3};

console.log(varH(7));