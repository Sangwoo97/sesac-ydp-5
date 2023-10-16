import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductPhotoPage() {
  const [photoData, setPhotoData] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setPhotoData(res.data.slice(0, 10));
      console.log(res.data.slice(0, 10));
    };
    getData();
  }, []);
  return (
    <div>
      여기는 사진 목록
      <ul>
        {photoData.map((e) => {
          return (
            <li key={e.id}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <strong style={{ fontSize: '24px' }}>사진 제목: {e.title}</strong>
                <img src={e.url} alt='photos' width={'300px'} height={'300px'} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
