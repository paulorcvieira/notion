import { createGlobalStyle } from 'styled-components'

// react-toastify
import 'react-toastify/dist/ReactToastify.min.css'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :focus {
    outline: transparent;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.colors.gray[900]};
    color: ${({ theme }) => theme.colors.white};
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 700;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  a,
  button {
    cursor: pointer;
  }

  .Toastify__toast--info {
    background: 'rgb(51, 102, 255)';
  }
  .Toastify__toast--success {
    background: 'rgb(51, 187, 102)';
  }
  .Toastify__toast--warning {
    background: 'rgb(254, 255, 20)';
  }
  .Toastify__toast--error {
    background: 'rgb(255, 102, 102)';
  }
`

export default GlobalStyle
