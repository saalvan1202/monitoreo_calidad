import { Modal } from 'antd';

const BasicModal = ({ title = "", open = true, setOpen = () => { }, children, handleExecution }) => {

    const handleOk = () => {
        handleExecution();
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    return (
        <Modal
            title={title}
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="Aceptar"
            cancelText="Cancelar"
            centered
        >
            {children}
        </Modal>
    );
};
export default BasicModal;