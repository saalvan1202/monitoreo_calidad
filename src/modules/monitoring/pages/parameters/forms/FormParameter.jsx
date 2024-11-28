import { Form, Input } from 'antd';

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const FormParameter = ({ formRef, handleSubmit = () => { } }) => {

    return (
        <Form
            ref={formRef}
            name="basic"
            layout='vertical'
            initialValues={{}}
            onFinish={handleSubmit}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="PH"
                name="PH_parameter"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input type='number' />
            </Form.Item>

            <Form.Item
                label="Oxigeno"
                name="Oxigeno_parameter"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Oxigeno"
                name="CO2_parameter"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Oxigeno"
                name="Nitrito_parameter"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Oxigeno"
                name="Nitrato_parameter"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
        </Form>
    )
};
export default FormParameter;