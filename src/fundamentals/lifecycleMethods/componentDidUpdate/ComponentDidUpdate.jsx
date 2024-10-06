export class DidUpdate extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>ComponentDidUpdate Life Cycle Method</h1>
        <Child data={this.state.counter} />
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}>
          Update counter {this.state.counter}
        </button>
      </div>
    );
  }
}

class Child extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  componentDidUpdate(pP, pS, SS) {
    console.warn('method called', pP.data, pS, this.props.data);
  }

  render() {
    return (
      <div>
        <h2>Child Component {this.props.data}</h2>
      </div>
    );
  }
}
