import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { IIconButtonProps } from './type';

const IconButtonComponents: React.FC<IIconButtonProps> = ({
  children,
  type = 'default',
  ...props
}) => <Button type={type} {...props} icon={<PlusOutlined />} />;

export default IconButtonComponents;
