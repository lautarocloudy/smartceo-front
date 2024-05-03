import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider";
import { PublicLayout } from "../Components/empresa1/publictLayout";
import { Login } from "../Components/usuarios/login";
import { Logout } from "../Components/usuarios/Logout";
import { PrivateLayout } from "../Components/layout/PrivateLayout";

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
                            {/* <Route index element={<ListaEmpresa />} />
                            <Route path="lista-paginas-web" element={<ListaEmpresa />} />
                            <Route path="lista/:busqueda" element={<ListaEmpresa />} />
                            <Route path="cargar-paginas-web" element={<CrearEmpresa />} /> */}


                            
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