export class WillUnmount extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <div>
        <h1>Component Will Unmount</h1>
        {this.state.show ? <Child /> : null}
        <button
          onClick={() => {
            this.setState({
              show: !this.state.show,
            });
          }}>
          Toggle Child
        </button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    console.warn('Component is hidden now');
  }
  render() {
    return (
      <div>
        <h2>Child Component</h2>
      </div>
    );
  }
}
