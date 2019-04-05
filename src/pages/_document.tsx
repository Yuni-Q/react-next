import * as React from "react";
import Document, { Head, Main, NextScript } from 'next/document'
import getConfig from 'next/config'


export default class CustomDocument extends Document {
  render() {
    const { publicRuntimeConfig } = getConfig()
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#ff6600" />
          <link rel="apple-touch-icon" href="/static/icon.png" />
          <meta name="apple-mobile-web-app-title" content="Hacker News" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <link rel="manifest" href={`${publicRuntimeConfig.staticFolder}/manifest.json`}/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

