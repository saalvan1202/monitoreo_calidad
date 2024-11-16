import React, { useState } from "react";
import "./Login.scss";
import { Button, Form, Input, message } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { axiosPostLogin } from "../../../../api/api";
import { authStore } from "../../../../store/Auth/AuthStote";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "¡Bienvenido!",
    });
  };
  const errors = () => {
    messageApi.open({
      type: "error",
      content:
        "El usuario o la contraseña ingresados son incorrectos. Por favor, inténtelo de nuevo.",
    });
  };
  const navigate = useNavigate();
  const [token, setToken] = useState();
  const login = authStore((state) => state.login);
  async function onFinish(value) {
    try {
      const url = "http://localhost:8080/auth/login";
      const response = await axios.post(url, value);
      success();
      setToken(response.data.token);
      login(response.data.token);
      navigate("/zones");
    } catch (error) {
      errors();
    }
  }
  return (
    <div className="content">
      {contextHolder}
      <section className="login">
        <section className="login-header">
          <section className="escudo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/97/Escudo_nacional_del_Perú.png"
              alt=""
              height="59px"
              width="70px"
            />
          </section>
          <section className="login-header_peru">PERÚ</section>
          <img
            src="https://www.itp.gob.pe/wp-content/uploads/2022/10/CITEacuicola-pes-Ahuashiyacu.png"
            alt=""
            width="220px"
          />
        </section>
        <section className="login-body">
          <section className="login-body_titulo">
            <h1>Iniciar Sesión</h1>
            <h2>Bienvenido Al Panel de Usuario</h2>
          </section>
          <section className="login-body_form">
            <Form
              className="form"
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <section className="input-form">
                {/* <section className="icon">
                  <FontAwesomeIcon icon={faUser} />
                </section> */}
                <section className="personalizado">
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingrese su Usuario!",
                      },
                    ]}
                  >
                    <Input placeholder="Usuario" prefix={<UserOutlined />} />
                  </Form.Item>
                </section>
              </section>
              <section>
                <section className="input-form">
                  {/* <section className="icon">
                    <FontAwesomeIcon icon={faLock} />
                  </section> */}
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingrese su contraseña!",
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="Contraseña"
                      prefix={<LockOutlined />}
                    />
                  </Form.Item>
                </section>
                <section className="form-recuperar">
                  <a href="/recuperar-contraseña">Recuperar Contraseña</a>
                </section>
              </section>
              <section className="button-form">
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    INGRESAR
                  </Button>
                </Form.Item>
              </section>
            </Form>
          </section>
        </section>
        <section className="login-footer">
          <p>© 2024 Todos los derechos reservados. </p>
          <p>Grupo JAMIL</p>
        </section>
      </section>
      <section className="login-img"></section>
    </div>
  );
};

export default Login;
