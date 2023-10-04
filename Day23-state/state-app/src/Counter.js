import React, { Component, useState } from 'react';

class Counter extends Component {
  constructor(props) {
    // js에서 'super'는 부모 클래스 생성자의 참조
    // super() 호출 시 현재 클래스가 상속받고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출
    super(props);

    this.state = {
      number: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button
          onClick={() => {
            this.setState({ number: this.state.number + 2 });
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            this.setState({ number: this.state.number - 1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

export default Counter;
