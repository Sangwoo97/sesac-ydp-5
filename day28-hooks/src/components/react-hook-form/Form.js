import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register, // input 할당, value 변경 감지
    handleSubmit, // form submit 시 호출
    formState: { errors }, // 폼 상태 객체
    watch, // 특정 폼 필드의 값을 실시간으로 사용
  } = useForm();

  const onValid = (data) => {
    console.log('onValid', data);
  };

  const onInValid = (data) => {
    console.log('onInValid', data);
  };

  console.log('errors', errors);
  console.log('watch', watch('username'));
  return (
    <div>
      <h1>react-hook-form 라이브러리 데모</h1>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          type='text'
          placeholder='username'
          {...register('username', {
            required: '이름을 입력해주세요',
            minLength: { message: '이름은 최소 2글자 이상 작성해주세요', value: 2 },
          })}
        />
        <br />
        {errors.username?.message}
        <input
          type='email'
          placeholder='email'
          {...register('email', {
            required: '이메일을 입력해주세요',
            validate: { useGmail: (v) => v.includes('gmail.com') || 'gmail로만 가입 가능합니다' },
          })}
        />
        {errors.email?.message}
        <br />
        <input type='text' placeholder='password' {...register('password')} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
