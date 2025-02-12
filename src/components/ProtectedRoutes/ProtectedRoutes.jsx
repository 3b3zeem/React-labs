import { useContext } from "react";
import { TokenContext } from "../Context/TokenContext";
import { Navigate } from "react-router";

const ProtectedRoutes = ({ children }) => {
  const { token } = useContext(TokenContext);
  if (token) {
    return children
  } else {
    return <Navigate to={"/login"} />
  }
};

export default ProtectedRoutes;
