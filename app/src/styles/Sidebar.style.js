import styled from 'styled-components';

export const Sidebar = styled.div`
  grid-area: Sidebar;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #dadada;
  padding: 8px;
  border-right: var(--border-default);

  & > div {
    position: sticky;
    top: 0px;
    padding: 16px 8px;
    color: #1b7a9f;
    text-align: center;
  }
`;
