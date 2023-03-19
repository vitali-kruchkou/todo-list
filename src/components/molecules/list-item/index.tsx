import React from 'react';
import { Col } from 'antd';

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import CheckboxComponents from '../../atoms/Checkbox';
import IconButtonComponents from '../../atoms/IconButton';
import Text from '../../atoms/Typography/Paragraph';

import { Container, CustomRow, Icon, Title } from './style';
import { IListItemProps } from './type';

const ListItem: React.FC<IListItemProps> = ({ text, onDelete, onEdit }) => {
  return (
    <>
      <Container>
        <CustomRow justify={'space-between'}>
          <Col span={1}>
            <CheckboxComponents />
          </Col>
          <Title span={10}>
            <Text>{text}</Text>
          </Title>
          <Col span={5}>
            <Text>{new Date().toLocaleDateString()}</Text>
          </Col>
          <Icon span={2}>
            <IconButtonComponents
              icon={<EditOutlined />}
              onClick={() => onEdit()}
            />
          </Icon>
          <Icon span={2}>
            <IconButtonComponents
              icon={<DeleteOutlined />}
              danger
              onClick={() => onDelete(text)}
            />
          </Icon>
        </CustomRow>
      </Container>
    </>
  );
};

export default ListItem;
