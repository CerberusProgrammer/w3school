# Ciclo de vida de componentes

Cada componente en React tiene un ciclo de vida que puede monitorear y manipular durante sus tres fases principales.

Las tres fases son: montaje , actualización y desmontaje .

# Montaje

Montaje significa poner elementos en el DOM.

React tiene cuatro métodos integrados que se llaman, en este orden, al montar un componente:

constructor()
getDerivedStateFromProps()
render()
componentDidMount()
El render()método es obligatorio y siempre se llamará, los demás son opcionales y se llamarán si los define.

# constructor

El constructor()método se llama antes que nada, cuando se inicia el componente, y es el lugar natural para configurar los statevalores iniciales y otros valores iniciales.

El constructor()método se llama con el props, como argumentos, y siempre debe comenzar llamando al super(props)antes que nada, esto iniciará el método constructor del padre y permitirá que el componente herede los métodos de su padre ( React.Component).
