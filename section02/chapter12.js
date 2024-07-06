function add(a, b, callback) {
  const sum = a + b;
  //   console.log(`before callback : ${a}, ${b}`);
  //   console.log("wating for 3000ms...");
  //   setTimeout(() => {
  //     callback(sum);
  //   }, 3000);
}

// task();

add(1, 2, (value) => {
  //   console.log(`after callback : ${value}`);
});

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food); // food라는 인수를 다시 callback 함수에 전달 (바깥으로)
  }, 1000);
}

function coolDown(food, callback) {
  console.log(`${food} 식히는 중..`);
  setTimeout(() => {
    const collDownFood = `식은 ${food} 완성`;
    callback(collDownFood);
  }, 1500);
}

function haveFood(food, callback) {
  console.log(`${food} 처먹는 중...`);
  setTimeout(() => {
    const finish = "거의 다 쳐먹음.";
    callback(finish);
  }, 3000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezing = `${food} 남은거 냉동실에 처넣음`;
    callback(freezing);
  }, 500);
}

// 콜백 지옥: 인덴트(>) 가 깊어지게 됨
orderFood((v) => {
  console.log(v); // orderFood내의 const food를 갖고 나올 수 있음.
  coolDown(v, (coolDownFood) => {
    console.log(coolDownFood);
    haveFood(v, (finish) => {
      console.log(finish);
      freezeFood(v, (freezing) => {
        console.log(freezing);
      });
    });
  });
});
