import { useState } from 'react';

const SayFunction = () => {
  console.log(useState('welcome!'));
  const [message, setMessage] = useState('welcome!');
  return <div>{message}</div>;
};

export default SayFunction;
