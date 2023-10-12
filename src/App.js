import React from 'react'
import Header from "./components/header/header.js"
import Nav from "./components/nav/nav.js"
import About from "./components/about/about.js"
import Blog from "./components/blog/blog.js"
import Footer from "./components/footer/footer.js"
import Projects from "./components/projects/projects.js"
import Contact from "./components/contact/contact.js"
import BlogPosts from "./components/blogPosts/blogPosts/BlogPosts.js"
import Home from "./home/home.js"
import TopBar from "./components/blogPosts/topBar/TopBar.js"
import Login from "./components/login/Login.js"
import Write from "./components/write/Write.js"
import Single from "./components/singlePost/SinglePost.js"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/write" element={<Write/>}/>
        <Route path="/post/:postId" element={<Single/>}/>
        <Route path="/blogPosts" element={<BlogPosts/>}/>
      </Routes>
    </Router>
  )
}
