import { Col, ColProps } from 'antd';
import styled from 'styled-components';

export const Container = styled('div')(
  () => ({
    maxWidth: 700,
  }),
  { name: 'Container' }
);

export const Title: React.FC<ColProps> = styled(Col)(
  () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }),
  { name: 'Title' }
);

export const Icon: React.FC<ColProps> = styled(Col)(
  () => ({
    marginLeft: 100,
  }),
  { name: 'Title' }
);
