/*
getDerivedStateFromProps
El getDerivedStateFromProps()método se llama justo antes de representar los elementos en el DOM.

Este es el lugar natural para establecer el stateobjeto basado en la inicial props.

Se toma statecomo argumento y devuelve un objeto con cambios en state.

El siguiente ejemplo comienza con el color favorito "rojo", pero el 
getDerivedStateFromProps()método actualiza el color favorito según el favcolatributo:
*/
class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) {
      return {favoritecolor: props.favcol };
    }
    render() {
      return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      );
    }
  }
  
  ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));