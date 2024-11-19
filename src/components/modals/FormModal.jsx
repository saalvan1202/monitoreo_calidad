import { Modal } from 'antd';

const FormModal = ({ title = "", open = true, setOpen = () => { }, children, formRef, confirmLoading = false }) => {

  const handleOk = () => {
    if (formRef.current) formRef.current.submit();
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    if (formRef.current) formRef.current.resetFields();
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
      confirmLoading={confirmLoading}
    >
      {children}
    </Modal>
  );
};
export default FormModal;