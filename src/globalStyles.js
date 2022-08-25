import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  *, *::after, *::before {
	box-sizing: border-box;
  }

  main {
	background-color: #EFFAFA;
  }

  header {
	background-image: url('./public/images/bg-header-desktop.svg')
	height: 200p
  }

  img {
    max-width: 100%;
  }

  p {
    margin: 0;
  }
`;

export default GlobalStyle;
