import React, { Component } from 'react';

export default class Nav extends Component {
  componentWillUnmount() {
    console.warn('component will unmount');
  }

  render() {
    return <h3>Nav bar</h3>;
  }
}
