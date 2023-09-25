import propTypes from 'prop-types';

export default function Foods({ food }) {
  return <div style={{ color: food ? 'red' : 'yellow' }}>{food}</div>;
}

Foods.defaultProps = {
  food: '사과',
};

Foods.propTypes = {
  name: propTypes.string,
};
