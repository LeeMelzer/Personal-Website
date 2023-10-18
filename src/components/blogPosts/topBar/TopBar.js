import { Link } from "react-router-dom"
import { useContext } from "react";
import "./topBar.css"
import { Context } from "../../../context/Context";

export default function TopBar() {
  const {user, dispatch} = useContext(Context);

  const handleLogout = () => {
    dispatch({type:"LOGOUT"});
  };
  return (
    <div className="top">
        <div className="topLeft">
          <Link className="link" to="https://www.linkedin.com/in/lee-melzer-m-s-ab8464194/">
            <i className=" topIcon fa-brands fa-linkedin"></i>
          </Link>
          <Link className="link" to="https://github.com/LeeMelzer">
            <i className="topIcon fa-brands fa-square-github"></i>
          </Link>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/">HOME</Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/blogPosts">BLOG POSTS</Link>
                </li>
            </ul>
        </div>
        <div className="topRight">
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/write">
                  {user && "WRITE"} 
                </Link>
              </li>
              <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
            </ul>
        </div>
    </div>
  )
}
