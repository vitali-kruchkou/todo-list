import React from 'react';

import { DeleteOutlined } from '@ant-design/icons';

import CheckboxComponents from '../../atoms/Checkbox';
import IconButtonComponents from '../../atoms/IconButton';
import Text from '../../atoms/Typography/Paragraph';
import { Col, Row } from 'antd';
import { Container, Icon, Title } from './style';

const ListItem: React.FC = () => {
  return (
    <>
      <Container>
        <Row>
          <Col span={1}>
            <CheckboxComponents />
          </Col>
          <Title span={6}>
            <Text>{123}</Text>
          </Title>
          <Icon span={6}>
            <IconButtonComponents icon={<DeleteOutlined />} danger />
          </Icon>
        </Row>
      </Container>
    </>
  );
};

export default ListItem;
