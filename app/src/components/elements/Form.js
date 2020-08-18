import React from 'react';
import Button from './Button';
import { Form } from '../../styles/Form.style';

export default function Componente(props) {
  const { id, btLabel, btFunction, children } = props;

  return (
    <Form onSubmit={(e) => e.preventDefault()} id={id}>
      {children}

      <Button estilo='cta' funcao={btFunction}>
        {btLabel}
      </Button>
    </Form>
  );
}
