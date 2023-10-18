let a: number = 1;
a = 2;
console.log(a);
let b: string = 'str';
let c: boolean = true;
let d: undefined;
let e: null = null;

let numArr: number[] = [1, 2, 3, 4, 5];
console.log(numArr);
// numArr = ['a', 'b']; type error
let strArr: Array<string> = ['apple', 'banana', 'melon'];

let arr1: (number | boolean | string)[] = [1, true, 'string'];

let arr2: Array<boolean | null | number[]> = [true, false, null, [1, 2, 3]];

let arr3: any[] = [1, 2, 3, 'wow', true, null];

let obj1: object = {
  name: 'www',
  grade: 1,
};
