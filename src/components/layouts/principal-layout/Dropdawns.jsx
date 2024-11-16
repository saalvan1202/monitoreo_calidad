import { Avatar, Badge, Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { authStore } from "../../../store/Auth/AuthStote";
import { useNavigate } from "react-router-dom";

const Dropdowns = () => {
  // Definimos la función Logout dentro del componente de función
  const logout = authStore((state) => state.logout);
  const Navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      Navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  const onProfile = () => {
    Navigate("/profile");
  };

  const items = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer" onClick={onProfile}>
          Perfil
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" rel="noopener noreferrer" onClick={handleLogout}>
          Cerrar sesión
        </a>
      ),
      danger: true,
    },
  ];
  const items2 = [
    {
      key: "1",
      label: "Sin notificaciones",
      disabled: true,
    },
  ];
  return (
    <>
      <Dropdown
        menu={{
          items: items2,
        }}
        placement="bottomRight"
        className="cursor-pointer"
      >
        <Badge size="small" count={1} color="geekblue">
          <Avatar
            style={{ backgroundColor: "#868889" }}
            size={"default"}
            icon={
              <FontAwesomeIcon icon={faBell} className="text-fondo-footer" />
            }
          />
        </Badge>
      </Dropdown>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomRight"
        className="cursor-pointer"
      >
        <Avatar
          style={{ backgroundColor: "#868889" }}
          size={"default"}
          icon={<FontAwesomeIcon icon={faUser} className="text-fondo-footer" />}
        />
      </Dropdown>
    </>
  );
};

export default Dropdowns;
