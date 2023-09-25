import React, { Component } from 'react';
import propTypes from 'prop-types';

class ClassComponent extends Component {
  name = '상우';
  render() {
    return (
      <div>
        <h1>Hi {this.name}!</h1>
        <p>여기는 Class Component</p>
        <p>
          새로운 컴포넌트의 이름은 <b>{this.props.name}</b>
        </p>
      </div>
    );
  }

  static defaultProps = {
    name: '기본이름',
  };

  static propType = {
    name: propTypes.string.isRequired,
  };
}

// ClassComponent.defaultProps = {
//   name: '기본이름',
// };

// ClassComponent.propType = {
//   name: propTypes.string,
// };

export default ClassComponent;
