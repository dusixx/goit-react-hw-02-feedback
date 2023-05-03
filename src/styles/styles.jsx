import './index.css';
import myTheme from './theme';
import { Global, css, ThemeProvider } from '@emotion/react';

const resetCSS = css`
  p,
  h2 {
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

const globalStyles = css`
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
