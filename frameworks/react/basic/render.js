// El render()método es obligatorio, y es el método que genera HTML en el DOM.

class Header extends React.Component {
  render() {
    return <h1>This is the content of the Header component</h1>;
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));
