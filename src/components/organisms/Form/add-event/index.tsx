import React from 'react';
import { Col, Form, Row } from 'antd';

import IconButtonComponents from '../../../atoms/IconButton';
import TextFieldComponents from '../../../atoms/TextField';

import { PlusOutlined } from '@ant-design/icons';
import { FormContainer } from './style';
import { IAddEventProps } from './type';

const AddEventForm: React.FC<IAddEventProps> = ({ onFinish }) => {
  return (
    <>
      <FormContainer name="basic" onFinish={onFinish} autoComplete="off">
        <Row justify="space-between">
          <Col span={18}>
            <Form.Item name="value">
              <TextFieldComponents />
            </Form.Item>
          </Col>
          <Col span={1}>
            <Form.Item>
              <IconButtonComponents icon={<PlusOutlined />} htmlType="submit" />
            </Form.Item>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default AddEventForm;
