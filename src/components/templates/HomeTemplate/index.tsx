import { Col, Row } from 'antd';
import React from 'react';
import { IHomeTemplateProps } from './type';

const HomeTemplate: React.FC<IHomeTemplateProps> = ({ form, list }) => {
  return (
    <>
      <Row>
        <Col>{form}</Col>
      </Row>
      <Row>
        <Col>{list}</Col>
      </Row>
    </>
  );
};

export default HomeTemplate;
