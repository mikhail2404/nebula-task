import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: Open Sans;
    src: local('Open Sans'),  url(../fonts/OpenSans-VariableFont_wdth,wght.woff) format('woff');
    font-display: swap;

  }
  // Base Variables

  :root{
    // Gradient

    --gradient-purple:  linear-gradient(165.54deg, #141333 -33.39%, #202261 15.89%, #543C97 55.84%, #6939A2 74.96%);

    // Font sizes
    --font-size-11px: 0.6875rem;
    --font-size-12px: 0.75rem;
    --font-size-14px: 0.875rem;
    --font-size-16px: 1rem;
    --font-size-18px: 1.125rem;
    --font-size-22px: 1.375rem;
    --font-size-24px: 1.5rem;
  }
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
  body {
    font-size: var(--font-size-12px);

    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
  }
  
  h1{
    var(--font-size-24px);
    line-height: 1.75rem;
    color: #333333;
  }

  a {
    color: inherit;
  }
  
  ul {
    list-style: none;
  }
  

`;

export default GlobalStyle;
