import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider";
import { PublicLayout } from "../Components/empresa1/publictLayout";
import { Login } from "../Components/usuarios/login";
import { Logout } from "../Components/usuarios/Logout";
import { PrivateLayout } from "../Components/layout/PrivateLayout";
import { CrearUsuario } from "../Components/usuariosSistema/CrearUsuario";
import ListadoUsuario from "../Components/usuariosSistema/ListadoUsuario";
import { VerUsuario } from "../Components/usuariosSistema/VerUsuario";
import { EditarUsuario } from "../Components/usuariosSistema/EditarUsuario";
import { CrearManual } from "../Components/Manual/Manual";
import ListadoManual from "../Components/Manual/VerManual";

export const Rutas = () => {
    return (
        <BrowserRouter>
            <AuthProvider>

                <section id="content" className="content">
                    <Routes>
                        <Route path='/' element={<PublicLayout />}>
                            <Route index element={<Login />} />
                            <Route path='login' element={<Login />} />
                        </Route>
                        <Route path='/social' element={<PrivateLayout />}>
                        <Route path="cargar-persona" element={<CrearUsuario />} />
                            <Route path="lista-persona" element={<ListadoUsuario />} />
                            <Route path="ver-usuario/:id" element={<VerUsuario />} />
                            <Route path="editar-usuario/:id" element={<EditarUsuario />} />
                            <Route path="guardar-manual" element={<CrearManual />} />
                            <Route path="ver-manual" element={< ListadoManual/>} />

                            
                            <Route path="salir" element={<Logout />} />
                        </Route>
                    
                        <Route path='*' element={
                            <>
                                <h1>Error 404</h1>
                                <Link to="/">Volver a inicio</Link>
                            </>

                        } />
                    </Routes>
                </section>
            </AuthProvider>
        </BrowserRouter>
    );
}