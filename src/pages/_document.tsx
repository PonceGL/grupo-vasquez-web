import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
          {/* <link
            rel="icon"
            href="https://www.roaguirre.com/wp-content/uploads/2020/08/Logo-RO-final-07-300x300.png"
            sizes="192x192"
          /> */}
        </Head>
        <body>
          <div id="modal-root" />
          <div id="gallery-root" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
