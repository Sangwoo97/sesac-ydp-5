import './App.css';
import Books from './Books';
import Foods from './Foods';
import Test from './Test';
import Test3 from './Test3';
import Test2 from './test2';

function App() {
  return (
    <div>
      <Test />
      <Test2 />
      <Foods food={'바나나'} />
      <Books title={'나의 하루는 4시, 40분에 시작된다.'} author={'김유진'} price={'13,500'} type={'자기계발서'} />
      <Test3 text={'App 컴포넌트에서 넘겨준 text props입니다.'} valid={() => console.log('콘솔 띄우기 성공!')} />
    </div>
  );
}

export default App;
