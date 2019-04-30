import App, { Container } from 'next/app';
import * as React from 'react';
import { Provider } from 'mobx-react';

import { initStore } from '../common/store';
// import {Header, Footer} from '../comps/CommonComps';

class MyApp extends App<any, any> {
  private store: any;
  static async getInitialProps(context: any) {
    let pageProps = {}
    if (context.Component.getInitialProps) {
      pageProps = await context.Component.getInitialProps(context.ctx)
    }
    const isServer = !!context.req
    const store = initStore(isServer)
    return { pageProps, store }
  }
  constructor(props: any) {
    super(props)
    this.store = initStore(this.props.isServer)
  }

  componentDidMount () {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/static/service-worker.js')
        .then(registration => {
          console.log('service worker registration successful')
        })
        .catch(err => {
          console.log('service worker registration failed', err.message)
        })
    }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Provider store={this.store}>
          {/* <Header /> // 공통된 레이아웃을 여기다 넣을 수 있다. 헤더라던지... */}
          <Component {...pageProps} />
          {/* <Footer /> // 공통된 레이아웃을 여기다 넣을 수 있다. 푸터라던지... */}
        </Provider>
      </Container>
    )
  }
}

export interface getInitialContext {
  pathname: string;
  query: object;
  asPath: any;
  req?: any
  res?: any;
  jsonPageRes?: any;
  err: any;
};

export default MyApp;

export function canUseDOM(): boolean {
  return !!(
    typeof window !== 'undefined' &&
    window.document && window.document.createElement
  );
}
