import styled, { css } from 'styled-components';

export const Layout = styled.div`
  ${(props) =>
    props.id === 'Layout'
      ? css`
          height: 100vh;
          display: grid;
          grid-gap: 0px 0px;
          grid-template-columns: 72px 1fr 104px auto;
          grid-template-rows: 56px 1fr 24px;
          grid-template-areas:
            'Logo Nav Nav User'
            'Main Main Sidebar Sidebar'
            'Footer Footer Footer Footer';
        `
      : css`
          background: rgba(0, 0, 0, 0.5);
          height: 100vh;
          display: flex;

          & > div {
            display: flex;
            margin: auto;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
          }
        `};

  hr {
    border: 1px solid #dadada;
    border-bottom: none;
    margin: 0 4px;
  }
  h1 {
    font-size: 24px;
    color: #999;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  h1 a {
    text-decoration: none;
    color: inherit;
    transition: 0.2s;
  }
  h1 a:hover {
    color: var(--main-bg-color);
  }
  h1 span {
    position: relative;
    top: 2px;
  }
  .duasColunas {
    display: grid;
    grid-template-columns: max-content 1fr;
  }
  .quatroColunas {
    display: grid;
    grid-template-columns:
      minmax(min-content, max-content) 1fr minmax(min-content, max-content)
      1fr;
  }
`;
