// 선택적 매개변수(?) 는 맨 뒤에 있어야 함
function print(a: number, b: number, c?: number): void {
  console.log('print() 출력 결과');
  console.log(a);
  console.log(b);
  console.log(c);
}

print(2, 4);

function print(a: number, b: number, c = 100): void {
  console.log('print2() 출력 결과');
  console.log(a);
  console.log(b);
  console.log(c);
}

print(2, 4, 6);

function sayHello(): void {
  console.log('Hello~');
}
sayHello();

function sayHello2(): string {
  return 'Hello~~';
}
console.log(sayHello2());

function concatString(x: string, y: string): string {
  return x + y;
}
console.log(concatString('안녕', '하세유'));

function circleArea(r: number): number {
  return r * r * Math.PI;
}
console.log(circleArea(5));

const squareArea = (x: number, y: number): number => {
  return x * y;
};
console.log(squareArea(1, 2));

const triangleArea = (w: string, h: string): number => {
  return (parseInt(w, 10) * parseInt(h, 10)) / 2;
};

console.log(triangleArea('3', '4'));

interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string;
}

const sesac: Greet = {
  name: 'sesac',
  hi() {
    return '여기는' + this.name + '캠퍼스';
  },
  bye(a: number) {
    return `작별 인사를 ${a}번 했습니다.`;
  },
};

console.log(sesac.hi());
console.log(sesac.bye(5));

function goingOn(): never {
  while (true) {
    console.log('go');
  }
}

function sum(a: string, b: string): string; // 선언부
function sum(a: number, b: number): number;
function sum(a: any, b: any) {
  return a + b;
} // 구현부

console.log(sum('가', '나'));
console.log(sum(10, 20));
// console.log(sum(10, '얏호'));
