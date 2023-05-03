import { Global, css, ThemeProvider } from '@emotion/react';
import myTheme from './theme';
import './index.css';

const globalStyles = css`
  button {
    display: block;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

const ThemeProv = ({
  theme = myTheme,
  children,
  GlobalStyles = globalStyles,
}) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    {children}
  </ThemeProvider>
);

export default ThemeProv;
