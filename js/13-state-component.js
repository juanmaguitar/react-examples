const mountNode = document.getElementById('root')

class CounterButton extends React.Component {
  state = {
    clickCounter: 0,
    currentTimestamp: new Date(),
  };
  
  handleClick = () => {
    this.setState((prevState) => {
      return { clickCounter: prevState.clickCounter + 1 };
    });
  };
  
  componentDidMount() {
    setInterval(() => {
      this.setState({ currentTimestamp: new Date() })
    }, 1000);
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
        <p>Clicked: {this.state.clickCounter}</p>
        <p>Time: {this.state.currentTimestamp.toLocaleString()}</p>
      </div>
    );
  }
}

// Use it
ReactDOM.render(<CounterButton />, mountNode);