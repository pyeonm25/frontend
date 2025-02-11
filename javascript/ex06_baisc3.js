// 비교연산자
// == != > < <= >= 

let num = 10;
// console.log(num == 10);
// console.log(num != 10);
// console.log(num >= 10);
// console.log(num <= 10);
// console.log(num > 10);
// console.log(num < 10);

console.log('10' == 10); // 값만 비교를 한다 
console.log('10' === 10); // 값 + 타입을 비교한다 
console.log(true == 'true'); // boolean 은 자동 형변환 하지 않아서 값 비교 안함 

let number = num += 10;
console.log(num)

let result = 1;
console.log(result);
result = number++;
console.log(`result = ${result} , number = ${number}`);
result = number--;
console.log(`result = ${result} , number = ${number}`);
result = ++number;
console.log(`result = ${result} , number = ${number}`);
result = --number;
console.log(`result = ${result} , number = ${number}`);

result = result %= 2;
console.log(result);
console.log("=========================")
number = '10';
console.log(number + 10); // 1010 