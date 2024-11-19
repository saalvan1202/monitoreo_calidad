import { Form, Input, Select } from 'antd';
import { zonas } from '../../../../../@fake-db/zonas.js';
import { optionsTransform } from '../../../../../utils/optionsTransform.js';
import { useMonitoring } from '../../../../../store/monitoring/useMonitoring.js';

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const FormArea = ({ formRef, handleSubmit = () => { }, id_zone = 0, nombre = "", descripcion = "" }) => {

    const { zones } = useMonitoring();

    const optionsZones = optionsTransform(zones, 'zones_id');

    return (
        <Form
            ref={formRef}
            name="basic"
            layout='vertical'
            initialValues={{
                zonaId_area: id_zone,
                name_area: nombre,
                description_area: descripcion,
            }}
            onFinish={handleSubmit}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Zona"
                name="zonaId_area"
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
                name="name_area"
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
                name="description_area"
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