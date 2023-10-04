import React, { useRef } from 'react';

export default function RefSample2() {
  const id = useRef(7);
  const plusIdRef = () => {
    id.current += 1;
  };
  return (
    <div>
      <p>함수형 컴포넌트에서 버튼 클릭시 id 값을 1씩 증가</p>
      <h2>{id.current}</h2>
      <button onClick={plusIdRef}>Plus</button>
    </div>
  );
}
