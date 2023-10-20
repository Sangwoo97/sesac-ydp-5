let drink: [string, string] = ['사이다', '롯데'];
drink[0] = 'cider';
drink[1] = 'lotte';
console.log(drink);

let drink2: readonly [string, number] = ['사이다', 2000];

type productInfo = [number, string, number]; // type 별칭
let product1: productInfo = [1, '로지텍 MX master3', 1300000];
let product2: productInfo = [2, '로지텍 K380', 52000];
let product3: productInfo = [3, '로지텍 MX master3', 1300000];

enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = '아메리카노',
  latte = '카페라테',
}

let val: any;
val = true;
val = '하이';
let val2;
val2 = false;
val2 = '바이';

let olimpic_newgame: readonly [object, boolean] = [{ name: '쇼트트랙', type: '혼성계주' }, true];

// let arrA: any[] = [1, true, 'string'];
// let arrB = [1, true, 'string'];
// console.log(arrA, arrB);

interface Student {
  name: String;
  isPassed: boolean;
}
const student1: Student = {
  name: 'Kimsangwoo',
  isPassed: true,
};

// type Score = 'A+' | 'A' | 'B+' | 'B' | 'C' | 'D';
enum Score {
  Aplus = 'A+',
  A = 'A',
}

interface BaseballClub extends Student {
  position: string;
  height: number;
  backNumber?: number;
  [grade: number]: Score;
}

const otani: BaseballClub = {
  name: 'otani',
  isPassed: true,
  position: 'pitcher',
  height: 193,
  1: Score.A,
};

otani.position = '투수';
otani['height'] = 200;
console.log(otani);

// 교차 타입: 두개 이상의 타입을 합치는 것
interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string;
  color: string;
  price: number;
}

type ToyCar = Toy & Car;
const toyCar: ToyCar = {
  name: 'tayo',
  start() {
    console.log('출발 ~');
  },
  color: 'blue',
  price: 5000,
};

// 2. type
type Gender = 'F' | 'M';
type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender;
};

let daniel: Person = {
  name: 'daniel',
  age: 20,
  gender: 'F',
  like: ['minji', 'hani'],
};

interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}

let heroGame_A: Game = {
  title: 'DC 언체인드',
  price: 5000,
  desc: 'DC 히어로 어쩌구',
  category: '액션',
  platform: '모바일',
};

let heroGame_B: Game = {
  title: 'DC 언체인드',
  price: 5000,
  category: '액션',
  platform: '모바일',
};
