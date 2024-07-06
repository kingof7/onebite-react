// Promise
// Promise - pending ---- resolve (=fulfilled)
//                   |___ reject

function add10(num) {
  // Promise에 전달되는 콜백함수를 executor라고한다.
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업
    setTimeout(() => {
      // console.log("안녕");
      // resolve("안녕"); // 성공상태로 변경 및 "안녕"값을 PromiseResult에 전달
      // console.log("실패");
      // reject("실패이유?"); // 실패상태로 변경 및 PromiseResult 저장

      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num은(는) 숫자가 아닙니다.");
      }
    }, 500);
  });

  return promise;
}

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

// then 메서드 // resolve 일때만 실행됨.
// catch 메서드 // reject 일때 실행됨.
// promise.catch((error) => {
//   console.log(error); // reject 상태 일때, reject() 안에 담겼던 에러 메시지.
// });

// Promise Chaining : then .. then... then... catch를 연달아서 사용 가능하므로.
// promise
//   .then((value) => {
//     // resolve에 넘겨줬던 num + 10이 value에 담김
//     // promise의 상태가 reject라면 이 함수(then)는 실행되지 않음.
//     console.log(value);
//   })
//   .catch((error) => {
//     // *** catch를 연달아 쓸 수 있는 이유 : promise.then() 메서드는 다시 promise 객체를 반환하기 때문.
//     console.log(error); // reject 상태 일때, reject() 안에 담겼던 에러 메시지.
//   });

// 콜백 지옥을 해결.
add10(0)
  .then((result) => {
    // result = add10(0)의 실행결과(=PromiseResult)
    console.log(result);
    return add10(result); // return이 없으면 p가 그대로 반환되지만, return 을 붙이면 그 객체가 새로 반환된다.
  })
  .then((result) => {
    // result = add10(0+10)의 실행결과
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    // 어떤 then에서 실패하던 상관없이 마지막엔 catch를 무조건 탄다.
    console.log(error);
  });
