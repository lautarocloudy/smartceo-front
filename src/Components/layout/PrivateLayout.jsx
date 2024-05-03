import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import Header from './Header';
import Nav from './Nav';

export const PrivateLayout = () => {

    const { auth, loading } = useAuth();

    if (loading) {
        <h1>Cargando...</h1>
    } else {
        return (
            <>
                <Header />
                <Nav />

                <section className="layout__content">

                    {auth._id ?
                        (auth.role == "admin" ?
                            <Outlet /> :

                            <Navigate to='/' />

                        )
                        : <Navigate to='/' />
                    }

                </section>
            </>
        )
    }
}