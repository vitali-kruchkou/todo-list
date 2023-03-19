import { Modal } from 'antd';
import React from 'react';
import { IEditModalsProps } from './type';

const EditModals: React.FC<IEditModalsProps> = ({
  isModalOpen,
  handleAccept,
  handleCancel,
}) => {
  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleAccept}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default EditModals;
