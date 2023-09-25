export default function Books({ title, author, price, type }) {
  return (
    <div style={{ backgroundColor: 'bisque', width: '500px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ color: 'orange' }}>이번주 베스트셀러</h2>
        <img
          alt='book'
          src='https://blog.kakaocdn.net/dn/dfcIsw/btqRqaZPXVW/We4Y4ld9onJw0UdtPNkCh1/img.jpg'
          width={'200px'}
        ></img>
        <h2>{title}</h2>
      </div>
      <div style={{ fontSize: '18px', fontWeight: ' bold' }}>
        저자: {author}
        <br />
        판매가: {price}원
        <br />
        구분: {type}
      </div>
    </div>
  );
}
