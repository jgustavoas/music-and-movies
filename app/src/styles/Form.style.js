import styled from 'styled-components';

export const Form = styled.form`
  &#loginForm {
    height: 240px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 1rem;

    & fieldset,
    & section {
      border: none;
      display: flex;
      flex-direction: column;
      margin-bottom: 8px;
    }
  }

  &#cardForm {
    font-size: 1rem;
    & fieldset,
    & section {
      border: none;
      display: flex;
      flex-direction: column;
      margin-bottom: 8px;
      & input {
        background: #fff;
        border: 1px solid #999;
        border-radius: 1px;
        width: 100%;
        height: 32px;
        padding: 0 4px;
        color: rgb(80, 80, 80);

        &::placeholder {
          color: rgb(80, 80, 80);
          opacity: 1;
        }
      }
    }
    & button {
      float: right;
    }
  }
`;
