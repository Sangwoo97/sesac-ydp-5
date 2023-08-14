const goMart = () => {
    console.log('마트에가서 어떤 음료를 살지 고민');
};

const pickDrink = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('고민끝');
            product = '콜라';
            price = 1000;
            resolve();
        }, 2000);
    });
};

const pay = () => {
    console.log(`상품명: ${product} 가격: ${price}`);
};

let product;
let price;
goMart();
pickDrink().then((r) => {
    pay();
});
// pay(product, price);

// Promise
// 미래의 성공 실패에 대한 결과값을 "약속"한다는 의미.
// then이나 catch로 이어받을 수 있음
// => 성공이든 실패든 무언가의 최종결과
// resolved: 성공
// rejected: 실패

const promise1 = (flag) => {
    return new Promise((res, rej) => {
        if (flag) {
            res(`현재 프로미스의 상태: 성공(resolved) ${flag}`);
        } else {
            rej(`현재 프로미스의 상태: 실패(rejected) ${flag}`);
        }
    });
};

promise1(true)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

function goMart() {
    console.log('마트에 가서 어떤 음료를 살지 고민한다..');
}

function pickDrink() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('고민 끝!!!');
            product = '제로콜라';
            price = 2000;
            resolve();
        }, 3000);
    });
}

function pay() {
    console.log(`상품명: ${product}, 가격: ${price}`);
}

async function exec() {
    goMart();
    await pickDrink();
    pay();
}
exec();
