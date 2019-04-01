import * as React from "react";
import Document, { Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <body>
           <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
