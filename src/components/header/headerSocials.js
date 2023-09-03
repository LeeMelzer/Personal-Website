import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"

const headerSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/lee-melzer-m-s-ab8464194/" target="_blank"><BsLinkedin size={35}/></a>
        <a href="https://github.com/LeeMelzer" target="_blank"><BsGithub size={35}/></a>
    </div>
  )
}

export default headerSocials