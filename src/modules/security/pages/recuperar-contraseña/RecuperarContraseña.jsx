import React from "react";
import "../login/Login.scss";
import { Button, Form, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
export default function RecuperarContraseña() {
  function onFinish(value) {
    console.log(value);
  }
  return (
    <div className="content">
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
            <h1>Recuperar Contraseña</h1>
            <h2 className="text-justify">
              Para el envio correcto de recuperacion de contraseña se debe
              ingresar el correo con el que se registro.
            </h2>
          </section>
          <section className="login-body_form">
            <Form
              className="form"
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <section>
                <section className="input-form">
                  {/* <section className="icon">
                <FontAwesomeIcon icon={faLock} />
              </section> */}
                  <Form.Item
                    name="correo"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingrese el Correo!",
                      },
                    ]}
                  >
                    <Input placeholder="Correo" prefix={<MailOutlined />} />
                  </Form.Item>
                </section>
                <section className="form-recuperar">
                  <a href="/login">Regresar a Iniciar Sesión</a>
                </section>
              </section>
              <section className="button-form">
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    ENVIAR
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
}
