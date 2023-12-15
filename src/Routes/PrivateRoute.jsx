import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user , loader} =useContext(AuthContext);
    const location= useLocation();
    console.log(location);
    if(loader){
        return  <Spinner animation="border" variant="danger" />;
    }
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;