import { Col, Row } from 'antd';
import React from 'react';

import IconButtonComponents from '../../atoms/IconButton';
import TextFieldComponents from '../../atoms/TextField';
import { Container } from './style';

import { PlusOutlined } from '@ant-design/icons';
import { ISearchBarProps } from './type';

const SearchBar: React.FC<ISearchBarProps> = () => {
  return (
    <>
      <Container>
        <Row justify="space-between">
          <Col span={18}>
            <TextFieldComponents />
          </Col>
          <Col span={1}>
            <IconButtonComponents icon={<PlusOutlined />} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchBar;
