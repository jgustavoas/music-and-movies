import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  height: inherit;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;

  &:target {
    display: flex;
  }

  & div {
    background: #fff;
    width: 50%;
    padding: 8px;
    height: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 48px 1fr;
    grid-template-areas:
      'Header'
      'Content';

    & div:first-child {
      grid-area: Header;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
`;
