import { Form, Input } from "antd";

export default function FormCambiarContraseña() {
  function SubmitForm(values) {
    console.log(values);
  }
  return (
    <Form layout="vertical" onFinish={SubmitForm}>
      <Form.Item
        label="Contraseña Actual"
        name="contraseña_actual"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Nueva Contraseña"
        name="contraseña_actual"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Confirmación de Contraseña"
        name="contraseña_actual"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
}
