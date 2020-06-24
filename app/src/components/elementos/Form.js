import React from 'react';
import { Form } from '../../styles/Form.style';

export default function Componente(props) {
  const { id, children } = props;
  return <Form id={id}>{children}</Form>;
}
