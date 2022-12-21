import React, { Component } from "react";
import { Navigate, Outlet,useNavigate } from 'react-router-dom'

export const ProtectedRoute = () => {

    const navigate = useNavigate();

    let auth = Boolean(localStorage.getItem('username'))
    return (
      auth ? <Outlet/> : navigate('/')
    )
  }




//   export const ProtectedRoute = ({ component: Component, ...rest }) => (
    //     <Route {...rest} render={props => (
    //       Boolean(localStorage.getItem('username')) ? (
    //         <Component {...props}/>
    //       ) : (
    //         <Navigate to={{
    //           pathname: '/',
    //           state: { from: props.location }
    //         }}/>
    //       )
    //     )}/>
    //   )