import "./topBar.css"

export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
        <i className=" topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-square-github"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">PROJECTS</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">BLOG POSTS</li>
            </ul>
        </div>
        <div className="topRight">
            
        </div>
    </div>
  )
}
