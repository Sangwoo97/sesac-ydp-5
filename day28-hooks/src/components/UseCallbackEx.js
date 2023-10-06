import React, { useState, useCallback } from 'react';

export default function UseCallbackEx() {
  const [text, setText] = useState('');

  // 컴포넌트가 리렌더링 되어도, 의존성 배열이 있는값이 바뀌지 않는한 기존함수 재사용
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <div>
      <h1>useCallback ex</h1>
      <input type='text' value={text} onChange={onChangeText} />
      <div>작성한 값: {text || '없음'}</div>
    </div>
  );
}
