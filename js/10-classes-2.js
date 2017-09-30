const mountNode = document.getElementById('root')

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.id = Date.now();
  }
  render() {
    return <button id={this.id}>{this.props.label} <strong>{this.id}</strong></button>;
  }
}

// Use it
ReactDOM.render(<Button label="Save" />, mountNode);
