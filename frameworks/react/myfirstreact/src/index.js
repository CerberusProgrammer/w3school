import React from "react";
import ReactDOM from "react-dom";

// Para importar archivo externo...
import Dude from './App.js';

const myFirstElement = <h1>Hello React!</h1>;
const myElement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
  </table>
);

const x = 10;
const y = 10;
const sum = (
  <h1>
    {" "}
    {x} + {y} = {x + y}
  </h1>
);

class Person extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }

  render() {
    return <h1> Hi, I'm a {this.state.color} Car n.n</h1>;
  }
}

function Car() {
  return <h2>Hi, tambien soy un carro</h2>;
}

ReactDOM.render(<Dude></Dude>, document.getElementById("root"));
