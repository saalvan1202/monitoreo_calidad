import { Button, DatePicker, Input, message, Select, Upload } from "antd";
import "./CrearUsuario.scss";
import Form from "antd/es/form/Form";
import { PlusOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import {
  axiosGet,
  axiosPost,
  URLREGISTER,
  URLROLES,
} from "../../../../api/api";
import { Value } from "sass";
import { USEROBJ } from "./Objects";
import FormModal from "../../../../components/modals/FormModal";
import FormCambiarContraseña from "./FormCambiarContraseña";
import { authStore } from "../../../../store/Auth/AuthStote";
import { useParams } from "react-router-dom";
export default function CrearUsuario(props) {
  const { disable, user, buttonText } = props;
  let contentButton = "AGREGAR";
  let userValue = USEROBJ;
  let disableButton = false;
  if (user) {
    userValue = user;
  }
  if (disable) {
    disableButton = disable;
  }
  if (buttonText) {
    contentButton = buttonText;
  }
  const [openRegister, setOpenRegister] = useState(false);
  const formRefRegister = useRef(null);
  const [date, setDate] = useState();
  const [age, setAge] = useState();
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const [error, setError] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const token = authStore((state) => state.tokens);

  // ROLES
  const [roles, setRoles] = useState([
    {
      role_id: "",
      role_name: "",
    },
  ]);
  const [loads, setLoads] = useState();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // Reemplaza 'tu_token_aqui' con tu token real
  };
  const load = () => {
    messageApi.open({
      type: "loading",
      content: "Creando Usuario...",
      duration: 0,
    });
    // Dismiss manually and asynchronously
  };
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Usuario Creado",
    });
  };
  const errors = (errorValue) => {
    messageApi.open({
      type: "error",
      content: errorValue,
    });
  };
  function onChange(date, dateString) {
    setDate(dateString);
  }
  console.log(loading);
  useEffect(() => {
    if (loading == true) {
      load();
    } else {
      messageApi.destroy();
    }
    if (check == true) {
      success();
    }
    if (error) {
      errors(error);
    }
  }, [loading, check, error]);
  async function onFinish(value) {
    value.fechaNacimiento = date;
    value.fotografia = "ruta";
    delete value.rol;
    await axiosPost(
      URLREGISTER,
      value,
      headers,
      setLoading,
      setCheck,
      setError
    );
    console.log(value);
  }
  useEffect(() => {
    function getRoles() {
      axiosGet(URLROLES, headers, setLoads, setRoles);
    }
    getRoles();
  }, []);

  return (
    <>
      <Form onFinish={onFinish}>
        {contextHolder}
        <div className="user">
          <header className="user-header">REGISTRAR NUEVO USUARIO</header>
          <div className="form">
            <section className="form-user">
              <div className="form-user_img">
                <div className="form-user_img-imagen">
                  <section>
                    <img
                      src="https://simormawa.umsu.ac.id/assets/tema/img/default.jpg"
                      alt=""
                    />
                  </section>
                  <section>
                    <Form.Item name="fotografia">
                      <Upload accept="image/*">
                        <button
                          style={{
                            backgroundColor: "white",
                            width: "100%",
                            minWidth: "32vh",
                            height: "2.3rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                            color: "black",
                          }}
                          type="button"
                        >
                          <PlusOutlined />
                          <div style={{}}>Adjuntar Fotografia</div>
                        </button>
                      </Upload>
                    </Form.Item>
                  </section>
                </div>
              </div>
              <div className="form-user_data">
                <div className="row">
                  <Form.Item
                    layout="vertical"
                    label="Nombre:"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingrese el Nombre!",
                      },
                    ]}
                  >
                    <Input defaultValue={userValue.name} />
                  </Form.Item>
                  <Form.Item
                    layout="vertical"
                    label="Apellido Paterno:"
                    name="lastname"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingrese el Apellido Paterno!",
                      },
                    ]}
                  >
                    <Input defaultValue={userValue.lastname} />
                  </Form.Item>
                  <Form.Item
                    layout="vertical"
                    label="Apellido Materno:"
                    name="apellidoMaterno"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingrese el Apellido Materno!",
                      },
                    ]}
                  >
                    <Input defaultValue={userValue.apellidoMaterno} />
                  </Form.Item>
                </div>
                <div className="row">
                  <Form.Item
                    layout="vertical"
                    label="DNI:"
                    name="dni"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingrese el DNI!",
                      },
                    ]}
                  >
                    <Input defaultValue={userValue.dni} />
                  </Form.Item>
                  <Form.Item
                    layout="vertical"
                    label="Fecha de Nacimiento:"
                    name="fechaNacimiento"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingrese el Fecha de Nacimiento!",
                      },
                    ]}
                  >
                    <DatePicker
                      size="small"
                      maxTagCount="responsive"
                      style={{
                        width: "100%",
                        borderWidth: "2px",
                        height: "2.3rem",
                      }}
                      onChange={onChange}
                      placeholder=""
                      defaultValue=""
                    />
                  </Form.Item>
                  <Form.Item
                    layout="vertical"
                    label="Edad:"
                    name="edad"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input defaultValue={userValue.edad} />
                  </Form.Item>
                </div>
                <div className="row">
                  <Form.Item
                    layout="vertical"
                    label="Estado Civil:"
                    name="estadoCivil"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      defaultValue={userValue.estadoCivil}
                      style={{
                        width: "100%",
                        borderWidth: "2px",
                        borderRadius: "5px",
                        textAlign: "start",
                        height: "2.3rem",
                      }}
                      options={[
                        {
                          value: "SOLTERO",
                          label: "Soltero",
                        },
                        {
                          value: "CASADP",
                          label: "Casado",
                        },
                        {
                          value: "VIUDO",
                          label: "Viudo",
                        },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item
                    layout="vertical"
                    label="Direccion:"
                    name="address"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input defaultValue={userValue.address} />
                  </Form.Item>
                  <Form.Item
                    layout="vertical"
                    label="Telefono:"
                    name="phone"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input defaultValue={userValue.phone} />
                  </Form.Item>
                </div>
              </div>
            </section>
            <section className="form-access">
              <div className="form-access_data">
                <div className="vertical">
                  <Form.Item
                    layout="vertical"
                    label="Usuario:"
                    name="username"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input
                      defaultValue={userValue.username}
                      disabled={disableButton}
                    />
                  </Form.Item>
                  <Form.Item
                    layout="vertical"
                    label="E-Mail:"
                    name="email"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input
                      defaultValue={userValue.email}
                      disabled={disableButton}
                    />
                  </Form.Item>
                  <Form.Item
                    layout="vertical"
                    label="Contraseña:"
                    name="password"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input.Password
                      size="small"
                      style={{
                        borderWidth: "2px",
                        height: "2.3rem",
                      }}
                      defaultValue=""
                      disabled={disableButton}
                    />
                  </Form.Item>
                  <Form.Item
                    layout="vertical"
                    label="Rol de Usuario:"
                    name="rol"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      defaultValue=""
                      disabled={disableButton}
                      style={{
                        width: "100%",
                        borderWidth: "2px",
                        borderRadius: "5px",
                        textAlign: "start",
                        height: "2.3rem",
                      }}
                      options={[
                        {
                          value: 1,
                          label: "ROLE_ADMIN",
                        },
                        {
                          value: 2,
                          label: "ROLE_USER",
                        },
                        {
                          value: 3,
                          label: "ROLE_BIOLOGIST",
                        },
                        {
                          value: 4,
                          label: "ROLE_PRACTICING ",
                        },
                      ]}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="form-access_button">
                <section className="button-form">
                  {contentButton === "AGREGAR" ? (
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        {contentButton}
                      </Button>
                    </Form.Item>
                  ) : (
                    <Button
                      type="primary"
                      onClick={() => {
                        setOpenRegister(true);
                      }}
                    >
                      {contentButton}
                    </Button>
                  )}
                </section>
              </div>
            </section>
          </div>
        </div>
      </Form>
      <FormModal
        title="CAMBIAR CONTRASEÑA"
        open={openRegister}
        setOpen={setOpenRegister}
        formRef={formRefRegister}
      >
        <FormCambiarContraseña formRef={formRefRegister} />
      </FormModal>
    </>
  );
}
