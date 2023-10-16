import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'lightgray' }}>
      <p>Router Tutorial</p>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li style={{ marginRight: '10px' }}>
          <Link to={'/'}>Home</Link>
        </li>
        <li style={{ marginRight: '10px' }}>
          <Link to={'/products'}>Product</Link>
        </li>
        <li>
          <Link to={'/photo'}>Photo</Link>
        </li>
      </ul>
    </header>
  );
}
