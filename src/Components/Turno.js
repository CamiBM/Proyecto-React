import React from 'react';


const Turno = ({ turno, eliminarTurno }) => (
 
    <div className="col-lg-6">
        <div className="card w-75 mt-5 ml-5">
            <div className="card-body">
                <p className='dataTitles'><b>Nombre de la mascota: </b>{turno.mascota}</p>
                <p className='dataTitles'><b>Dueño de la mascota: </b>{turno.dueño}</p>
                <p className='dataTitles'><b>Hora del Turno: </b>{turno.hora}</p>
                <p className='dataTitles'><b>Fecha del Turno: </b>{turno.fecha}</p>
                <p className='dataTitles'><b>Síntomas: </b>{turno.sintomas}</p>
                <div className="text-center">
                    <button 
                    className="btn btn-danger mt-3"
                    onClick={ () => eliminarTurno(turno.id)  }
                    >Eliminar &times;
                    </button>
                </div>
            </div>
        </div>
    </div>
);


export default Turno;
