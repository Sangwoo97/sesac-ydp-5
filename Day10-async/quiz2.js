const call = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(name);
            resolve(name);
        }, 1000);
    });
};

const back = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('back');
            resolve('back');
        }, 1000);
    });
};

const hell = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('callback hell');
        }, 1000);
    });
};

const exec = async () => {
    let user = await call('kim');
    console.log(user + ' 반가워');
    let b = await back();
    console.log(b + ' 을 실행했구나');
    let c = await hell();
    console.log('여기는 ' + c);
};

exec();
