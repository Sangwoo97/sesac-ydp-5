// bcrypt
// : 비밀번호 암호화하는 알고리즘 중 하나
// : 주로 강력한 보안 필요할 때 사용
// : blowfish 암호를 기반으로 설계된 단방향 암호화 함수
// (보안 강화하기 위해 해쉬화 하는 것으로 원본 데이터를 복원하는 기능은 없음)

const bcrypt = require('bcrypt');

const originalPassword = '1234';
const saltRounds = 10;

// 비밀번호 해싱 함수
function hashPassword(password) {
    return bcrypt.hashSync(password, saltRounds);
}

// 원본 비밀번호와 해시된 비밀번호가 일치하는지 확인하는 함수
function comparePassword(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
}

const hashedPassword = hashPassword(originalPassword);
console.log(`Hashed Password : ${hashedPassword}`);

const isMatch = comparePassword(originalPassword, hashedPassword);
console.log(isMatch);
