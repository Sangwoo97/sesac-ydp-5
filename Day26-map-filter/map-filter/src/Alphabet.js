import React, { useState } from 'react';

export default function Alphabet() {
  const [list, setList] = useState([
    {
      id: 1,
      alpha: 'a',
    },
    {
      id: 2,
      alpha: 'p',
    },
    {
      id: 3,
      alpha: 'p',
    },
    {
      id: 4,
      alpha: 'l',
    },
    {
      id: 5,
      alpha: 'e',
    },
  ]);
  const [inputAlpha, setInputAlpha] = useState('');
  const addAlpha = () => {
    if (inputAlpha && inputAlpha !== '') {
      const newAlpha = list.concat({ id: list.length + 1, alpha: inputAlpha });
      setList(newAlpha);
    }
  };

  const deleteAlpha = (targetId) => {
    setList(list.filter((e) => e.id !== targetId));
  };
  return (
    <div>
      <input
        type='text'
        placeholder='알파벳 입력'
        value={inputAlpha}
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        // onKeyDown={(e) => {
        //   if (e.key === 'Enter') {
        //     addAlpha();
        //   }
        // }}
        onKeyDown={(e) => {
          if (e.nativeEvent.isComposing) {
            return;
          }
          if (e.code === 'Enter') {
            addAlpha();
          }
        }}
      />
      <button onClick={addAlpha}>ADD</button>
      <ol>
        {list.map((e, i) => (
          <li key={i} onDoubleClick={() => deleteAlpha(e.id)}>
            {e.alpha}
          </li>
        ))}
      </ol>
    </div>
  );
}
