import { useState } from 'react';
import './styles/Box.css';
import { useSelector, useDispatch } from 'react-redux';

function Practice() {
  const [num, setNum] = useState(0);
  const money = useSelector((state) => state.money.money);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <h1>React Redux 실습</h1>
      <hr />
      <h2>코딩온 은행</h2>
      <h3>잔액 : {money}</h3>
      <div>
        <input type='number' value={num} onChange={(e) => setNum(e.target.value)} />
        <button onClick={() => dispatch({ type: 'DEPOSIT', payload: num })}>입금</button>
        <button onClick={() => dispatch({ type: 'WITHDRAW', payload: num })}>출금</button>
      </div>
    </div>
  );
}

export default Practice;
