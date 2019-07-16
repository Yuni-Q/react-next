import Head from 'next/head';
import { inject, observer } from 'mobx-react'
import * as React from 'react'

import Layout from '../components/Layout';

@inject('store')
@observer
class Page extends React.Component<any, any> {
  componentDidMount() {
    console.log(this.props.store);
  }
  render() {
    return (
      <Layout>
        <Head>
          <title>page</title>
        </Head>
        <div>
          <div>
            <div>
              {this.props.store.age}
            </div>
            <button onClick={() => this.props.store.addAge()}>
              당신의 나이는 ?
          </button>
          </div>
        </div>
      </Layout>

    )
  }
}

export default Page