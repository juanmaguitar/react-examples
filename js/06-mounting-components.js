const mountNode = document.getElementById('root')

const ErrorDisplay = ({message}) => (
  <p style={ { color: 'red' } }>
    ERROR: {message}
  </p>
)

const SuccessDisplay = ({message}) => (
  <p style={ { color: 'green' } }>
    SUCCESS: {message}
  </p>
)

const DisplayMsg = ({ success, message }) => {
  if (!success) return <ErrorDisplay message={ message } />
  return <SuccessDisplay message={ message } />
}

// Use it:
ReactDOM.render(
  <DisplayMsg
    success={false} // success={false}
    message="These aren't the droids you're looking for" 
  />,
  mountNode
);