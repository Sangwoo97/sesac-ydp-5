import React, { useState } from 'react';

const Disappear = () => {
  const [msg, setMsg] = useState('안녕하세요');
  const [msg2, setMsg2] = useState('사라져라');
  const change = () => {
    setMsg2((s) => (s === '사라져라' ? '생겨라' : '사라져라'));
    setMsg((s) => (s ? '' : '안녕하세요'));
  };

  return (
    <div>
      <button onClick={() => change()}>{msg2}</button>
      <h1>{msg}</h1>
    </div>
  );
};

export default Disappear;
