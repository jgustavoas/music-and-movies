import styled from 'styled-components';

export const Input = styled.input.attrs((props) => ({
  color: props.isValid ? 'black' : 'red',
}))`
  background: #fff;
  border: 1px solid;
  border-color: ${(props) => props.color};
  border-radius: 1px;
  width: 100%;
  height: 32px;
  padding: 0 4px;
  color: ${(props) => props.color};
  margin-bottom: 12px;
`;
