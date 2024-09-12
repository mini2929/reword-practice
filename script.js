// 단수의 html 요소 선택 시
const h1 = document.querySelector("h1");
console.log(h1); // h1

// 특정 부모요소 안쪽의 자식 요소 탐색 선택
const title = document.querySelector(".title a");
console.log(title); //a

// 복수개의 요소는 배열화되어 나타나게됨(유사배열)
const lis = document.querySelectorAll("ul li");
console.log(lis); // NodeList(4) [li, li, li, li]
console.log(lis[2]); // text content list3
console.dir(lis);

// 프로그래밍 언어에서는 처음 값이 0

// 반복문
for(let i = 0; i < lis.length; i++) {console.log(lis[i])};
// <= 크거나 같냐 혹은 < 크다 랑 주의할 것
for(let i = 0; i <= 3; i++ ) console.log(lis[i]);
// 한 줄일경우 중괄호{} 생략 가능

// 자바스크립트에서 함수 만드는 법
// 1. 함수 선언식
function plus (num1, num2){
    const result = num1+num2;
    return result;
}

console.log(plus(2,4));

// 2. 함수 표현식(대입형함수, 변수에 익명함수 대입)
const minus = function(num1,num2) {
    const result = num1 - num2;
    return result; // 6
};

console.log(minus(3,1)); // 2

// 3. 화살표 함수로 축약된 함수 표현식
const multiply = (num1, num2) => {
    return num1*num2;
};
// 화살표 함수에서는 function 키워드 생략, 중괄호 안쪽에 return문만 있으면 중괄호와 return문도 생략 가능
// const multiply = (num1, num2) => num1*num2;

console.log(multiply(3,3)); // 9