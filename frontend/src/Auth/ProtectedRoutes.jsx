import { Navigate } from "react-router-dom"
import { token } from "../utils/backend_services";

// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({ children }) => {
    let isAuth;
    if(token){
        isAuth = true;
      }else{
        isAuth = false;
      }
  return (
    isAuth === true ? children : <Navigate to='/auth' replace/>
  )
}

export default ProtectedRoutes