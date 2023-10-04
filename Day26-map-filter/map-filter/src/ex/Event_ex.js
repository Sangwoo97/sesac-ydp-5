import React, { useState } from 'react';

const Event_ex = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [list, setList] = useState([
    { id: 1, name: '코디', email: 'codi@gmail.com' },
    { id: 2, name: '윤소희', email: 'yoonsohee@gmail.com' },
  ]);

  const deleteList = (targetId) => {
    setList(list.filter((e) => e.id !== targetId));
  };

  return (
    <div>
      <input type='text' placeholder='이름' value={name} onChange={(e) => setName(e.target.value)} />
      <input
        type='text'
        placeholder='이메일'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => {
          if (e.nativeEvent.isComposing) {
            return;
          }
          if (e.code === 'Enter') {
            setList([...list, { id: list.length + 1, name, email }]);
          }
        }}
      />
      <button
        onClick={() => {
          setList([...list, { id: list.length + 1, name, email }]);
        }}
      >
        등록
      </button>
      {list.map((e, i) => {
        return (
          <h1 key={i} onDoubleClick={() => deleteList(e.id)}>
            {e.name}: {e.email}
          </h1>
        );
      })}
    </div>
  );
};

export default Event_ex;
