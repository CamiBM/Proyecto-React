import React from 'react';
import Turno from './Turno';
import report from '../img/medical-report.png'

const ListaTurnos = ({ turnos, eliminarTurno }) => (

    <div className="container mt-5 pb-5 mb-5 pt-4 bg-info rounded dates">
        <h4 className="text-light text-center title"><img src={report} className="mr-2" width="35" height="35" alt='report' />Administra las citas aquí<img src={report} className="ml-2" width="35" height="35" alt='report' /></h4>
            <div className='row ml-lg-5'>
            {turnos.map(turno => (
                <Turno
                    key={turno.id}
                    turno={turno}
                    eliminarTurno={eliminarTurno}
                />
            ))}
        </div>
    </div>

    // <div className='card py-2 listaTurnos'>
    //     <div className='card-body'>
    //         <h2 className='card-title text-center dateTitle'>Administra las citas aquí</h2>
    //         <div className=''>
    //             {turnos.map(turno => (
    //                 <Turno
    //                     key={turno.id}
    //                     turno={turno}
    //                 />
    //             ))}
    //         </div>
    //     </div>
    // </div>
)


export default ListaTurnos;
