// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
// console.log(date1);

// let date2 = new Date("1997/01/07/10:10:10");
let date2 = new Date(1992, 1, 17, 10, 25, 35);
// console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
// UTC라고 함
let ts1 = date1.getTime();
// console.log(ts1);

let date4 = new Date(ts1);
// console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 인덱스 개념이라 +1 해야함.
let date = date1.getDate();
let hours = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();

// console.log(year, month, date, hours, minutes, seconds);

// 4. 시간 수정하기
date1.setFullYear(2012);
date1.setMonth(3); // 3월이 됨
date1.setDate(9);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);
console.log(date1);

// 5. 시간을 여러 포맷으로 출력하는 법
console.log(date1.toDateString()); // 시간 제외, 날짜만
console.log(date1.toLocaleString()); // 우리나라에 맞게 현지시간으로