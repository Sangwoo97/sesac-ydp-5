const Larva = () => {
  const style1 = {
    position: 'absolute',
    width: '100px',
    height: '100px',
    borderRadius: '999px',
    backgroundColor: 'darkblue',
    zIndex: 1,
  };
  const style2 = {
    position: 'absolute',
    width: '100px',
    height: '100px',
    borderRadius: '999px',
    backgroundColor: 'blue',
    zIndex: 2,
    top: '70px',
    left: '40px',
  };
  const style3 = {
    position: 'absolute',
    width: '100px',
    height: '100px',
    borderRadius: '999px',
    backgroundColor: 'skyBlue',
    zIndex: 3,
    top: '140px',
    left: '80px',
  };
  const style4 = {
    position: 'absolute',
    width: '100px',
    height: '100px',
    borderRadius: '999px',
    backgroundColor: 'darkblue',
    zIndex: 4,
    top: '180px',
    left: '150px',
  };
  const style5 = {
    position: 'absolute',
    width: '100px',
    height: '100px',
    borderRadius: '999px',
    backgroundColor: 'blue',
    zIndex: 5,
    top: '200px',
    left: '210px',
  };
  const eye = {
    position: 'absolute',
    width: '40px',
    height: '40px',
    borderRadius: '999px',
    backgroundColor: 'white',
    zIndex: 5,
    top: '20px',
    left: '20px',
  };
  const eye2 = {
    position: 'absolute',
    width: '20px',
    height: '20px',
    borderRadius: '999px',
    backgroundColor: 'black',
    zIndex: 5,
    top: '25px',
    left: '25px',
  };
  return (
    <div>
      <div style={style1}>
        <div style={eye}></div>
        <div style={eye2}></div>
      </div>
      <div style={style2} />
      <div style={style3} />
      <div style={style4} />
      <div style={style5} />
    </div>
  );
};

export default Larva;
