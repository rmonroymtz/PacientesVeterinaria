import React, { Component } from 'react';
import uuid from 'uuid';

const stateInicial = {  
    cita: {
        mascota:'',
        propietario:'',
        fecha:'',
        time:'',
        sintomas:''
    },
    error: false
}

class NuevaCita extends Component {
    state = {...stateInicial}

    /**Cuando es usuario escribe en los inputs */

    handleChange = (e) => {
        console.log(e.target.name+": Estas escribiendo: "+e.target.value)

        this.setState({
            cita:{
                ...this.state.cita,
                [e.target.name]:[e.target.value]
            }
        })
    }

    /**Cuando el usuario envia el formulario */

    handleSubmit = e => {
        e.preventDefault();

        /**Extraer los valores del state */
        const {mascota, propietario, fecha, time , sintomas} = this.state.cita;
        /** Validar que todos los campos esten llenos  */
        if(mascota === '' || propietario === '' || fecha === '' || time === '' || sintomas ===''){
            this.setState({
                error:true
            })
            return;
        }
        /**Generar el objeto de nueva cita */
        const nuevaCita = {...this.state.cita}
        nuevaCita.id = uuid()
        /**Agregar la cita al state de App */
        this.props.crearNuevaCita(nuevaCita)

        //Colocar en el state el stateInicial
        this.setState({
            ...stateInicial
        })
    } 

    render() { 
        /**Estraer el valor del state */
        const { error } = this.state;


        return ( 
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>
                    {
                        error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null
                    }
                    <form 
                        onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label htmlFor="mascota" className="col-sm-4 col-lg-2 col-form-label">
                                Nombre mascota
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre mascota"
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                    />
                            </div>
                        </div>{/**Fin de form-group */}
                        <div className="form-group row">
                            <label htmlFor="propietario" className="col-sm-4 col-lg-2 col-form-label">
                                Nombre dueño
                            </label>
                            <div className="col-sm 8-col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre dueño"
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                    />
                            </div>
                        </div>{/** Fin de form-group */}
                        <div className="form-group row">
                            <label htmlFor="fecha" className="col-sm-4 col-lg-2 col-form-label">
                                Fecha
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                    />
                            </div>
                            <label htmlFor="hour" className="col-sm-4 col-lg-2 col-form-label">
                                Hora
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time" 
                                    className="form-control"
                                    name="time"
                                    onChange={this.handleChange}
                                    value={this.state.cita.time}
                                    />
                            </div>
                        </div>{/**Fin de form-group */}
                        <div className="form-group row">
                            <label htmlFor="sintomas" className="col-sm-4 col-lg-2 col-form-label">
                                Sintomas
                            </label>
                            <textarea
                                className="form-control"
                                name="sintomas"
                                placeholder="Describe los sintomas"
                                onChange={this.handleChange}
                                    value={this.state.cita.sintomas}
                            ></textarea>
                        </div>{/**Fin de form-group */}
                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar nueva cita" />
                    </form>
                </div>
            </div>
         );
    }
}
 
export default NuevaCita;