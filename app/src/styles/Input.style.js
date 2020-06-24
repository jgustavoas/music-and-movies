import styled, { css } from 'styled-components';

export const CampoDeInput = styled.section`
  font-size: 12px;

  & input {
    background: #fff;
    border: 1px solid #999;
    border-radius: 1px;
    width: 100%;
    height: 32px;
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

export const Input = styled.input`
  width: 16px;
  margin-bottom: 0px;
  margin-top: 2px;
`;
