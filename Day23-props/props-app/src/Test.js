import React, { Component } from 'react';
import propTypes from 'prop-types';

class Test extends Component {
  name = '상우';
  myStyle = { backgroundColor: 'blue', fontSize: '40px', color: 'orange', padding: '12px' };
  render() {
    return <div style={this.myStyle}>{this.name}</div>;
  }

  static defaultProps = {
    name: '기본이름',
  };

  static propType = {
    name: propTypes.string.isRequired,
  };
}

export default Test;
