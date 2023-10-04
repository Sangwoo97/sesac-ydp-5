import React, { useRef } from 'react';

export default function RefSample1() {
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <p>함수형 컴포넌트에서 버튼 클릭시 input에 focusing</p>
      <input type='text' ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}
