import styled, { css } from 'styled-components';

export const Botao = styled.button`
  background: transparent;
  border-radius: 2px;
  border: 1px solid #3a92e4;
  color: #1861a5;
  margin: 0;
  padding: 0.6em;
  font-size: 12px;
  text-transform: uppercase;

  &:hover {
    background: rgba(24, 97, 165, 0.13);
    border: 1px solid #1861a5;
    cursor: pointer;
  }

  ${(props) =>
    props.estilo &&
    css`
      background: ${cores[props.estilo].normal};
      color: white;
      margin: 0px;

      &:hover {
        background: ${cores[props.estilo].hover};
        border: 1px solid ${cores[props.estilo].hover};
      }
    `};
`;

export const cores = {
  // "cta" é abreviação de "Call To Action"
  cta: {
    normal: '#3a92e4',
    hover: '#1861a5',
  },
};
