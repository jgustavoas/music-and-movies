import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${(props) =>
    props.id === 'Aviso' &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      height: 16vh;
    `}
`;
