import { Navbar } from '../componentWillUnmount/Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
    console.warn('constructor');
  }

  componentDidMount() {
    console.warn('constructor');
  }

  render() {
    console.warn('render');
    return (
      <div>
        <h1>Life Cycle Method</h1>
        {this.state.show ? <Navbar /> : null}
        <button
          onClick={() => {
            this.setState({
              show: !this.state.show,
            });
          }}>
          Toggle NavBar
        </button>
      </div>
    );
  }
}
