import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.12/d3.js" />
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossorigin="anonymous"
        ></script>
        <script src="js/bootstrap.bundle.js"></script>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
