import React from 'react';
import { Col, Form, Row } from 'antd';

import { PlusOutlined } from '@ant-design/icons';

import { FormContainer } from './style';
import { IAddEventProps } from './type';

import TextFieldComponents from '@components/atoms/TextField';
import IconButtonComponents from '@components/atoms/IconButton';

const AddEventForm: React.FC<IAddEventProps> = ({ onFinish }) => {
  return (
    <>
      <FormContainer
        name="basic"
        onFinish={(values) => onFinish(values as Record<string, string>)}
        autoComplete="off"
      >
        <Row justify="space-between">
          <Col span={18}>
            <Form.Item
              name="value"
              rules={[{ required: true, message: 'Please input your task!' }]}
            >
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
