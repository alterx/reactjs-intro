import React, {Component} from 'react';

class Counter extends Component {

  constructor(props) {
    super(props);

    this.state = {
        count: 0
    }
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(ev) {
    this.setState({
        count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <span>Count: {this.state.count}</span>
        <button onClick={this.onButtonClick}>Add</button>
      </div>
    );
  }
}

export default Counter;
