import React, { useEffect, useState } from 'react';
import './PostList.css';
import PostItem from './PostItem';
import axios from 'axios';

export default function PostList() {
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setData(response.data);
  };
  return (
    <div>
      <div className='header'>Post List</div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {data ? (
          data.map((e, i) => {
            return <PostItem key={i} item={e} />;
          })
        ) : (
          <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Loading...</div>
        )}
      </div>
    </div>
  );
}
