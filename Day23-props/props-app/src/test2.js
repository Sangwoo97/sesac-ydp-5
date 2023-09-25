import React, { Component } from 'react';
import propTypes from 'prop-types';

class Test2 extends Component {
  myStyle = { fontSize: '40px', color: 'orange', marginTop: '20px' };
  render() {
    return (
      <div style={this.myStyle}>
        <h2>안녕하세요</h2>
        <img alt="img" src="https://qi-b.qoo10cdn.com/partner/goods_image/6/3/2/6/354356326g.jpg"></img>
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

export default Test2;
