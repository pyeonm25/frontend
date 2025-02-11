let arr1 = [];
let arr2 = new Array();

console.log(typeof arr1);
console.log(typeof arr2);

arr1[0] = 100;
arr1[1] = 200;
arr1[3] = 300;

console.log(arr1[2] == undefined);    // empty == undefined

arr2 = new Array(5);  // new var[5];

console.log(arr2);

array = [1, '2', true, NaN, {}, [100, 20, 30, 40, 50], [], 10.1234123, undefined, null,
  function test() { console.log("hello") }
];

console.log(array);
array[array.length - 1]();

for (let i = 0; i < array.length; i += 1) {
  console.log(`index ${i} = ${array[i]}`);
  // console.log("index " + i + " = " + array[i]);
}


console.log("===============");
console.log(array[-1]);
array[-1] = "test";

console.log("===============");

for (let i = 0; i < array.length; i += 1) {
  console.log(`index ${i} = ${array[i]}`);
  // console.log("index " + i + " = " + array[i]);
}

// 자바스크립트는 자유도가 높기 때문에
// 배열 => 음수 안쓴다
// 배열 => 공통의 자료형만 사용한다 