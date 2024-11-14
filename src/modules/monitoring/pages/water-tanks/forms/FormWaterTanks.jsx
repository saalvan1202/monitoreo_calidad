import { Form, Input, Select } from 'antd';
import { zonas } from '../../../../../@fake-db/zonas.js';
import { optionsTransform } from '../../../../../utils/optionsTransform.js';

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const FormWaterTanks = ({ formRef, handleSubmit = () => { }, id_area = 0, nombre = "", descripcion = "" }) => {

    const optionsZones = optionsTransform(zonas);

    return (
        <Form
            ref={formRef}
            name="basic"
            layout='vertical'
            initialValues={{
                id_area_tanque: id_area,
                nombre_tanque: nombre,
                descripcion_tanque: descripcion,
            }}
            onFinish={handleSubmit}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Area"
                name="id_area_tanque"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Select defaultValue={id_area} options={optionsZones} />
            </Form.Item>

            <Form.Item
                label="Nombre"
                name="nombre_tanque"
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
                name="descripcion_tanque"
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
export default FormWaterTanks;