import React, { Component } from 'react';
//libreria para generar ID's 
import uuid from 'uuid';
// rafce= para crear un stateless functional component
//rce= para crear un componente clase

class NuevoTurno extends Component {

    state = {

        turno: {
            mascota: '',
            dueño: '',
            hora: '',
            fecha: '',
            sintomas: ''
        },

        error: false
    }

    //se crea la funcion onChange para capturar lo que escriba el usuario en los inputs.
    // e.target.name muestra la propiedad name del input y e.target.value es el valor que se ingresa
    handleChange = e => {
        // actualizar el estate con el valor que ingresa el usuario.
        this.setState({
            turno: {
                // se toma un copia del estate con el spread operator (...)
                ...this.state.turno,
                //actualizo el state y su valor
                [e.target.name]: e.target.value
            }
        })
    }

    // cuando el usuario envia el formulario.
    handleSubmit = e => {
        e.preventDefault();

        // extraer los valores del state.

        const { mascota, dueño, hora, fecha, sintomas } = this.state.turno

        if (mascota === '' || dueño === '' || hora === '' || fecha === '' || sintomas === '') {

            this.setState({
                error: true
            });

            return;
        }

        //generar un objeto con los datos. 

        const nuevoTurno = { ...this.state.turno };
        nuevoTurno.id = uuid();

        //tengo que pasar los datos del componente hijo hacia el padre utilizando una funcion
        this.props.crearNuevoTurno(nuevoTurno);
    }
    // los estilos se colocan con doble llave: style={{width: '18rem'}}


    render() {

        //extraer valor del state
        const { error } = this.state;

        return (

            <form onSubmit={this.handleSubmit} className="pl-5 pr-5 pt-4 pb-5 rounded mx-lg-auto">
                <h4 className="text-center text-light mb-4">Completar el formulario para crear un nuevo turno</h4>
                {error ? <div className='alert bg-danger mt-2 mb-3 font-weight-bold text-center text-light' role='alert'>Todos los campos son obligatorios</div> : null}
                <div className="row mt-2">
                    <div className="col-md-6">
                        <label htmlFor='input-pet-name' className="font-weight-bold text-light" id='labelPetName'>Nombre de la mascota:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Escribe aquí el nombre de tu mascota"
                            id="input-pet-name"
                            name='mascota'
                            onChange={this.handleChange}
                            value={this.state.turno.mascota}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="input-owner-name" className="font-weight-bold text-light">Nombre del dueño:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Escribe aquí tu nombre"
                            id="input-owner-name"
                            name='dueño'
                            onChange={this.handleChange}
                            value={this.state.turno.dueño}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <label htmlFor="input-date" className="font-weight-bold text-light">Fecha del turno:</label>
                        <input
                            type="date"
                            className="form-control"
                            id="input-date"
                            name='fecha'
                            onChange={this.handleChange}
                            value={this.state.turno.fecha}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="input-time" className="font-weight-bold text-light">Hora del turno:</label>
                        <input
                            type="time"
                            className="form-control"
                            id="input-time"
                            name="hora"
                            onChange={this.handleChange}
                            value={this.state.turno.hora}
                        />
                    </div>
                </div>
                <div className="row mt-3 textfield-outline">
                    <div className="col-md-6">
                        <label htmlFor="input-symptoms" className="font-weight-bold text-light">Sintomas:</label>
                        <textarea
                            className="w-100 rounded"
                            id="input-symptoms"
                            placeholder="Describe los sintomas de tu mascota"
                            cols="80"
                            rows="6"
                            name='sintomas'
                            onChange={this.handleChange}
                            value={this.state.turno.sintomas}>
                        </textarea>
                    </div>
                    <input type="submit" className="btn btn-success btn-lg mt-3 btn-block" value='Agregar nuevo turno' />
                </div>
            </form>
        )
    }
}

export default NuevoTurno;


