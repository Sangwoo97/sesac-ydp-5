function numArrLen(arr: number[]): number {
  return arr.length;
}

function strArrLen(arr: string[]): number {
  return arr.length;
}

console.log(numArrLen([1, 2, 3]));
console.log(strArrLen(['1', '2', '3', '4']));

// T를 사용하여 매개변수를 선언하는 공간을 하나 더 만듬
// => type만 올 수 있음
function arrLen<T>(arr: T[]): number {
  return arr.length;
}

console.log(arrLen<string>(['1', '2', '3', '4']));
console.log(arrLen<number>([1, 2, 3, 4]));
console.log(arrLen<string | number>([1, 2, 3, '4']));

function printSome<T>(a: T, b: T): void {
  console.log(a, b);
}

printSome<string>('hi', 'hello');
printSome<number>(100, 200);
printSome<boolean[]>([true, false], [false, false]);

function printSome2<T, U>(a: T, b: U): void {
  console.log(a, b);
}

printSome2<string, number>('1', 1);

interface Phone<T> {
  company: string;
  createdAt: Date;
  option: T;
}

type iphoneOption = {
  color: string;
  storage: number;
};

const iphone15: Phone<iphoneOption> = {
  company: 'apple',
  createdAt: new Date('2023-10-05'),
  option: {
    color: 'black',
    storage: 128,
  },
};

console.log(iphone15);

type galaxyOption = {
  color: string;
  isBuz: boolean;
};

const galaxy23: Phone<galaxyOption> = {
  company: 'samsung',
  createdAt: new Date('2023-10-05'),
  option: {
    color: 'blue',
    isBuz: true,
  },
};

console.log(galaxy23);

function sum2(...arr: number[]): number {
  let res: number = 0;
  arr.forEach((e) => (res += e));
  return res;
}

console.log(sum2(1, 2, 3, 4, 10));

function arrElement<T>(arr: T[], index: number): any {
  return arr[index] ? arr[index] : false;
}
console.log(arrElement<string>(['a'], 1));
