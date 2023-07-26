// // 조건문

// // if문
// if (5 > 3) {
//     console.log('얍!');
// }

// let number = Number(prompt('숫자를 입력해주세요!'));
// // 1. prompt() 로 사용자로부터 값을 입력받고(문자열)
// // 2. Number() 문자열-> 숫자형 형변환
// // 아래와 동일한 코드
// // let number2 = prompt('숫자 입력해주세요!')
// // number2 = Number(number2)

// // if (number > 10) {
// //   console.log('입력한 수는 10보다 크군요!');
// // } else {
// //   console.log('입력한 수는 10보다 작거나 같네요!');
// // }

// // if (number > 10) {
// //   console.log('입력한 수는 10보다 크군요!');
// // } else if (number === 10) {
// //   console.log('입력한 수는 10이네요!');
// // } else {
// //   console.log('입력한 수는 10보다 작네요!');
// // }

// if (number > 100 || number < 0) {
//     console.log('입력값이 잘못되었습니다. 숫자의 범위는 0 ~ 100');
// } else if (number >= 90) {
//     console.log('A');
// } else if (number >= 80) {
//     console.log('B');
// } else if (number >= 70) {
//     console.log('C');
// } else if (number >= 60) {
//     console.log('D');
// } else {
//     console.log('F');
// }

// // 중첩 if문
// let userId = 'user01';
// let userPw = '1234';

// // id, pw 검사하는 함수
// function loginUser() {
//     let inputId = prompt('아이디 입력');
//     let inputPw = prompt('비밀번호 입력');

//     // - userId와 inputId가 같다면
//     //    - userPw와 inputPw 를 비교
//     // - inputId에 빈값 입력됐다면
//     //    - '아이디 입력 안함' 문구 반환
//     // - 두 경우가 아니라면 (inputId가 틀렸을 때)
//     //    - '아이디 틀림' 문구 반환

//     if (userId === inputId) {
//         if (userPw === inputPw) {
//             return '로그인 성공';
//         } else {
//             return '비번 오류! 로그인 실패';
//         }
//     } else if (inputId === '') {
//         return '아이디 입력 안했음';
//     } else {
//         return '아이디 오류! 로그인 실패';
//     }
// }
// const result = loginUser();
// // -> loginUser 함수의 리턴값(반환값)을 result 변수에 저장
// console.log(result);

// console.log(new Date().getHours() > 12 ? '오후' : '오전');
let sum = 0;
for (let i = 0; i < 101; i++) {
    if (i % 2 === 0 || i % 5 === 0) {
        sum += i;
    }
}
console.log(sum);

for (let i = 0; i < 101; i++) {
    if (i % 13 === 0 && i % 2 === 1) {
        console.log(i);
    }
}

for (let i = 2; i < 10; i++) {
    console.log(`---${i} 단---`);
    for (let j = 1; j < 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// 문자열 관련 내장 메서드
let str1 = 'Strawberry Moon';
let str2 = '    Strawberry Moon    ';

// 문자열 인덱싱
console.log(str1[0]);
console.log(str1[0] + str1[12]);

// Sonny
console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9]);

// 문자열의 길이 (length는 메서드가 아닌 "속성")
console.log(str1.length);
console.log(str2.length);

// 대/소문자 변환
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

// 양끝 공백 제거
console.log(str2.trim());
console.log(str2.trim().length); // 'Strawberry Moon'.length 와 동일

// indexOf() 글자 위치 찾기
// 위치(index): 0부터 시작
console.log(str1.indexOf('w'));
console.log(str1.indexOf('r'));
console.log(str1.indexOf('x')); // 존재하지 않는 문자에 대해 검색하면 -1 반환

// slice() 문자열 자르기
console.log(str1.slice(11)); // 11 번 위치의 글자 ~ 끝
console.log(str1.slice(1, 5)); // start(1) ~ end-1(4)까지 자르기

// replace() 문자열 바꾸기
console.log(str1.replace('a', 'x'));
console.log(str1.replace('r', 'x'));
console.log(str1.replaceAll('r', '*'));

// split() 문자열 쪼개기 (배열로 변환)
let date = '23.03.10';
console.log(date.split('.'));
console.log(date.split('3'));

// repeat()
console.log('hi'.repeat(5));

////////////////////////////////////////
// 배열 내장 메서드
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['quokka', 'rabbit', 'puppy', 'hamster'];

// 배열에 값 추가
// arr1[5] = 6; // arr1 배열의 5번 인덱스에 6이라는 값 추가
// arr1[8] = 100; // 인덱스 건너뛰면 빈 값(empty)이 들어가게 됨

// push(): 끝에 요소 추가
arr1.push(6);
arr1.push(10);
console.log(arr1);

// pop(): 맨 끝 요소 제거
arr1.pop();
console.log(arr1);

// unshift(): 맨 앞에 요소 추가
arr1.unshift('cat');
console.log(arr1);

// shift(): 맨 앞에 요소 제거
arr1.shift();
console.log(arr1);

// includes(요소): 요소 있는지 없는지 검사 (true, false)
console.log(arr2.includes('quokka'));
console.log(arr2.includes('apple'));

// reverse()
console.log(arr1.reverse());
console.log(arr1); // 원본 배열이 변경된 것

// join(): join 안의 문자열 기준으로 병합
console.log(arr2);
console.log(arr2.join(''));
console.log(arr2.join('-'));

// 메서드 체이닝(method chaining)
// 여러 메서드를 연결해서 사용할 수 있다!
console.log('hello'.split(''));
console.log('hello'.split('').reverse());
console.log('hello'.split('').reverse().join(''));
