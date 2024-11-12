import { Form, Input } from 'antd';

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const FormZone = ({ formRef, handleSubmit = () => { }, nombre = "", descripcion = "" }) => (
    <Form
        ref={formRef}
        name="basic"
        layout='vertical'
        initialValues={{
            nombre_zona: nombre,
            descripcion_zona: descripcion,
        }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item
            label="Nombre"
            name="nombre_zona"
            rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
            ]}
        >
            <Input defaultValue={nombre} />
        </Form.Item>

        <Form.Item
            label="Descripcion"
            name="descripcion_zona"
            rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
            ]}
        >
            <Input defaultValue={descripcion} />
        </Form.Item>
    </Form>
);
export default FormZone;