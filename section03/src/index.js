// const moduleData = require("./math"); // CJS 모듈
// const { add, sub } = require("./math"); // CJS 모듈, 구조 분해 할당

// import mul from "./math.js"; // math 모듈의 대표 함수를 지정
// import { add, sub } from "./math.js"; // ESM, 확장자까지 써준다 .js
import mul, { add, sub } from "./math.js"; // 대표 + 기타 합쳐서 사용
import randomColor from "randomcolor"; // 라이브러리에서 갖고옴

const color = randomColor();
console.log(color);
// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));
