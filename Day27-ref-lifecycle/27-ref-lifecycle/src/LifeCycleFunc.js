import React, { useState } from 'react';
import LifeCycleFuncChild from './LifeCycleFuncChild';

const LifeCycleFunc = () => {
  const [num, setNum] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumber = () => {
    setNum(num + 1);
  };
  const changeVisible = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <button onClick={changeNumber}>Plus</button>
      <button onClick={changeVisible}>on/off</button>
      {visible && <LifeCycleFuncChild num={num} visible={visible} />}
    </div>
  );
};

export default LifeCycleFunc;
