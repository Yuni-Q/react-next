import App, { Container } from 'next/app';
import * as React from 'react';
import { Provider } from 'mobx-react';

import { initStore } from '../common/store';
// import {Header, Footer} from '../comps/CommonComps';
// import * as serviceWorker from '../serviceWorker';

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

  render() {
    if (canUseDOM() && 'serviceWorker' in navigator) {      
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/static/main.js').then(function (registration: any) {
          // Registration was successful
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err: any) {
          // registration failed :(
          console.log('ServiceWorker registration failed: ', err);
        });
      });
    } else {
      console.log('...');
    }
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
// serviceWorker.register();