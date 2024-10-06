import React, { Component } from 'react';

class GetSnapshotBeforeUpdate extends Component {
  constructor() {
    super();
    this.state = {
      data: 0,
    };
  }

  render() {
    return (
      <div>
        <H1>getSnapshotBeforeUpdate life cycle method</H1>
        <Home />
      </div>
    );
  }
}

export default GetSnapshotBeforeUpdate;
