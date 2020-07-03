import React from 'react';
import { Form } from '../../styles/Form.style';

export default function Componente(props) {
  const { id, children } = props;
  return (
    <Form onSubmit={(e) => e.preventDefault()} id={id}>
      {children}
    </Form>
  );
}
