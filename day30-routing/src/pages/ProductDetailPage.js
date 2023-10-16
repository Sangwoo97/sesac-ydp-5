import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productInfos } from './ProductPage';

export default function ProductDetailPage() {
  const data = useParams();
  const navigate = useNavigate();
  const [filterData, setFilterData] = useState(productInfos.filter((e) => e.id === parseInt(data.productId))[0]);
  console.log(filterData);
  return (
    <div>
      <h1>ProductDetailPage</h1>
      <button onClick={() => navigate(-1)}>목록보기</button>
      <button onClick={() => navigate('/')}>홈으로 이동하기</button>
      <ul>
        <li>상품명: {filterData.name}</li>
        <li>상세설명: {filterData.body}</li>
      </ul>
    </div>
  );
}
