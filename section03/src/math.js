// math 모듈

// ESM 내보내기
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// 내보내기
// 프로퍼티 : 함수
// 좌우 이름이 같으면 한번만 쓴다.
// module.exports = {
//   // CJS = Common JS 기능
//   add,
//   sub,
// };

// ESM = ES 모듈 (package.json에 "type": "module" 추가했음)
// export { add, sub };

// math 모듈을 대표하는 기본값
export default function multiply(a, b) {
  return a * b;
}
