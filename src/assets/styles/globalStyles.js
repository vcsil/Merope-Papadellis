import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    --cor-fundo-tela: #E5E5E5;
    --cor-branco: #FFFFFF;
    --cor-rosa: #FE605F; 
    --cor-vermelho: red; 
    --cor-preta: #666666;

    --cor-cinza-escuro: #C4C4C4;
    --cor-cinza: #DDDDDD;
    --cor-cinza-claro: #EEEEEE;

    --cor-cinza-placeholder: #DBDBDB;
    --cor-cinza-borda: #D4D4D4;

    --cor-cinza-subtitle: #BABABA;

    --display-none: none;
    --display-flex: flex;
  }

  body {
    width: 100vw;
    height: 100vh;
    font-family: 'Roboto';
    font-style: normal;
    background-color: var(--cor-fundo-tela);
  }

  body::-webkit-scrollbar {
    display: none;
  }
`

export default GlobalStyle;