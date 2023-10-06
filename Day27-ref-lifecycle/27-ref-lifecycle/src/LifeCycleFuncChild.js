import React, { useEffect, useState } from 'react';

const LifeCycleFuncChild = ({ num }) => {
  const [input, setInput] = useState('');
  // Mount 시점에 실행
  useEffect(() => {
    // console.log('component mount');
    // return () => {
    //   console.log('component unmount');
    // };
    // console.log('input update');
  }, [input]);
  return (
    <div>
      자식 컴포넌트
      <div>현재 number값은 {num}입니다.</div>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
};

export default LifeCycleFuncChild;
