import { Form, Input, Select } from 'antd';
import { zonas } from '../../../../../@fake-db/zonas.js';
import { optionsTransform } from '../../../../../utils/optionsTransform.js';

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const FormArea = ({ formRef, handleSubmit = () => { }, id_zone = 0, nombre = "", descripcion = "" }) => {

    const optionsZones = optionsTransform(zonas);

    return (
        <Form
            ref={formRef}
            name="basic"
            layout='vertical'
            initialValues={{
                id_zone_area: id_zone,
                nombre_area: nombre,
                descripcion_area: descripcion,
            }}
            onFinish={handleSubmit}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Zona"
                name="id_zone_area"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Select defaultValue={id_zone} options={optionsZones} />
            </Form.Item>

            <Form.Item
                label="Nombre"
                name="nombre_area"
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
                name="descripcion_area"
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
    )
};
export default FormArea;