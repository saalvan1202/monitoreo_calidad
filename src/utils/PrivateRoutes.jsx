import { Outlet, Navigate, useNavigate } from "react-router-dom";
import PrincipalLayout from "../components/layouts/principal-layout";
import { authStore } from "../store/Auth/AuthStote";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Spin } from "antd";
const PrivateRoutes = () => {
  const Navigate = useNavigate();
  const [user, setUser] = useState(null);
  const loadUserFromToken = authStore((state) => state.loadUserFromToken);

  useEffect(() => {
    const token = localStorage.getItem("token");
    // Solo cargar el usuario si el token existe
    if (token) {
      loadUserFromToken();
      const users = jwtDecode(token);
      setUser(users);
      console.log(user);
    } else {
      setUser(null);
      Navigate("/login");
      console.log("No token found");
    }
  }, []);

  // Si user es nulo, redirige al login
  // if (user == null) {
  //   return <Spin />;
  // }

  return (
    <PrincipalLayout>
      <Outlet />
    </PrincipalLayout>
  );
};

export default PrivateRoutes;
