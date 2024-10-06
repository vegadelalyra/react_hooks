import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      currentValue: 0,
    };
  }

  componentDidUpdate(props, state, snapShot) {
    console.warn('componentDidUpdate', snapShot);
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.warn('getSnapshotBeforeUpdate', preState);
    return preState.currentValue * 10;
  }

  render() {
    return (
      <div>
        <h1>{this.props.data}...</h1>
      </div>
    );
  }
}

export default Home;
