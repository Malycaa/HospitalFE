import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const SecurePage = () => {
    const user = useSelector(state => state.token.user);
    return (
        <>
            {user ? <Outlet /> : <Navigate to="/login" replace={true} />}
        </>
    )
}

export default SecurePage