const SyntheticEvent = () => {
  const syntheticEvent = (e) => {
    console.log(e);
  };

  const printInputValue = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <button onClick={syntheticEvent}>SyntheticEvent 콘솔에 찍기</button>
      <br />
      <input type='text' placeholder='입력하세요' onChange={printInputValue} />
    </div>
  );
};

export default SyntheticEvent;
