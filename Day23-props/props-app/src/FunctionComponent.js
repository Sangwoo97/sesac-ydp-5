import propTypes from 'prop-types';

export default function FunctionComponent(props) {
  const name = '상우';
  return (
    <div>
      <h1>Hi {name}!</h1>
      <p>여기는 FunctionComponent</p>
      <p>
        새로운 컴포넌트의 이름은 <b>{props.name}</b>
      </p>
    </div>
  );
}

FunctionComponent.defaultProps = {
  name: '기본이름',
};

FunctionComponent.propTypes = {
  name: propTypes.string,
};
