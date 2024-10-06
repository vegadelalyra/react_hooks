export class DerivedStateFromProps extends React.Component {
  constructor() {
    super();
    this.state = {
      data: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Get Derived State From Props {this.state.data}</h1>
        <Home data={this.state.data} />
        <button
          onClick={() => {
            this.setState({ data: this.state.data + 1 });
          }}>
          {' '}
          make ++ {this.state.data}{' '}
        </button>
      </div>
    );
  }
}
