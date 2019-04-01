import * as React from "react";
import Head from "next/head";

import { Link } from '../routes';

export default class Layout extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>Yuni-Q</title>
        </Head>
        <nav>
        <Link route={"/"}>
            React Next
          </Link>
          <div>
            <ul>
              <li>
                <Link route={"/"}>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link route={"/page"}>
                  <a>Page</a>
                </Link>
              </li>
            </ul>
            <div>
            </div>
          </div>
        </nav>
        <div className="container mt-4">{this.props.children}</div>
      </>
    );
  }
}
