import { Button, Input } from "antd";
import "./ListaUsuario.scss";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Tables from "../../../../components/tables/Tables";
import { useState } from "react";
export default function ListaUsuario(props) {
  const Navigate = useNavigate();
  const [Text, setText] = useState("");
  const handleText = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="list">
      <header className="list-header">
        <h1>LISTA DE USUARIOS</h1>
      </header>
      <div className="list-user">
        <section className="list-user_filter">
          <div className="list-user_filter-input">
            <Input
              type="text"
              prefix={<SearchOutlined />}
              onChange={(e) => handleText(e)}
              placeholder="Buscar"
            />
          </div>
          <div className="list-user_filter-button">
            <Button onClick={() => Navigate("/create-user")}>
              CREAR USUARIO
            </Button>
          </div>
        </section>
        <section className="list-user_table">
          <Tables filter={Text} />
        </section>
      </div>
    </div>
  );
}
