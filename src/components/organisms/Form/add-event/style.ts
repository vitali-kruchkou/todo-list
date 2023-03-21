import { Form } from 'antd';
import styled from 'styled-components';

export const FormContainer = styled(Form)(
  () => ({
    '& > div': {
      width: 400,
    },
  }),
  { name: 'FormContainer' }
);
