import { createGlobalStyle, styled } from "styled-components";

const ResetCSS = createGlobalStyle`
  /* Reset CSS */

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements */
  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Remove default padding */
  body {
    padding: 0;
  }

  /* Remove default border */
  button,
  input,
  textarea,
  select,
  a {
    outline: none;
    border: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  /* Custom resets */
  body {
    font-family: "Roboto", sans-serif;
    background-color: var(--primary-color);
  }
`;

export default ResetCSS;

export const Main = styled.main`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;
