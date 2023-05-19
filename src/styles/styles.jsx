import './base.css';
import myTheme from './theme';
import { Global, css, ThemeProvider } from '@emotion/react';

const resetCSS = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul {
    margin: 0;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

// or injectGlobal https://emotion.sh/docs/@emotion/css#global-styles
const globalStyles = css`
  /* body {
    background-color: ${myTheme.color.background};
  } */

  button {
    display: block;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

const allStyles = css(resetCSS, globalStyles);

const ThemeProv = ({ theme = myTheme, children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={allStyles} />
    {children}
  </ThemeProvider>
);

export default ThemeProv;
