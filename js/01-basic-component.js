const mountNode = document.getElementById('root')

function Button (props) {
  // Returns a DOM element here. For example:
  return <button type="submit">{props.label}</button>;
}

// To render the Button component to the browser
ReactDOM.render(<Button label="Save" />, mountNode)
