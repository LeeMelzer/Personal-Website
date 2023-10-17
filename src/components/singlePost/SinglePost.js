import "./singlePost.css"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import TopBar from "../blogPosts/topBar/TopBar"

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";

  useEffect(()=>{
    const getPost = async ()=>{
      const res = await axios.get("http://localhost:5000/api/posts/" + path);
      setPost(res.data);
    };
    getPost();
  },[path])
  return (
    <>
    <TopBar/>
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={PF + post.photo} alt=""/>
        )}
        <h1 className="singlePostTitle">{post.title}</h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>{post.username}</b></span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
          <pre className="hate"><p className="singlePostDesc">{post.desc}</p></pre>
      </div>
    </div>
    </>
  )
}
