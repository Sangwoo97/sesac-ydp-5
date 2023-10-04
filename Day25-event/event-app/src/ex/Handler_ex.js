import { Component } from 'react';

class Handler_ex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      string: 'Hello World!',
    };
  }

  setString = () => {
    this.setState(() => ({ string: 'Goodbye World!' }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.string}</h1>
        <button onClick={this.setString}>클릭</button>
      </div>
    );
  }
}

export default Handler_ex;
