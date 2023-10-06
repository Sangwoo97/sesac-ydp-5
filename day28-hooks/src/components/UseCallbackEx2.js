import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

export default function UseCallbackEx2({ postId }) {
  const [post, setPost] = useState({});

  const getPost = useCallback(async () => {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${postId}`);
    setPost(result.data);
  }, [postId]);

  // useEffect 의존성 배열에 함수 -> 리렌더링 -> 함수 재생성(주소값 변경) -> getPost(재호출)
  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <div>
      <h1>useCallback ex2</h1>
      {post.id ? post.title : '로딩중...'}
    </div>
  );
}
