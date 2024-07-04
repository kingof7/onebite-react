// 1. if 조건문 (if문)
let num = 10;

if(num >= 10) {
    // console.log("num은 10 이상입니다.");
    // console.log("조건이 참입니다.");
} else if(num >= 5) {
    // console.log("num은 5 이상입니다.");
} else if(num >= 3) {
    // console.log("num은 3 이상입니다.");
} else {
    // console.log("조건이 거짓입니다.");
}

// 2. Swtich 문
// if문과 기능자체는 동일
// 다수의 조건을 처리할 때 if보다 더 직관적이다.

let animal = "cat";

switch (animal) {
    case "cat":
        console.log("cat");
    case "dog":
        console.log("dog");
    case "bear":
        console.log("bear");
    case "snake":
        console.log("snake");
    case "tiger":
        console.log("tiger");
}

console.log("\n");

let animal2 = "elephant";

switch (animal2) {
    case "cat":
        console.log("cat");
        break;
    case "dog":
        console.log("dog");
        break;
    case "bear":
        console.log("bear");
        break;
    case "snake":
        console.log("snake");
        break;
    case "tiger":
        console.log("tiger");
        break;
    default:
        console.log("그런 동물은 없습니다.");
}




