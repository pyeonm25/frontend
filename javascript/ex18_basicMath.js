console.log(Math.random()); // 무작위로 1이하의 실수값을 가져옴 
console.log(Math.random() * 10); // 0 - 9.~~~
console.log(parseInt(Math.random() * 10)); // 0 - 9 
console.log(parseInt(Math.random() * 10) + 1); //  (0 - 9) + 1  => 1 ~ 10 ; 

// 5 ~ 15 

let num = parseInt(Math.random() * (15 - 5 + 1)) + 5;
console.log(num);

// 1. 랜덤값을 범위를 외부에서 가져오는 함수 한개 getRandom( 시작값 , 끝값) ;
// 2. 해당 함수를 사용해서  50 ~ 100까지 숫자를 랜덤으로 저장하고 그 수가 짝수인지 홀수인지 출력하는 checkNum 함수
// 3. 해당 함수를 출력하세요 [문제 1]  => 문제1번 풀고 DM

//4. 배열을 랜덤으로(-100 ~100) 사이의 숫자를 4개를 저장후에 전부 홀수인지 검사하는 isAllOddNum 함수를 만들고
//   전부 홀수이면 전부 홀수입니다, 전부 홀수가 아닙니다 출력하세요 [문제 2]  => 문제2번 풀고 DM 
