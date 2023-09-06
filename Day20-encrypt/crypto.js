const crypto = require('crypto');

// createHash()
// : 지정한 해시 알고리즘으로 해시 객체를 생성하는 암호화 방식

const createdHashedPassword = (password) => {
    // createHash(알고리즘).update(암호화할 값).digest(인코딩 방식)
    return crypto.createHash('sha512').update(password).digest('base64');
};

// 해시함수의 한계 : 레인보우 테이블
// => 암호화된 비번을 빠르게 역추적해서 원본 비번을 찾아낼 수 있음
console.log(createdHashedPassword('1234'));

///////////
// pbkdf2(비밀번호, 솔트, 반복횟수, 키의길이, 알고리즘)
// - 비밀번호 기반 키 도출 함수, 주로 비번 저장시 사용
// - buffer형식의 데이터를 반환 -> toString() 이용해 문자열로 변환

// 단방향 암호화 생성 함수
function saltAndHashPassword(password) {
    const salt = crypto.randomBytes(16).toString('base64'); // 임의의 salt생성
    const iterations = 100; // 반복횟수
    const keylen = 64;
    const digest = 'sha512';

    const hash = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString('base64');

    return { salt, hash };
}

// 2. 암호 비교 함수
// : inputPassword(제공된 비번), salt, hash를 기반으로 새로운 해시를 생성하고,
// savedHash랑 비교
// 제공된 비번이랑 원래 비번이 같으면 두 해시값도 일치
function checkPassword(inputPassword, savedSalt, savedHash) {
    const iterations = 100; // 반복횟수
    const keylen = 64;
    const digest = 'sha512';

    const hash = crypto.pbkdf2Sync(inputPassword, savedSalt, iterations, keylen, digest).toString('base64');

    return savedHash === hash;
}

const password = '1234!';
const { salt, hash } = saltAndHashPassword(password);
console.log(`Salt: ${salt}, Hash: ${hash}`);

const inputPassword = '1234!';
const isMatch = checkPassword(inputPassword, salt, hash);
console.log(isMatch);
