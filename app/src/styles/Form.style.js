import styled from 'styled-components';

export const Form = styled.form`
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
`;
