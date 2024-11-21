import { useEffect, useState } from "react";
import CrearUsuario from "../crear-usurio/CrearUsuario";
import "./Profile.scss";
import { axiosGet, URLUSER } from "../../../../api/api";
import { authStore } from "../../../../store/Auth/AuthStote";
import { Spin } from "antd";
export default function Profile() {
  const token = authStore((state) => state.tokens);
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // Reemplaza 'tu_token_aqui' con tu token real
  };
  console.log(token);
  const user = authStore((state) => state.user);
  const { user_id } = user;
  const [User, setUser] = useState();
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    axiosGet(URLUSER(user_id), headers, setLoading, setUser);
    console.log(User);
  }, [user]);
  if (!Loading) {
    return <Spin />;
  }
  return (
    <CrearUsuario disable={true} user={User} buttonText="CAMBIAR CONTRASEÑA" />
  );
}
