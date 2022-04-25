import React from 'react'

const Header = (props) => {
  return (
    <header className="border-bottom border-secondary">
      <h1 className="text-center my-5">
        <a href="#" onClick={(e) => {
          e.preventDefault();
          props.getChangeMode();
        }}>
          {props.title}
        </a>
      </h1>
      <p className="text-center mb-2 pb-2">{props.desc}</p>
    </header>
  )
}

export default Header