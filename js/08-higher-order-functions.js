const mountNode = document.getElementById('root')

const Doubler = ({aValue=Array(10).fill(0)}) => (
  <ul>
    { 
      aValue
        .map((e,i) => i+1) 
        .map((e) => e*2) 
        .map((e,i) => <li key={i}>{e}</li> ) 
    }
  </ul>
)

// Use it
ReactDOM.render(<Doubler />, mountNode);