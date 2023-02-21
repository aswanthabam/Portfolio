import './TopBar.css';
import {Link} from "react-router-dom";
export default function TopBar() {
    return (
        <div className='topbar'>
            <div className="topbar-header">
                <i class="bi bi-braces"></i>
                <span>Portfolio</span>
            </div>
            <div className="topbar-menu">
                <div className="menu-item selected">
                    <Link to="/">Home</Link>
                </div>
                <div className="menu-item">
                    <Link to="/projects">Projects</Link>
                </div>
                <div className="menu-item">
                    <Link to="/about">About</Link>
                </div>
            </div>
            <div className="topbar-search">
                <i class="bi bi-search"></i>
                <div className="topbar-search-triangle"></div>
                <input className="topbar-search-input" type="text" placeholder="Search..."/>
                <button className="topbar-search-submit">Search</button>
            </div>
            <div className="topbar-menu-icon">
                <i className='bi bi-list'></i>
            </div>
        </div>
    )
}