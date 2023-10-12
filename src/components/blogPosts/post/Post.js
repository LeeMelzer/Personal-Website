import "./post.css"
import SKI from "../../../assets/skiing.jpg"
import {Link} from "react-router-dom";

export default function Post({post}) {
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={post.photo} alt=""/>
      )}
        <div className="postInfo">
          <Link to={`/post/${post._id}`} classname="link">
          <span className="postTitle">{post.title}</span>
          </Link>
            <hr/>
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDesc">{post.desc}</p>
    </div>
  )
}
