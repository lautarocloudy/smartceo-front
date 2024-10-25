import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Global from '../../Helpers/Global';
import { PetitionFetchToken } from '../../Helpers/Peticion';
import useAuth from '../../hooks/useAuth';


const ListadoClientes = () => {

    const [clientes, setClientes] = useState([]);
    const navigate = useNavigate();
    const { auth, loading } = useAuth();

    useEffect(() => {
        conseguirMactred();
        // conseguirPuesto();
    }, []);


    const conseguirMactred = async () => {
        const { datos, cargando } = await PetitionFetchToken(Global.url + "clientes/listar", "GET", localStorage.getItem("token"));

        if (datos.status === "success") {
            setClientes(datos.clientes);
        }
    }

    const Navegar = (url) => {

        if (auth.role == "admin") {
            navigate("/social/" + url)
        } else {
            navigate("/mactred/" + url)
        }
    }


    return (
        <aside className="lateral">
            <div className="container-listado" >
                <div className="row">
                    <div className="col-md-3">
                        <h4 className='nombre-lista'>Rubro</h4>
                    </div>
                    <div className="col-md-3">
                        <h4 className='nombre-lista'>Nombre y Apellido </h4>
                    </div>
                    <div className="col-md-3">
                        <h4 className='nombre-lista'>Telefono </h4>
                    </div>
                    <div className="col-md-3">
                        <h4 className='nombre-lista'>Ver </h4>
                    </div>

                </div>
            </div>
            {
                clientes.length >= 1 ?
                    clientes.map((cliente) => {
                        return (

                            <div className="container-listado" key={cliente._id}>
                                <div className="row">
                                    <div className="col-md-3">
                                        <p className='nombre-lista'>{cliente.rubro} </p>
                                    </div>
                                    <div className="col-md-3">
                                        <p className='nombre-lista'>{cliente.nombre} </p>
                                    </div>
                                    <div className="col-md-3">
                                        <p className='nombre-lista'>{cliente.telefono} </p>
                                    </div>
                                    <div className="col-md-3">
                                        <button type="submit" className="btn btn-ir" onClick={() => Navegar("ver-clientes/" + cliente._id)}>
                                            <Link>Ver mas </Link>
                                        </button>
                                        <button type="submit" className="btn btn-editar" onClick={() => Navegar("editar-clientes/" + cliente._id)}>
                                            <Link>Editar </Link>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        )
                    }) : <h1>No hay datos cargados</h1>
            }

        </aside>
    )
}

export default ListadoClientes