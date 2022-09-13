import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-style: normal;
  }
`

export default GlobalStyle
