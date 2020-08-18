import React from 'react';
import { Container } from '../../styles/Container.style';

export default function Componente(props) {
  const { id, children: conteudo } = props;
  return <Container id={id}>{conteudo}</Container>;
}
