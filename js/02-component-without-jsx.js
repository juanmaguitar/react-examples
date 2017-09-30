const mountNode = document.getElementById('root')

function Button (props) {
  return React.createElement(
    "button",
    { type: "submit" },
    props.label
  );
}
// To use Button, you would do something like
ReactDOM.render(
  React.createElement(Button, { label: "Save Data" }),
  mountNode
);
