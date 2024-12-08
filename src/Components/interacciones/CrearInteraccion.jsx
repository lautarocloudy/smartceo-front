import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';
import Global from '../../Helpers/Global';
import { PetitionFetchToken } from '../../Helpers/Peticion';

const FormularioInteraccion = () => {
  // Llamada a useForm con el estado inicial para cada campo
  const [resultado, setResultado] = useState("no enviado")

  const { formulario, cambiado, enviado } = useForm({
    clienteId: '',
    fechaInteraccion: '',
    tipo: '',
    descripcion: '',
    derivar: '', // Aquí el usuario ingresará el nombre de la persona a la que se asignará
    tiempoSolucion: '',
    responsable: '',
    seguimiento: '',
    accion: '',
    respuesta: '',
    fechaSeguimiento: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { datos } = await PetitionFetchToken(Global.url + "interaccion/crear", "POST", localStorage.getItem("token"), formulario);
    if (datos.status === "success") {
      setResultado("guardado");
    } else {
        setResultado("error");
    }
    console.log(datos)
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Nueva Interacción</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label >ID Cliente</label>
          <input
            type="text"
            className="form-control"
            name="clienteId"
            onChange={cambiado}
          />
        </div>

        <div className="mb-3">
          <label>Fecha de Interacción</label>
          <input
            type="date"
            className="form-control"
            name="fechaInteraccion"
            onChange={cambiado}
          />
        </div>

        <div className="mb-3">
          <label >Tipo</label>
          <input
            type="text"
            className="form-control"
            name="tipo"
            onChange={cambiado}
          />
        </div>

        <div className="mb-3">
          <label >Descripción</label>
          <textarea
            className="form-control"
            name="descripcion"
            onChange={cambiado}
          ></textarea>
        </div>

        <div className="mb-3">
          <label >Asignar a (Nombre de la Persona)</label>
          <input
            type="text"
            className="form-control"
            name="derivar"
            onChange={cambiado}
          />
        </div>

        <div className="mb-3">
          <label >Tiempo de Solución</label>
          <input
            type="text"
            className="form-control"
            name="tiempoSolucion"
            onChange={cambiado}
          />
        </div>

        <div className="mb-3">
          <label >Responsable</label>
          <input
            type="text"
            className="form-control"
            name="responsable"
            onChange={cambiado}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default FormularioInteraccion;
