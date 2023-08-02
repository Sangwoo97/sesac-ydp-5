console.log($('#div1'));
const submitJs = () => {
    const div1 = document.getElementById('div1');
    div1.innerText = '반갑습니다.';

    div1.setAttribute('style', 'border: 2px solid red;');
};

const submitJquery = () => {
    $('#div1').text('안녕하세요 ~');
    $('#div1').css('border', '2px dotted blue');
};

const colorsJs = document.querySelectorAll('.color');
const colorsJquery = $('.color');

console.log(colorsJs);
console.log(colorsJquery);

colorsJs.forEach((i) => {
    i.addEventListener('click', () => {
        i.style.color = 'red';
    });
});

colorsJquery.on('click', function () {
    console.log($(this));
    $(this).css('background-color', 'skyblue');
});
