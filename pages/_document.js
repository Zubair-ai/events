import Document, { Main, Html, Head, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <body>
            <div id="Overlays" />
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}
export default MyDocument;
