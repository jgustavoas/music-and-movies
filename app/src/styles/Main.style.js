import styled from 'styled-components';

export const Main = styled.div`
  grid-area: Main;
  display: flex;
  flex-direction: column;
  padding: 24px;
  padding-top: 0;
  font-size: 1rem;
  width: 100%;

  h1 {
    padding: 16px 0;
    background: #fff;
    position: sticky;
    top: 0px;
  }

  & table {
    border-spacing: 0px;
    width: 100%;
  }
  & th {
    position: sticky;
    top: 118px;
    background: #fff;
    border: 1px solid #ddd;
  }
  & tbody tr:hover {
    animation-name: piscar;
    animation-duration: 400ms;
    animation-timing-function: ease-out;
  }
  & td,
  th {
    padding: 8px;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  & td:first-child {
    border-left: 1px solid #ddd;
  }
  & td {
    & section {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    & span {
      display: none;
    }
  }
  & td:hover {
    & span {
      display: block;
      &:hover {
        cursor: pointer;
      }
    }
  }

  /* ANIMAÇÕES */
  @keyframes piscar {
    0% {
      background: #fff;
    }
    25% {
      background: #e7f2f5;
    }
    100% {
      background: #fff;
    }
  }

  & .sort {
    opacity: 1;
    display: inline-flex;
    font-size: 1rem;
    font-weight: bold;
    background: transparent;
    border-radius: 50%;
    padding: 4px;
    transition: all 0.4s;
    font-weight: bold;
  }

  .material-icons {
    font-size: 1rem;
    cursor: pointer;
    border-radius: 50%;
    padding: 4px;
    transition: all 0.4s;

    &.piscar {
      animation-name: piscar;
      animation-duration: 800ms;
      animation-timing-function: ease-out;
    }
  }

  #bordaSuperior {
    border-bottom: 4px solid #d1d1d1;
    position: relative;
    top: 3px;
    margin-top: -4px;
  }

  #conteudo {
    border-bottom: 1px solid #d1d1d1;
  }

  & form,
  & div#form {
    background: #fff;
    padding: 8px 16px;
    margin-top: 8px;
    border-radius: 1px;
    font-size: 1rem;
  }
  & .formCard {
    border: none;
    width: 64%;
    margin: auto;
    padding: 8px;
  }

  & .botoesLaterais {
    grid-area: Buttons;
    display: flex;
    flex-direction: column;
    margin-left: 8px;
  }
  .botoesLaterais button {
    margin: 0px 0px 8px 4px;
  }

  @media only screen and (max-width: 880px) {
    #Card {
      width: 96%;
    }
  }
  @media only screen and (max-width: 499px) {
    #Card {
      width: 96%;
      grid-template-rows: auto auto 1fr;
      grid-template-areas:
        'Title Title'
        'Buttons Buttons'
        'Table Table';
    }
  }

  & .paginacao .paginas span {
    cursor: pointer;
    transition: all 400ms;

    /*&:hover {
      animation-name: piscar;
      animation-duration: 800ms;
      animation-timing-function: ease-out;
    }*/
  }

  & .paginacao {
    font-size: 0.8rem;
    position: sticky;
    top: 60px;
    padding: 16px 0;
    background: #fff;
  }
  & .paginacao,
  .paginacao div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .paginador {
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    width: auto;
    max-width: 164px;
    scrollbar-width: none;
    display: flex;
    align-items: center;

    & span {
      margin: 0 4px;
      min-width: 1.6rem;
      height: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;

      &.paginaAtual {
        background: #7d7d7d;
        color: #fff;
        cursor: default;
      }
    }
  }
`;
