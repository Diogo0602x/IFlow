import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #f5f5f5;
    color: #00FF00;
    -webkit-font-smoothing: antialiased;

  }
  body::-webkit-scrollbar {
  background-color: #f5f5f5;
  width: 8px;
  }
  body::-webkit-scrollbar-button {
    display: none;
  }
  body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  width: 1px;
  background-color: #000000;
  }

  body, input, button, select {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
