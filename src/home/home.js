import React from 'react'
import Header from "../components/header/header"
import Nav from "../components/nav/nav"
import About from "../components/about/about"
import Projects from "../components/projects/projects"
import Blog from "../components/blog/blog"
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"

export default function 
() {
  return (
    <div>
        <Header/>
        <Nav/>
        <About/>
        <Projects/>
        <Blog/>
        <Contact/>
        <Footer/>
    </div>
  )
}
