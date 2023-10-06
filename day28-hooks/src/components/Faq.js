import React from 'react';
import useToggle from '../hooks/useToggle';

export default function Faq() {
  const [isFaqOpen, setIsFaqOpen] = useToggle();
  return (
    <div>
      <h1>custom hook (useToggle) ex</h1>
      <div onClick={setIsFaqOpen}>Q</div>
      {isFaqOpen && <div>A</div>}
    </div>
  );
}
