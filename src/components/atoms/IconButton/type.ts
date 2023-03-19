import { ReactNode } from 'react';
import { ButtonProps } from 'antd/lib/button/button';

export interface IIconButtonProps extends ButtonProps {
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
  icon: ReactNode;
}
