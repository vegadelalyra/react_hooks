import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: 0,
    };
  }

  shouldComponentUpdate(prevProps, prevState) {
    console.warn(prevState);
    console.warn(prevProps);

    // return prevProps.data === 'test' ? false : true;
    // return this.state.data === 3 ? false : true;
    return prevState.data === 3 ? false : true;
  }
  render() {
    console.warn('inside render');

    return (
      <div style={{ backgroundColor: 'aliceblue' }}>
        <h1>Child Component {this.state.data}</h1>
        <button
          onClick={() => {
            this.setState({ data: this.state.data++ });
          }}>
          Update State
        </button>
      </div>
    );
  }
}

export default Home;
