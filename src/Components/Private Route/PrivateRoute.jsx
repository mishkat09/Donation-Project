import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Auth Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return(
            <div className="container mx-auto flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
        )
    }

    if(user){
        return children
    }
    
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node,
  };