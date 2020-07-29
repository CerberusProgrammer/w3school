/*
componentDidMount
Se componentDidMount()llama al método después de representar el componente.

Aquí es donde ejecuta las declaraciones que requieren que el componente ya esté ubicado en el DOM.
*/
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 1000);
  }
  render() {
    return <h1>My Favorite Color is {this.state.favoritecolor}</h1>;
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));
