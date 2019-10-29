import React from 'react'

const Cita = ({cita, eliminarCita}) => (
   <tr key={cita.id}>
        <td>{cita.mascota}</td>
        <td>{cita.propietario}</td>
        <td>{cita.fecha}</td>
        <td>{cita.time}</td>
        <td>{cita.sintomas}</td>     
        <td><button 
                className="btn btn-danger"
                onClick={() => eliminarCita(cita.id )}>
                Borrar &times;
            </button> 
        </td>
    </tr>
);
 
export default Cita;