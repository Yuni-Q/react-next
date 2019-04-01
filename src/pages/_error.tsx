// pages/_error.js 파일 내용 (공식 문서에서 가져옴)
import * as React from 'react'
class Error extends React.Component<any, any> {
  static getInitialProps ({ res, jsonPageRes }:any) {
    const statusCode = res ? res.statusCode : (jsonPageRes ? jsonPageRes.status : null)
    return { statusCode }
  }

  render() {
    return (
      <p>{
        this.props.statusCode
        ? `An error ${this.props.statusCode} occurred on server`
        : 'An error occurred on client'
      }</p>
    )
  }
}

export default Error;
