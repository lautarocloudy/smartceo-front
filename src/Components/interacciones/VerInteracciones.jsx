// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TablaInteracciones = () => {
//   const [interacciones, setInteracciones] = useState([]);

//   useEffect(() => {
//     const fetchInteracciones = async () => {
//       try {
//         const response = await axios.get('/api/interacciones/listar');
//         setInteracciones(response.data);
//       } catch (error) {
//         console.error('Error al obtener las interacciones:', error);
//       }
//     };

//     fetchInteracciones();
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Lista de Interacciones</h2>
//       <table className="table table-bordered table-hover">
//         <thead className="table-primary">
//           <tr>
//             <th>ID Cliente</th>
//             <th>Fecha de Interacción</th>
//             <th>Tipo</th>
//             <th>Descripción</th>
//             <th>Derivar</th>
//             <th>Tiempo de Solución</th>
//             <th>Responsable</th>
//             <th>Seguimiento</th>
//             <th>Acción a Realizar</th>
//             <th>Respuesta</th>
//             <th>Fecha de Seguimiento</th>
//           </tr>
//         </thead>
//         <tbody>
//           {interacciones.map((interaccion) => (
//             <tr key={interaccion._id}>
//               <td>{interaccion.clienteId}</td>
//               <td>{new Date(interaccion.fechaInteraccion).toLocaleDateString()}</td>
//               <td>{interaccion.tipo}</td>
//               <td>{interaccion.descripcion}</td>
//               <td>{interaccion.derivar ? 'Sí' : 'No'}</td>
//               <td>{interaccion.tiempoSolucion}</td>
//               <td>{interaccion.responsable}</td>
//               <td>{interaccion.seguimiento}</td>
//               <td>{interaccion.accion}</td>
//               <td>{interaccion.respuesta}</td>
//               <td>{new Date(interaccion.fechaSeguimiento).toLocaleDateString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TablaInteracciones;
import React, { useEffect, useState } from "react";
import { PetitionFetchToken } from "../../Helpers/Peticion"; // Importa el helper
import { useForm } from "../../hooks/useForm"; // Importa el hook useForm
import Global from "../../Helpers/Global";

const TablaInteracciones = () => {
  const [interacciones, setInteracciones] = useState([]); // Estado para las interacciones
  const [loading, setLoading] = useState(false); // Estado de carga

  // Usa el hook useForm para manejar un filtro básico de interacciones
  const { formValues, handleInputChange, resetForm } = useForm({
    clienteId: "", // Ejemplo de filtro
  });

  // Fetch de interacciones utilizando PetitionFetchToken
  useEffect(() => {
    const fetchInteracciones = async () => {
      setLoading(true);
      try {
        const url = `${Global.url}/interaccion/listar`; // URL del endpoint
        const response = await PetitionFetchToken(url, "GET"); // Usar el helper personalizado
        if (response.ok) {
          setInteracciones(response.data); // Guarda las interacciones
        }
      } catch (error) {
        console.error("Error al obtener las interacciones:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInteracciones();
  }, []);

  // Filtrar las interacciones si se ingresa un ID de cliente
  const filteredInteracciones = interacciones.filter((interaccion) =>
    formValues.clienteId
      ? interaccion.clienteId.includes(formValues.clienteId)
      : true
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Lista de Interacciones</h2>

      {/* Formulario de filtros */}
      <form className="mb-4">
        <div className="form-group">
          <label htmlFor="clienteId">Filtrar por ID Cliente:</label>
          <input
            type="text"
            id="clienteId"
            name="clienteId"
            className="form-control"
            value={formValues.clienteId}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={resetForm}
        >
          Limpiar Filtro
        </button>
      </form>

      {loading ? (
        <p>Cargando interacciones...</p>
      ) : (
        <table className="table table-bordered table-hover">
          <thead className="table-primary">
            <tr>
              <th>ID Cliente</th>
              <th>Fecha de Interacción</th>
              <th>Tipo</th>
              <th>Descripción</th>
              <th>Derivar</th>
              <th>Tiempo de Solución</th>
              <th>Responsable</th>
              <th>Seguimiento</th>
              <th>Acción a Realizar</th>
              <th>Respuesta</th>
              <th>Fecha de Seguimiento</th>
            </tr>
          </thead>
          <tbody>
            {filteredInteracciones.map((interaccion) => (
              <tr key={interaccion._id}>
                <td>{interaccion.clienteId}</td>
                <td>
                  {new Date(interaccion.fechaInteraccion).toLocaleDateString()}
                </td>
                <td>{interaccion.tipo}</td>
                <td>{interaccion.descripcion}</td>
                <td>{interaccion.derivar ? "Sí" : "No"}</td>
                <td>{interaccion.tiempoSolucion}</td>
                <td>{interaccion.responsable}</td>
                <td>{interaccion.seguimiento}</td>
                <td>{interaccion.accion}</td>
                <td>{interaccion.respuesta}</td>
                <td>
                  {new Date(interaccion.fechaSeguimiento).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TablaInteracciones;
