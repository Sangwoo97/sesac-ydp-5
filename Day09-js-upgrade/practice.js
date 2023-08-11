function getInfo(lecture) {
    // TODO: 구조 분해 할당을 사용하여 값 추출
    const { name, part, leader } = lecture;

    // TODO: 출력 문장 생성
    const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader} 입니다.`;
    return output;
}

const lectureInfo = {
    name: 'SESAC x CODINGOn',
    part: 'WEB',
    leader: 'Sean',
};

const result = getInfo(lectureInfo);
console.log(result); // SESAC x CODINGOn 강의는 WEB 개발을 공부합니다. 수업의 리더는 Sean 입니다.

console.clear();
const c = [...'HELLO'];
console.log(c);
const word1 = 'abc';
const word2 = 'xyz';
console.log([...word1, ...word2]);

const values = [10, 20, 30];
const get = (a, ...rest) => {
    console.log(a);
    console.log(rest);
};
get(...values);

console.clear();

/////////////////////////
// 클래스
// : 객체 생성 템플릿 => 객체를 만들기 위해 사용!

// 집이라는 현실 세계의 객체를 만들어보자!
/* 
속성: 
    만들어진 연도(Number)
    집의 이름(String)
    창문 갯수(Number)
메서드:
    2023 - 만들어진 연도 콘솔창에 출력하는 "건물의 나이 메소드"
    창문의 갯수 콘솔창에 출력하는 메소드
*/
class House {
    // constructor: 객체 생성시마다 객체의 속성 초기화
    constructor(year, name, window) {
        this.year = year;
        this.name = name;
        this.window = window;
    }

    getAge() {
        console.log(`${this.name}은 건축한지 ${2023 - this.year}년 되었어요.`);
    }

    getWindow() {
        console.log(`${this.name}의 창문은 ${this.window}개 입니다.`);
    }
}

const house1 = new House(1990, '롯데캐슬', 1);
const house2 = new House(2007, '자이', 10);
house2.getWindow();

class Apartment extends House {
    constructor(year, name, window, floor, windowMaker) {
        super(year, name, window);
        this.floor = floor;
        this.windowMaker = windowMaker;
    }

    getAptInfo() {
        return `${this.year}에 지어진 ${this.name} 아파트의 총 층수는 ${this.floor}이며,
        창문의 개수는 ${this.window}개 입니다.`;
    }

    getWindow() {
        return `${this.name}아파트의 ${this.window}개의 창문은 ${this.windowMaker}회사에서 생산되었습니다.`;
    }
}

const apt1 = new Apartment(2022, '래미안', 3, 20, 'KCC');
console.log(apt1);
console.log(apt1.getAptInfo());
console.log(apt1.getWindow());
