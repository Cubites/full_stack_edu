import './topbar.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Topbar extends Component {
  render() {
    return (
      <div className='topbar'>
        <h1><Link to="./Main">Main</Link></h1>
        <div className="gnb">
          <h2>Python</h2>
          <ul className="lnb">
            <li><Link to="./Post" contents={this.props.contents[0]}>영한 번역기</Link></li>
            <li><Link to="./Post" contents={this.props.contents[1]}>.exe 계산기</Link></li>
            <li><Link to="./Post" contents={this.props.contents[2]}>django로 만든 TodoList</Link></li>
          </ul>
        </div>
        <div className="gnb">
          <h2>HTML, Css</h2>
          <ul className="lnb">
            <li><Link to="./Post">Position</Link></li>
            <li><Link to="./Post">Display</Link></li>
            <li><Link to="./Post">Animation</Link></li>
            <li><Link to="./Post">Pseudo-classes</Link></li>
          </ul>
        </div>
        <div className="gnb">
          <h2>Javascript</h2>
          <ul className="lnb">
            <li><Link to="./Post">Node</Link></li>
            <li><Link to="./Post">NodeList</Link></li>
            <li><Link to="./Post">Scope</Link></li>
          </ul>
        </div>
        <div className="gnb">
          <h2>ETC</h2>
          <ul className="lnb">
            <li><Link to="./Post">알고리즘 문제</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}
