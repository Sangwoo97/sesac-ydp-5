import { useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber((n) => n + 1);
  };

  const increase2 = (num) => {
    setNumber((n) => n + num);
  };

  return (
    <div>
      <h1>Number counter</h1>
      <h2>{number}</h2>
      <button onClick={increase}>더하기</button>
      <button onClick={() => increase2(2)}>더하기</button>
    </div>
  );
};

export default Counter;
