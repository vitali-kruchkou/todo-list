import React from 'react';
import { Typography } from 'antd';
import { IParagraphProps } from './type';

const { Paragraph } = Typography;

const ParagraphComponent: React.FC<IParagraphProps> = ({
  children,
  ...props
}) => {
  return <Paragraph {...props}>{children}</Paragraph>;
};

export default ParagraphComponent;
