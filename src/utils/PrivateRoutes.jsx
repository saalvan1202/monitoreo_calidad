import { Outlet, Navigate } from "react-router-dom";
import PrincipalLayout from "../components/layouts/principal-layout";

const PrivateRoutes = () => {
  const user = false;

  return user ? (
    <PrincipalLayout>
      <Outlet />
    </PrincipalLayout>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;