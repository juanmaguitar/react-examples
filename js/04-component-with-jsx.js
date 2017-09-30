const mountNode = document.getElementById('root')

const InputForm =
  <form target="_blank" action="https://google.com/search">
    <div>Enter input and click Search</div>
    <input name="q" className="input" />
    <Button label="Search" />
  </form>;
  
// InputForm "still" uses the Button component, so we need that too.
// Either JSX or normal form would do
function Button (props) {
  // Returns a DOM element here. For example:
  return <button type="submit">{props.label}</button>;
}
// Then we can use InputForm directly with .render
ReactDOM.render(InputForm, mountNode);