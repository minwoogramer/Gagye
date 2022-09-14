import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0 auto;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    background-color: black;
  }
`

export default GlobalStyle
