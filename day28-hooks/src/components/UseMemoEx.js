import React, { useState, useMemo } from 'react';

export default function UseMemoEx() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // 버튼을 누를 때에도, input을 입력할 때에도 연산이 이루어짐 (calc 함수 호출)
  // useMemo 렌더링 과정에서 특정 값을 기억해서 바뀔때만 연산되도록 최적화
  // const calc = () => {
  //   console.log('열심히 계산중...');
  //   for (let i = 0; i < 1000000; i++) {}
  //   return count ** 2;
  // };
  const calc = useMemo(() => {
    console.log('열심히 계산중...');
    for (let i = 0; i < 1000000; i++) {}
    return count ** 2;
  }, [count]);
  return (
    <div>
      <h1>UseMemo ex</h1>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          setCount(() => count + 1);
        }}
      >
        Plus
      </button>
      <p>count: {count}</p>
      <p>calc: {calc}</p>
    </div>
  );
}
