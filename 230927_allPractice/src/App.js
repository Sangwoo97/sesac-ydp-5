import React, { useState } from 'react';
import Input from './Input';
import Result from './Result';
import Select from './Select';

function App() {
  const [content, setContent] = useState('');
  const [img, setImg] = useState('apple.png');
  const [bColor, setBColor] = useState('black');
  const [color, setColor] = useState('black');
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Select setImg={setImg} setBColor={setBColor} setColor={setColor} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Input setContent={setContent} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Result content={content} img={img} bColor={bColor} color={color} />
      </div>
    </>
  );
}

export default App;
