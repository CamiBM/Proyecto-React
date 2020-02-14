import React, { Fragment, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import Navbar from './Components/Navbar';
import NuevoTurno from './Components/NuevoTurno';
import ListaTurnos from './Components/ListaTurnos';

class App extends Component {

  state = {
    turnos: []
  }

  // este metodo del ciclo de vida se utiliza cuando se carga la app.
  componentDidMount() {
    // muestro lo que esta almacenado en el storage y lo pongo en el state.
    const turnosLocal = localStorage.getItem('turnos');

    if (turnosLocal) {
      this.setState({
        turnos: JSON.parse(turnosLocal)
      })
    }
  }
  // este metodo del ciclo de vida se utiliza se elimina o agrega un turno
  componentDidUpdate() {
    // almaceno los turnos en el state.
    localStorage.setItem('turnos', JSON.stringify(this.state.turnos));

  }

  crearNuevoTurno = datos => {
    const turnos = [...this.state.turnos, datos]

    this.setState({
      turnos
    })
  }

  eliminarTurno = id => {
    // realizo una copia del estate.
    const turnosActuales = [...this.state.turnos];
    // utilizo la funcion filter para quitar el elemento id del arreglo.
    const turnos = turnosActuales.filter(turno => turno.id !== id)
    // actualizo el state.
    this.setState({
      turnos
    })
  }

  render() {
    return (
      <Fragment>
        <Navbar
          titulo='Administrador de Pacientes Veterinaria' />
          
        <div className="container mt-5">
          <NuevoTurno
            crearNuevoTurno={this.crearNuevoTurno} />
        </div>



        <ListaTurnos
          turnos={this.state.turnos}
          eliminarTurno={this.eliminarTurno}
        />
      </Fragment>
    );
  }
}

export default App;
