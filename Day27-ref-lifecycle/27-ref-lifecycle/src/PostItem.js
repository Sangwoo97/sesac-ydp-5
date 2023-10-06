import React from 'react';
import './PostItem.css';
export default function PostItem({ item }) {
  const { id, title, body } = item;
  return (
    <div className='container'>
      <div>
        No. {id} - {title}
      </div>
      <div>{body}</div>
    </div>
  );
}
