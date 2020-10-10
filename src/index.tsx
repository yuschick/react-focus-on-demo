import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import Main from "./Main";

import BackgroundPattern from "assets/double-bubble-outline.png";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-accent: #2274a5;
    --primary-dark: #2f2d2e;
    --primary-font: 'Barlow', sans-serif;
    --primary-light: #f0f3f5;
    --secondary-dark: #787878;
  }

  * {
    border: 0;
    box-sizing: border-box;
    font-size: 100%;
    margin: 0;
    padding: 0;
	  vertical-align: baseline
  }
  html, body {
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
    background: url(${BackgroundPattern});
    backface-visibility: hidden;
    border-bottom: 0;
    color: var(---primary-dark);
    font-family: var(---primary-font);
    font-size: min(max(15px, 2vw), 18px);
    font-weight: 400;
    line-height: 1.75;
    min-height: 100vh;
  }

  *:focus {
    outline: 1px solid var(---primary-accent);
  }
  img {
    border: 0;
    height: auto;
    max-width: 100%;
  }
  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a,
  a:visited,
  a:active {
    color: var(---primary-accent);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <Main />
  </Fragment>,
  document.getElementById("root")
);
