import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Spin, Table } from "antd";
import Highlighter from "react-highlight-words";
import { axiosGet, URLBACKUP, URLUSERS } from "../../api/api";
import "./Tables.scss";
import { authStore } from "../../store/Auth/AuthStote";
const TablesBackups = (props) => {
  const { filter, Change } = props;
  const token = authStore((state) => state.tokens);
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // Reemplaza 'tu_token_aqui' con tu token real
  };
  const [Users, setUsers] = useState([]);
  const [Loading, setLoading] = useState();
  useEffect(() => {
    axiosGet(URLBACKUP, headers, setLoading, setUsers);
  }, [Change]);
  const filteredData = Users.filter((record) =>
    Object.values(record).some((value) =>
      value.toString().toLowerCase().includes(filter.toLowerCase())
    )
  ).reverse();
  //COLUMNAS
  const columns = [
    {
      title: "NOMBRE DE LA COPIA DE SEGURIDAD",
      dataIndex: "name",
      key: "name",
      width: "40%",
    },
    {
      title: "FECHA CREACIÓN",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "TAMAÑO",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "ACCIONES",
      dataIndex: "actions",
      key: "actions",
      width: "10%",
      render: (_, record) => (
        <Space size="middle">
          {/* Aquí puedes añadir botones */}
          <Button
            type="primary"
            onClick={() => handleEdit(record)}
            style={{ backgroundColor: "#13C703" }}
          >
            Editar
          </Button>
          <Button
            danger
            type="primary"
            onClick={() => handleDelete(record)}
            style={{ backgroundColor: "#DF0713" }}
          >
            Eliminar
          </Button>
        </Space>
      ),
    },
  ];
  if (!Loading) {
    return <Spin />;
  }
  return (
    <Table
      columns={columns}
      dataSource={filteredData}
      pagination={{ pageSize: 10 }}
      size="middle"
    />
  );
};
export default TablesBackups;
