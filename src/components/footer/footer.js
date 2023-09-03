import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">leemelzer.io</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; leemelzer.io. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer