import { createGlobalStyle, css } from 'styled-components';

// без css не форматирует разметку
const GlobalStyles = createGlobalStyle(css`
  button {
    display: block;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`);

export default GlobalStyles;
