import styled from 'styled-components';

export const Logo = styled.div`
  grid-area: Logo;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: var(--border-default);

  img {
    width: 40px;
    cursor: pointer;
  }
`;

export const Nav = styled.div`
  grid-area: Nav;
  display: flex;
  align-items: center;
  background: #fff;
  overflow: auto;
  border-bottom: var(--border-default);

  & > ul {
    list-style-type: none;
    display: inline-flex;
    margin-left: 0px;
    width: auto;
  }

  & > ul > li {
    padding: 16px;
    color: var(--main-text-color);
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;
  }

  & > ul > li a {
    text-decoration: unset;
    color: inherit;
  }

  & > ul > li.aberto {
    background: #cfe2e9;
  }

  & > ul > li:hover:not(.aberto) {
    background: #eef4f6;
  }

  & > ul > li > ul {
    text-transform: none;
    display: none;
    list-style: none;
    position: absolute;
    z-index: 10;
    background: #fff;
    width: 204px;
    border-radius: 1px;
    border: 1px solid rgb(200, 200, 200);
    margin-top: 16px;
    margin-left: -16px;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.2);
  }
  & > ul > li > ul > li {
    cursor: pointer;
    font-weight: normal;
    padding: 8px 16px;
    color: rgb(80, 80, 80);

    &.link {
      padding: 0px;

      & a {
        display: block;
        padding: 8px 16px;
      }
    }
  }
  & > ul > li > ul > li:hover {
    background: var(--bg-color-hover);
  }
  & > ul > li > ul > a {
    color: inherit;
    text-decoration: none;
  }

  .chevronRight::after {
    content: '❭';
    float: right;
  }
`;

export const User = styled.div`
  grid-area: User;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-bottom: var(--border-default);

  & > ul {
    list-style-type: none;
    display: inline-flex;
    width: auto;
  }
  & > ul > li {
    padding: 0px;
    color: var(--main-text-color);
    cursor: pointer;
    width: auto;
  }

  & > ul > li.aberto {
    background: #cfe2e9;
  }

  & > ul > li:hover:not(.aberto) {
    background: #eef4f6;
  }

  & > ul > li > ul {
    text-transform: none;
    display: none;
    list-style: none;
    position: absolute;
    z-index: 10;
    background: #fff;
    width: inherit;
    border-radius: 1px;
    border: 1px solid rgb(200, 200, 200);
    right: 8px;
    margin-top: 8px;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.2);
  }
  & > ul > li > ul > li {
    cursor: pointer;
    font-weight: normal;
    padding: 8px 16px;
    color: rgb(80, 80, 80);
  }
  & > ul > li > ul > li:hover {
    background: var(--bg-color-hover);
  }
  & > ul > li > ul > a {
    color: inherit;
    text-decoration: none;
  }

  .chevronRight::after {
    content: '❭';
    float: right;
  }
`;
