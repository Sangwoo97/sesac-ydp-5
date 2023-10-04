import React, { useState } from 'react';

const PracticeTable = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [type, setType] = useState('name');
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);
  const [searchedList, setSearchedList] = useState();

  return (
    <div>
      <div>
        {'작성자 : '}
        <input type='text' placeholder='작성자' value={name} onChange={(e) => setName(e.target.value)} />
        {'  제목 : '}
        <input
          type='text'
          placeholder='제목'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.nativeEvent.isComposing) {
              return;
            }
            if (e.code === 'Enter') {
              setSearchedList();
              setList([...list, { id: list.length + 1, name, title }]);
            }
          }}
        />
        <button
          style={{ marginLeft: '10px' }}
          onClick={() => {
            setSearchedList();
            setList([...list, { id: list.length + 1, name, title }]);
          }}
        >
          작성
        </button>
      </div>

      <div style={{ marginTop: '30px', marginBottom: '30px' }}>
        <select
          style={{ marginRight: '10px' }}
          onChange={(e) => {
            setType(`${e.target.value}`);
          }}
        >
          <option value='name'>작성자</option>
          <option value='title'>제목</option>
          <option value='num'>번호</option>
        </select>

        <input type='text' placeholder='검색어' value={search} onChange={(e) => setSearch(e.target.value)} />

        <button
          style={{ marginLeft: '10px' }}
          onClick={() => {
            let temp;
            if (type === 'name') {
              temp = list.filter((e) => e.name === search);
            } else if (type === 'title') {
              temp = list.filter((e) => e.title === search);
            } else {
              temp = list.filter((e) => e.id === Number(search));
            }
            if (temp.length > 0) {
              setSearchedList(temp);
            } else {
              setSearchedList('검색 결과가 없습니다');
            }
          }}
        >
          검색
        </button>
        <button
          style={{ marginLeft: '10px' }}
          onClick={() => {
            setSearchedList();
          }}
        >
          전체
        </button>
      </div>

      <table border='1' cellPadding='10' cellSpacing='0'>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        {typeof searchedList !== 'string' && (
          <tbody>
            {(searchedList ? searchedList : list).map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.id}</td>
                  <td>{e.title}</td>
                  <td>{e.name}</td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
      {typeof searchedList === 'string' && searchedList}
    </div>
  );
};

export default PracticeTable;
