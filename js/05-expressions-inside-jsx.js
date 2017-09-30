const mountNode = document.getElementById('root')

const RandomValue = () => (
  <div>
    <h1>{ Math.floor(Math.random() * 100) }</h1>
  </div>
);

// To use it:
ReactDOM.render(<RandomValue />, mountNode);
