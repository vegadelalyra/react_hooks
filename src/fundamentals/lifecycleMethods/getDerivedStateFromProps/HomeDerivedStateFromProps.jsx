import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      currentValue: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.warn('hook', props, state);
    return {
      currentValue: props * 10,
    };
  }

  render() {
    console.warn('render');
    return (
      <div>
        <h1>current Value: {this.state.currentValue}</h1>
        <button
          onClick={() => {
            this.setState({ currentValue: this.state.currentValue++ });
          }}>
          Update State{' '}
        </button>
      </div>
    );
  }
}

export default Home;
