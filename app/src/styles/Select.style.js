import styled, { css } from 'styled-components';

export const Select = styled.section`
  font-size: 12px;

  & select {
    font-size: 12px;
    background: #fff;
    border: 1px solid #999;
    border-radius: 1px;
    width: 100%;
    height: 24px;
    padding: 0 4px;
    color: rgb(80, 80, 80);
    margin-bottom: 12px;
  }

  ${(props) =>
    !props.valido &&
    css`
      & input {
        border: 2px solid rgb(177, 17, 17);
        background-color: rgb(221, 150, 150);
      }

      & input::placeholder {
        color: rgb(177, 17, 17);
      }
    `};
`;
