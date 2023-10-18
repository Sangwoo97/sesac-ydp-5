import { useState } from 'react';
import './styles/Box.css';
import { useSelector, useDispatch } from 'react-redux';

function App2() {
  const number = useSelector((state) => state.number);
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
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <div className='Box'>
      <h2>Box4: {number}</h2>
      <button onClick={() => dispatch({ type: 'PLUS' })}>PLUS</button>
      <button onClick={() => dispatch({ type: 'MINUS' })}>MINUS</button>
    </div>
  );
};

export default App2;
