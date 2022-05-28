import React from 'react';
import Document, {
  Html, Head, Main, NextScript, DocumentContext
} from 'next/document';

class NextDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, };
  }

  render() {
    return (
      <Html lang='ko'>
        <Head>
          <link
            rel='stylesheet'
            href='https://use.fontawesome.com/releases/v5.15.4/css/all.css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default NextDocument;
