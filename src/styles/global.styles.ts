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

  :root {
      --white: #ffffff;

      --gray-100: #e1e1e6;
      --gray-300: #c4c4cc;
      --gray-400: #8d8d99;
      --gray-500: #808080;
      --gray-600: #323238;
      --gray-700: #29292e;
      --gray-800: #202024;
      --gray-900: #121214;

      --green-100: #1ef7d0;
      --green-200: #04d361;
      --green-300: #00b37e;
      --green-500: #00875f;
      --green-800: #163840;

      --purple-200: #8284fa;
      --purple-300: #7f4381;
      --purple-500: #8257e6;
      --purple-600: #5e60ce;
      --purple-800: #442445;

      --blue-300: #4ea8de;
      --blue-700: #1e6f9f;

      --red-500: #f75a68;

      --yellow-500: #ffbf00;
      --yellow-600: #fd951f;
      --yellow-700: #eb9300;
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
