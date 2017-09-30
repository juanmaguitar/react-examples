const mountNode = document.getElementById('root')

const MaybeError = ({errorMessage}) =>
<div>
  {errorMessage && <ErrorDisplay message={errorMessage} />}
  {!errorMessage && <div>no errorMessage!!</div>}
</div>;

// The MaybeError component uses the ErrorDisplay component:
const ErrorDisplay = ({message}) =>
  <div style={ { color: 'red', backgroundColor: 'yellow' } }>
    {message}
  </div>;


// Now we can use the MaybeError component:
ReactDOM.render(
  <MaybeError
    errorMessage={Math.random() > 0.5 ? 'Not good' : ''}
  />,
  mountNode
);