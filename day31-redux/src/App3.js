import { useState } from 'react';
import './styles/Box.css';
import { useSelector, useDispatch } from 'react-redux';

function App2() {
  const number = useSelector((state) => state.counter.number);
  return (
    <div className='App'>
      <h1>React Redux Ex</h1>
      <h2>{number}</h2>
      <Box1 />
    </div>
  );
}

const Box1 = () => {
  return (
    <div className='Box'>
      {/* <h2>Box1: {number}</h2> */}
      <Box2 />
    </div>
  );
};

const Box2 = () => {
  return (
    <div className='Box'>
      {/* <h2>Box2: {number}</h2> */}
      <Box3 />
    </div>
  );
};

const Box3 = () => {
  return (
    <div className='Box'>
      {/* <h2>Box3: {number}</h2> */}
      <Box4 />
    </div>
  );
};

const Box4 = () => {
  const number = useSelector((state) => state.counter.number);
  const isVisible = useSelector((state) => state.isVisible);
  const dispatch = useDispatch();
  return (
    <div className='Box'>
      <h2>Box4: {number}</h2>
      <h2>isVisible 값은 {isVisible ? '참' : '거짓'} 이다.</h2>
      <button onClick={() => dispatch({ type: 'PLUS' })}>PLUS</button>
      <button onClick={() => dispatch({ type: 'MINUS' })}>MINUS</button>
      <button onClick={() => dispatch({ type: 'CHANGE' })}>CHANGE</button>
    </div>
  );
};

export default App2;
