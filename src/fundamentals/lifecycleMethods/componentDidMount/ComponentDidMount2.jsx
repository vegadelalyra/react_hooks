export default class DidMount2 extends React.Component {
  constructor() {
    super();
    console.warn('constructor');
    this.state = {
      data: false,
    };
  }
  componentDidMount() {
    console.warn('componentDidMount');
    this.setState({
      data: true,
    });
  }
  render() {
    console.warn('render');
    return (
      <div>
        <h1>ComponentDidMount Life Cycle</h1>
      </div>
    );
  }
}
