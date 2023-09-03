import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/Me.jpg"
import HeaderSocials from "./headerSocials"

const header = () => {
  return (
    <header>
      <div className="header__container">
        <h1>Lee Melzer</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials />
        
        <div className="me">
          <img src={ME} alt="image of me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default header