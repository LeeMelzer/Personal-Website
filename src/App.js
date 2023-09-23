import React from 'react'
import Header from "./components/header/header.js"
import Nav from "./components/nav/nav.js"
import About from "./components/about/about.js"
import Blog from "./components/blog/blog.js"
import Footer from "./components/footer/footer.js"
import Projects from "./components/projects/projects.js"
import Contact from "./components/contact/contact.js"
import BlogPosts from "./components/blogPosts/BlogPosts.js"
import TopBar from "./components/blogPosts/TopBar.js"

export default function App() {
  return (
    <>
      <TopBar/>
      <BlogPosts />
    </>
  )
}
