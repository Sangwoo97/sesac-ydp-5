const getValue = () => {
    // const inputVal = document.querySelector('input').value;
    // alert(inputVal);
    const value = $('input').val();
    alert(value);
};
const setValue = () => {
    // document.querySelector('input').value = '하이하이~';
    $('input').val('하이안녕~');
};

const changeCssJS = () => {
    const span = document.querySelector('span');
    span.style = 'font-size: 20px;  color: red';
};
const changeCssJquery = () => {
    // $('span').css('font-size', '40px');
    // $('span').css('color', 'blue');

    $('span').css({ fontSize: '40px', color: 'blue' });
};
const getCssJquery = () => {
    console.log($('span').css('color'));
};

const changeAttrJS = () => {
    const a = document.querySelector('a');
    a.setAttribute('href', 'https://www.naver.com');
};
const changeAttrJquery = () => {
    $('a').attr('href', 'https://www.daum.net');
};

const changeTextJS = () => {
    const p_text = document.querySelector('.p-text');
    p_text.innerText = '바뀌었어요';
};
const changeTextJquery = () => {
    $('.p-text').text('jquery로 변경');
};

const changeHtmlJS = () => {
    const p_html = document.querySelector('.p-html');
    p_html.innerHTML = '<h3>javascript</h3>';
};

const changeHtmlJquery = () => {
    $('.p-html').html('<h3>jquery</h3>');
};

// 요소 추가하기
// append()
function appendJS() {
    // 1. color 클래스 갖는 요소 선택하고
    // 2. li 태그 요소를 생성한 후
    // 3. li 태그의 텍스트로 '마지막 자식으로 추가된 js' 추가
    // 4. color 클래스를 갖는 요소에 "맨 마지막 자식"으로 li 요소 추가
    // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/append
    const color = document.querySelector('.colors');
    const li = document.createElement('li');
    li.innerText = '마지막 자식으로 추가된 js';
    color.append(li);
}

function appendJquery() {
    $('.colors').append('<li>마지막 자식으로 추가된 js</li>');
}

// prepend()
function prependJS() {
    // 1. color 클래스 갖는 요소 선택하고
    // 2. li 태그 요소를 생성한 후
    // 3. li 태그의 텍스트로 '첫 자식으로 추가된 js' 추가
    // 4. color 클래스를 갖는 요소에 "가장 첫 자식"으로 li 요소 추가
    // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend
    const color = document.querySelector('.colors');
    const li = document.createElement('li');
    li.innerText = '첫 자식으로 추가된 js';
    color.prepend(li);
}

function prependJquery() {
    $('.colors').prepend('<li>첫 자식으로 추가된 js</li>');
}

// before()
function beforeJS() {
    // 1. green 클래스를 갖는 요소 선택하고
    // 2. li 태그 요소를 생성한 후
    // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)' 추가
    // 4. green 클래스를 갖는 요소의 "바로 이전 형제 요소"로 li 요소 추가
    // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/before
    const green = document.querySelector('.green');
    const li = document.createElement('li');
    li.innerText = 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)';
    green.before(li);
}

function beforeJquery() {
    $('.green').before('<li>green 클래스를 갖는 요소의 이전 형제 요소로 추가(jquery)</li>');
}

// after()
function afterJS() {
    // 1. green 클래스를 갖는 요소 선택하고
    // 2. li 태그 요소를 생성한 후
    // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)' 추가
    // 4. green 클래스를 갖는 요소의 "바로 다음 형제 요소"로 li 요소 추가
    // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/after
    const green = document.querySelector('.green');
    const li = document.createElement('li');
    li.innerText = 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)';
    green.after(li);
}

function afterJquery() {
    $('.green').after('<li>green 클래스를 갖는 요소의 다음 형제 요소로 추가(jquery)</li>');
}

function removeJS() {
    const li2 = document.getElementById('li2');
    li2.remove();
}

function removeJquery() {
    $('#li2').remove();
}

function emptyJS() {
    const ul = document.querySelector('ul.nums');
    ul.innerHTML = '';
}

function emptyJquery() {
    $('ul.nums').empty();
}

// 요소 탐색하기
function findParent() {
    // child2 클래스 갖는 요소의 부모 요소
    console.log(document.querySelector('.child2').parentElement);
    console.log($('.child2').parent());
}

function findParents() {
    // JS 없습니다! 패스~~
    console.log($('.child2').parents());
}

function findNext() {
    // child2 클래스 갖는 요소의 다음 형제 요소
    console.log(document.querySelector('.child2').nextElementSibling);
    console.log($('.child2').next());
}

function findPrev() {
    // child2 클래스 갖는 요소의 이전 형제 요소
    console.log(document.querySelector('.child2').previousElementSibling);
    console.log($('.child2').prev());
}

function findChildren() {
    // parent 클래스 갖는 요소의 자식 요소
    console.log(document.querySelector('.child2').parentElement.children);
    console.log($('.child2').parent().children());
}

// 클래스 조작하기
function addClass() {
    // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 추가
    // const hi = document.getElementById('hi');
    // hi.classList.add('fs-50');
    $('#hi').addClass('fs-50');
}

function removeClass() {
    // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 삭제
    // const hi = document.getElementById('hi');
    // hi.classList.remove('fs-50');
    $('#hi').removeClass('fs-50');
}

function hasClass() {
    // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 포함 여부 확인
    // const hi = document.getElementById('hi');
    // console.log(hi.classList.contains('fs-50'));
    console.log($('#hi').hasClass('fs-50'));
}

function toggleClass() {
    // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 토글 (있으면 삭제, 없으면 추가)
    // const hi = document.getElementById('hi');
    // hi.classList.toggle('bg-pink');
    $('#hi').toggleClass('bg-pink');
}
