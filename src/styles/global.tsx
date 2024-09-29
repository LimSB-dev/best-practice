import { Global, css } from "@emotion/react";

const style = () => css`
  @font-face {
    font-family: "SpoqaHanSansNeo-Regular";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font-family: "GmarketSansMedium";
    box-sizing: border-box;
    transition: all 0.4s ease-in-out, color 0s;
  }

  img {
    -webkit-user-drag: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    -webkit-user-drag: none;
  }

  button {
    cursor: pointer !important;
    all: unset;
  }

  body::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  a {
  }

  canvas {
    width: 100%;
  }

  ul,
  ol {
    list-style: none;
  }
`;

function GlobalStyle() {
  return <Global styles={style} />;
}

export default GlobalStyle;
