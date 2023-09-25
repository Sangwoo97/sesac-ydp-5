import logo from './logo.svg';
import './App.css';
import Larva from './Larva';

const App = () => {
  const name = '뚜뚜';
  const animal = '강아지';
  const a = 4;
  const b = 3;
  const title = 'Hello World';
  return (
    <div>
      이것은 div입니다.
      <h3>이것은 div안에 있는 h3태그 입니다.</h3>
      <h2>제 반려 동물의 이름은 {name}입니다.</h2>
      <h2>
        {name}는 {animal} 입니다.
      </h2>
      {3 + 5 === 8 ? '정답입니다.' : '오답입니다.'}
      <br />
      {a > b && 'a가 b보다 큽니다.'}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="test">{title}</div>
        <div>
          아이디: <input />
          <br />
          <br />
          비밀번호: <input />
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="block red"></div>
        <div className="block orange"></div>
        <div className="block yellow"></div>
        <div className="block green"></div>
        <div className="block blue"></div>
        <div className="block navy"></div>
        <div className="block purple"></div>
      </div>
    </div>
  );
};

export default App;
