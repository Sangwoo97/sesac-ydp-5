import { Component } from 'react';

class ClassBind extends Component {
  constructor(props) {
    super(props);

    console.log('constructor this: ', this);
    this.printConsole = this.printConsole.bind(this);
  }

  printConsole() {
    console.log('this', this);
  }
  printConsole2 = (msg) => {
    console.log(msg);
  };

  render() {
    return (
      <div>
        <h1>Class Component Event</h1>
        <button onClick={this.printConsole}>printConsole</button>
        <button onClick={() => this.printConsole2('msg')}>printConsole</button>
      </div>
    );
  }
}

export default ClassBind;
