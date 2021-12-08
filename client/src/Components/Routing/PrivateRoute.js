import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem("token")
    return (
        <div>
            {token ? <Route component={Component} {...rest} /> : <Redirect to="/login" />}
        </div>
    )
}

export default PrivateRoute
