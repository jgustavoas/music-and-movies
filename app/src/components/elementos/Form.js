import React from 'react';
import Botao from './Botao';
import { Form } from '../../styles/Form.style';

export default function Componente(props) {
  const { id, btLabel, btFunction, children } = props;

  return (
    <Form onSubmit={(e) => e.preventDefault()} id={id}>
      {children}

      <Botao estilo='cta' funcao={btFunction}>
        {btLabel}
      </Botao>
    </Form>
  );
}
