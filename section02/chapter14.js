// async
// 함수 앞에 붙이는 키워드, 어떤 함수를 비동기로 만들어주는 키워드
// -> 함수가 프로미스를 반환하도록 변환해주는 키워드

// async를 붙임으로서, return 자체를 그대로 반환하는게 아니라,
// ** return(=객체)를 결과 값으로 갖는 새로운 프로미스를 반환하는 함수로 변환한다. + PromiseStatus는 fulfilled 상태.
// ** return new Promise()를 결과 값으로 가지게 되면, PromiseStatus는 pending 상태로 유지.
async function getData() {
  //   return {
  //     name: "이정환",
  //     id: "winterlood",
  //   };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve()를 사용함으로서 성공상태로 변환
      resolve({
        name: "이정환",
        id: "winterlood",
      });
    }, 500);
  });
}

// console.log(getData());

// await
// ** async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

// function printData() {
//   getData().then((result) => {
//     console.log(result);
//   });
// }

async function printData() {
  const data = await getData(); // getData가 종료되길 기다리다가 결과값을 data에 담아줌
  console.log(data);
}

async function printData2() {
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve()를 사용함으로서 성공상태로 변환
      resolve({
        name: "이정환",
        id: "winterlood",
      });
    }, 700);
  }); // getData가 종료되길 기다리다가 결과값을 data에 담아줌
  console.log(data);
}

printData();
printData2();
