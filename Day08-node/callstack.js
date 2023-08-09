const first = () => {
    second();
    console.log(1);
    return;
};

const second = () => {
    console.log(2);
    return;
};

first();
