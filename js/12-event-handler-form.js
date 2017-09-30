const mountNode = document.getElementById('root')

class Form extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// Use it
ReactDOM.render(<Form />, mountNode);
