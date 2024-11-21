import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Spin, Table } from "antd";
import Highlighter from "react-highlight-words";
import { axiosGet, URLUSERS } from "../../api/api";
import "./Tables.scss";
import { authStore } from "../../store/Auth/AuthStote";
const Tables = (props) => {
  const token = authStore((state) => state.tokens);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // Reemplaza 'tu_token_aqui' con tu token real
  };
  const { filter } = props;
  const [Users, setUsers] = useState([]);
  const [Loading, setLoading] = useState();
  useEffect(() => {
    axiosGet(URLUSERS, headers, setLoading, setUsers);
  }, []);
  const filteredData = Users.filter((record) =>
    Object.values(record).some((value) =>
      value.toString().toLowerCase().includes(filter.toLowerCase())
    )
  );
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Buscar ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Buscar
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    filterDropdownProps: {
      onOpenChange(open) {
        if (open) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  //COLUMNAS
  const columns = [
    {
      title: "DNI",
      dataIndex: "dni",
      key: "dni",
      width: "15%",
    },
    {
      title: "NOMBRE",
      dataIndex: "name",
      key: "name",
      width: "20%",
    },
    {
      title: "APELLIDOS",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "ROL",
      dataIndex: "role",
      key: "roles",
    },
    {
      title: "CORREO",
      dataIndex: "email",
      key: "email",
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
export default Tables;
