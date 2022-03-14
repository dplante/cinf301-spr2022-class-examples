import React from 'react';
import './App.css';
import Display from '../Display/Display';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Julie', age: 'aging well', weight: 180 };
  }

  clicker(name) {
    this.setState({ name: name });
    if (name.localeCompare("Daniel") === 0) {
      this.setState({ age: 'TOO OLD' });
    } else {
      this.setState({ age: 'not as old as Daniel' });
    }
  }

  renderDisplay(data) {
    return <Display stats={data} />;
  }

  renderButton() {
    return (
      <button onClick={() => this.clicker(document.getElementById('fname').value)}>
        {this.state.name}
      </button>
    );
  }

  render() {
    return (
      <div>
        <div>Enter a name: <input type="text" id="fname" name="fname" /></div>
        <div>{this.renderDisplay(this.state)}</div>
        <div>{this.renderButton("Button")}</div>
      </div>
    );
  }
}