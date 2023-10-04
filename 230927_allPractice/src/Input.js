import React from 'react';

function Input({ setContent }) {
  return (
    <>
      내용 :{' '}
      <input
        type='text'
        onChange={(e) => {
          setContent(e.target.value);
        }}
        placeholder='내용을 입력하세요.'
      />
    </>
  );
}

export default Input;
