import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormPractice() {
  const {
    register, // input 할당, value 변경 감지
    handleSubmit, // form submit 시 호출
    formState: { errors }, // 폼 상태 객체
    watch, // 특정 폼 필드의 값을 실시간으로 사용
  } = useForm();

  const onValid = (data) => {
    console.log('onValid', data);
  };

  return (
    <div>
      <h1>react-hook-form 라이브러리 데모</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type='text'
          placeholder='이름'
          {...register('username', {
            required: '이름을 입력해주세요',
            minLength: { message: '이름은 최소 2글자 이상 작성해주세요', value: 2 },
          })}
        />
        <br />
        {errors.username?.message}
        <input
          type='text'
          placeholder='나이'
          {...register('age', {
            required: '나이를 입력해주세요',
            validate: { noMinus: (v) => parseInt(v) >= 0 || '0 이상의 숫자만 가능합니다.' },
          })}
        />
        <br />
        {errors.age?.message}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
