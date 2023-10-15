import "./blogPosts.css"
import Header from "../header/Header"
import TopBar from "../topBar/TopBar"
import Posts from "../posts/Posts"
import SinglePost from "../../singlePost/SinglePost"
import Login from "../../login/Login"
import Write from "../../write/Write"
import axios from "axios";
import { useState } from "react"
import { useEffect } from "react"

export default function BlogPosts() {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("http://localhost:5000/api/posts");
      setPosts(res.data)
    }
    fetchPosts();
  },[])
  return (
    <>
    <TopBar/>
    <Header/>
    <Posts posts={posts}/>
    </>
  )
}
