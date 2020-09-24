import { createGlobalStyle } from "styled-components"

import { token } from "../../utils/tokens"

const GlobalStyle = createGlobalStyle`
  html {
    font-family: arial;
    font-weight: 400;
    font-size: 16px;
    color: ${token.color.neutral.TINT_10};
    box-sizing: border-box;
  }

  /**
   * WHAT IS THIS?
   *
   * We inherit box-sizing: border-box; from our <html> selector
   * Apparently this is a bit better than applying box-sizing: border-box; directly to the * selector
   */
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle
