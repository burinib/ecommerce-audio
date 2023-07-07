import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const { accesToken, isLogged } = useSelector((store) => store.authSlice);
  return (
    <>{isLogged && accesToken ? <Outlet /> : <Navigate to={"/login"} />}</>
  );
};

export default ProtectedRoutes;
