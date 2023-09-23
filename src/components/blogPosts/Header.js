import "./header.css"
import SWIMMER from "../../assets/learn.jpg"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSmall">Lee's</span>
            <span className="headerTitleLarge">Blog</span>
        </div>
        <img className="headerImg" src={SWIMMER} alt=""/>
    </div>
  )
}
