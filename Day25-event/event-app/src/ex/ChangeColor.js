import React, { useState } from 'react';

const ChangeColor = () => {
  const [msg, setMsg] = useState('검정색 글씨');
  const [sty, setSty] = useState('black');
  const changeRed = () => {
    setMsg('빨간색 글씨');
    setSty('red');
  };
  const changeBlue = () => {
    setMsg('파란색 글씨');
    setSty('blue');
  };
  return (
    <div>
      <h1 style={{ color: sty }}>{msg}</h1>
      <button onClick={() => changeRed()}>빨간색</button>
      <button onClick={() => changeBlue()}>파란색</button>
    </div>
  );
};

export default ChangeColor;
