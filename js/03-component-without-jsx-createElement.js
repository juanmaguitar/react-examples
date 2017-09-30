const mountNode = document.getElementById('root')

const InputForm = React.createElement(
  "form",
  { target: "_blank", action: "https://google.com/search" },
  React.createElement("div", null, "Enter input and click Search"),
  React.createElement("input", { name: "q", className: "input" }),
  React.createElement(Button, { label: "Search" })
);

// InputForm uses the Button component, so we need that too:
function Button (props) {
  return React.createElement(
    "button",
    { type: "submit" },
    props.label
  );
}

// Then we can use InputForm directly with .render
ReactDOM.render(InputForm, mountNode);
