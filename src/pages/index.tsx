import Head from 'next/head'
import * as React from 'react';
import {
  inject,
  observer,
} from 'mobx-react'

import { getInitialContext } from './_app';
import Layout from '../components/Layout';

@inject('store')
@observer
class Index extends React.Component<any, any> {
  public static getInitialProps(context: getInitialContext) {
  }

  constructor(props: any) {
    super(props)
  }

  componentDidMount () {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('service worker registration successful')
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message)
        })
    }
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>Index</title>
        </Head>
        <div>
          안녕하세요?
        </div>
      </Layout>
    )
  }
}

export default Index;
