import styled from 'styled-components';

export const Card = styled.div`
  margin-top: 18px;
  /*min-height: auto;
  max-height: 72vh;*/
  min-width: 48%;
  max-width: 64%;
  display: none;
  align-self: center;
  position: absolute;
  z-index: 3;

  border: 1px solid #fff;
  box-shadow: 0 0px 4px 2px rgba(0, 0, 0, 0.1);
  background: #fff;
  border: none;
  padding: 16px;

  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'Title Title'
    'Content Content';

  & .cardTitle {
    grid-area: Title;
    display: flex;
    justify-content: space-between;
  }
  & .cardTitle span {
    float: right;
    cursor: pointer;
  }
  & .cardContent {
    grid-area: Content;
    display: flex;
    background: #fff;
    justify-content: space-between;
    /*min-height: 32%;
    max-height: 64vh;*/
    height: 100%;
  }
  & .cardContent > div:first-child {
    width: 100%;
    height: 100%;
  }
`;
