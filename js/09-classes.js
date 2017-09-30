const mountNode = document.getElementById('root')

class Button extends React.Component {
  render() {
    return <button>{this.props.label}</button>;
  }
}

// Use it (same syntax)
ReactDOM.render(<Button label="Save" />, mountNode);