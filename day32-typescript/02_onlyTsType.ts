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
