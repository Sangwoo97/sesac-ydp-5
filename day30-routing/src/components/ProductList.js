import React from 'react';
import ProductItem from './ProductItem';

export default function ProductList({ products }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {products.map((e) => (
        <ProductItem key={e.id} product={e} />
      ))}
    </div>
  );
}
