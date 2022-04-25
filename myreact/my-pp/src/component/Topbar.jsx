import './topbar.css'
import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <div className='topbar'>
      <h1><a href="/">Main</a></h1>
      <div className="gnb">
        <h2>Python</h2>
        <ul className="lnb">
          <li><a href="/">영한 번역기</a></li>
          <li><a href="/">.exe 계산기</a></li>
          <li><a href="/">django로 만든 TodoList</a></li>
        </ul>
      </div>
      <div className="gnb">
        <h2>HTML, Css</h2>
        <ul className="lnb">
          <li><a href="/">Position</a></li>
          <li><a href="/">Display</a></li>
          <li><a href="/">Animation</a></li>
          <li><a href="/">Pseudo-classes</a></li>
        </ul>
      </div>
      <div className="gnb">
        <h2>Javascript</h2>
        <ul className="lnb">
          <li><a href="/">Node</a></li>
          <li><a href="/">NodeList</a></li>
          <li><a href="/">Scope</a></li>
        </ul>
      </div>
      <div className="gnb">
        <h2>ETC</h2>
        <ul className="lnb">
          <li><a href="/">알고리즘 문제</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Topbar