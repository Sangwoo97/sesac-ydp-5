import React, { Component } from 'react';
import propTypes from 'prop-types';

class Test3 extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <br />
        <button onClick={this.props.valid}>콘솔 메시지</button>
      </div>
    );
  }

  static defaultProps = {
    text: '이건 기본 text props입니다.',
  };

  static propType = {
    text: propTypes.string.isRequired,
  };
}

export default Test3;
