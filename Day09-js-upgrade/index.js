const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];

const [one, two, three, four, five] = arr1;
console.log(one, two, three, four, five);

const [a, b, c] = arr2;
console.log(a, b, c);

let num1 = 1;
let num2 = 2;
[num1, num2] = [num2, num1];
console.log(num1, num2);

const obj = {
    title: '엘리멘탈',
    content: '재밌음',
    num: 5,
};
const { num: n1, title, content } = obj;
console.log(title, content, n1);
