import React from 'react';


const Turno = ({ turno, eliminarTurno }) => (
 
        <div className="card w-50 mt-5 ml-4">
            <div className="card-body">
                <p className='dataTitles'><b>Nombre de la mascota: </b>{turno.mascota}</p>
                <p className='dataTitles'><b>Dueño de la mascota: </b>{turno.dueño}</p>
                <p className='dataTitles'><b>Hora del Turno: </b>{turno.hora}</p>
                <p className='dataTitles'><b>Fecha del Turno: </b>{turno.fecha}</p>
                <p className='dataTitles'><b>Síntomas: </b>{turno.sintomas}</p>
                <div className="text-center">
                    <button 
                    className="btn btn-danger mt-3 px-5 py-2"
                    onClick = {() =>eliminarTurno(turno.id)}>
                    Eliminar &times;
                    </button>
                </div>
            </div>
        </div>
    
);


export default Turno;
