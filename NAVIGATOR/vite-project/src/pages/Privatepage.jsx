

import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { Usercontext } from '../CONTEXT/Userauth';

const Privatepage = ({children}) => {
    const{token}=useContext(Usercontext)
    
    if (!token) {
        return <Navigate to={"/login"} />;
    }
    
    return children;
}

export default Privatepage;