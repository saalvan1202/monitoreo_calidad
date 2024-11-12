import { useState } from 'react';
import { Modal } from 'antd';

const FormModal = ({ title = "", open = true, setOpen = () => { }, children, formRef }) => {

  const handleOk = () => {
    if (formRef.current) formRef.current.requestSubmit();
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
      centered
    >
      {children}
    </Modal>
  );
};
export default FormModal;