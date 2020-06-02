import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.12/d3.js" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
