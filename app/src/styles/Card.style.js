import styled from 'styled-components';

export const Card = styled.div`
  /*min-width: 48%;
  max-width: 64%;*/
  display: none;
  align-self: center;
  position: fixed;
  z-index: 1000;

  background: rgba(0, 0, 0, 0.4);
  border: none;
  padding: 16px;

  width: 100%;
  height: inherit;
  align-items: center;
  justify-content: center;

  & > div {
    display: grid;
    border: 1px solid #fff;
    border-radius: 2px;
    box-shadow: 0 0px 4px 2px rgba(0, 0, 0, 0.1);
    width: 50%;
    padding: 16px;

    grid-template-areas:
      'Title Title'
      'Content Content';

    grid-template-columns: 1fr auto;
    grid-template-rows: 32px 1fr;

    &:first-child {
      background: #fff;

      & .cardTitle {
        grid-area: Title;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & h1 {
          padding: 0px;
          margin-bottom: 0;
        }

        & span {
          cursor: pointer;
        }
      }
      & .cardContent {
        grid-area: Content;
        background: #fff;
        justify-content: space-between;
        height: 100%;
      }
      & .cardContent > div:first-child {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
