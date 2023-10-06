import React, { Component } from 'react';

export default class LifeCycleClassChild extends Component {
  componentDidMount() {
    console.log('mounted');
  }
  componentDidUpdate() {
    console.log('update');
  }
  componentWillUnmount() {
    console.log('unmount');
  }
  render() {
    return <div>현재 number 값은 {this.props.number}입니다.</div>;
  }
}
