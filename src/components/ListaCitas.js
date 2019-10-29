import React from 'react'
import Cita from './Cita'
const ListaCitas = ({citas, eliminarCita}) => {
    const mensaje = Object.keys(citas).length === 0 ? "No hay citas" : "Administracion de citas";

    return( 
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">
                    {mensaje}
                </h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mascota</th>
                            <th>Dueño</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Sintomas</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {citas.map(cita => (
                            <Cita key={cita.id}
                                  cita={cita} 
                                  eliminarCita={eliminarCita}            
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );}
 
export default ListaCitas;