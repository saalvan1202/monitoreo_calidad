import { Button, Input, message } from "antd";
import "../list-users/ListaUsuario.scss";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Tables from "../../../../components/tables/Tables";
import { useEffect, useState } from "react";
import TablesBackups from "../../../../components/tables/TablesBackups";
import { postBackUp, URLBACKUP } from "../../../../api/api";
import { authStore } from "../../../../store/Auth/AuthStote";
export default function Backup(props) {
  let contSucces = 0;
  const [messageApi, contextHolder] = message.useMessage();
  const load = () => {
    messageApi.open({
      type: "loading",
      content: "Generando BackUp...",
      duration: 0,
    });
    // Dismiss manually and asynchronously
  };
  const success = () => {
    messageApi.open({
      type: "success",
      content: "BackUp Generado",
    });
  };
  const token = authStore((state) => state.tokens);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // Reemplaza 'tu_token_aqui' con tu token real
  };
  const Navigate = useNavigate();
  const [Text, setText] = useState("");
  const [Change, setChange] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };
  const generateBackUp = async () => {
    await postBackUp(URLBACKUP, headers, setChange, Change);
  };
  useEffect(() => {
    if (Change === true) {
      load();
    } else {
      if (Change === false) {
        messageApi.destroy();
        success();
      }
    }
  }, [Change]);
  return (
    <div className="list">
      {contextHolder}
      <header className="list-header">
        <h1>HISTORIAL DE BACKUPS</h1>
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
            <Button onClick={generateBackUp}>GENERAR BACKUP</Button>
          </div>
        </section>
        <section className="list-user_table">
          <TablesBackups filter={Text} Change={Change} />
        </section>
      </div>
    </div>
  );
}
