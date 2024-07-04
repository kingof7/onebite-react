// 1. 콜백 함수
// -> 자신이 아닌 다른 함수의 인수로서 전달된 함수

function main(value) {
    console.log("callback fucn 진입중...");
    console.log(value); // 콜백함수 자체가 출력됨.
    value(); // sub()를 호출한 거랑 똑같음.
    console.log("callback func end.");
}

function sub() {
    console.log("sub func is called by main func");
}

// main(sub); // sub라는 함수를 인수로 main에 전달

// -> 위에서 sub를 콜백함수라고 함, 인수로서 전달 되었기 떄문

// 함수 표현식 처럼 써도됨

// main(function () {
//     console.log("i am sub.");
// });

// main(() => {
//     console.log("this is arrow callback function.");
// });

// 콜백함수 사용 예제
// function repeat(count) {
//     for(let idx=1; idx<=count; idx++) {
//         console.log(idx);
//     }
// }

// function repeatDouble(count) {
//     for(let idx=1; idx<=count; idx++) {
//         console.log(idx * 2);
//     }
// }

// repeat(5);
// repeatDouble(5);

// 위처럼 하지말고,
function repeat(count, callback) {
    for(let idx=1; idx<=count; idx++) {
        callback(idx);
    }
}

repeat(5, function (idx) {
    console.log(idx);
});

repeat(6, (idx) => {
    console.log(idx);
});

// function setTimeout(callback, value) {...}
setTimeout(function() {
    console.log("after 500ms, called");
}, 500);

setTimeout(() => {
    console.log("after 1500ms, called");
}, 1500);

