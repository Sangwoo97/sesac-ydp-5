import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductItem.css';

export default function ProductItem({ product }) {
  return (
    <div className='pItem' style={{ backgroundColor: 'coral', width: '80vw', marginBottom: '20px' }}>
      <Link to={`/products/${product.id}`}>
        <ul>
          <li>상품명: {product.name}</li>
          <li>상세설명: {product.body}</li>
        </ul>
      </Link>
    </div>
  );
}
