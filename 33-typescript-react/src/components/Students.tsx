import { type } from 'os';
import React from 'react';

// interface StudentInfo {
//   name: string;
//   grade: number;
// }

type StudentInfo = {
  name: string;
  grade: number;
  part?: string;
  handleClick: (name: string, grade: number) => void;
};

// const Student: React.FC<StudentInfo> = ({ name, grade }) => {
//   return (
//     <div>
//       <li>이름: {name}</li>
//       <li>학년: {grade}</li>
//     </div>
//   );
// };

// export default Student;

export const Student = ({ name, grade, part, handleClick }: StudentInfo) => {
  return (
    <div onClick={() => handleClick(name, grade)}>
      <li>이름: {name}</li>
      <li>학년: {grade}</li>
      <li>전공: {part || '자유전공'}</li>
    </div>
  );
};
