import { Global } from "@emotion/react";

const Fonts = () => (
  <Global styles={
    `
    @font-face {
      font-family: 'IBM Plex Mono';
      font-style: normal;
      font-weight: 400;
      src: url('static/fonts/IBMPlexMono-Regular.woff') format('woff'),
      url('static/fonts/IBMPlexMono-Regular.woff2') format('woff2'),
      url('static/fonts/IBMPlexMono-Regular.ttf') format('truetype');
    }
    @font-face {
      font-family: 'IBM Plex Sans';
      font-style: normal;
      font-weight: 400;
      src: url('static/fonts/IBMPlexSans-Regular.woff') format('woff'),
      url('static/fonts/IBMPlexSans-Regular.woff2') format('woff2'),
      url('static/fonts/IBMPlexSans-Regular.ttf') format('truetype');
    }
    `
  }/>
)

export default Fonts