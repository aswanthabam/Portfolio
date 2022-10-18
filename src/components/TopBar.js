//import {Link} from 'react-router-dom';
import Menu from './Menu'
import '../styles/TopBar.css'
import {useState} from 'react'
export default function TopBar()
{
  const [menuState,toggleMenu] = useState(false)
  return (
    <div className="topbar">
      <div className="topbar-head">
        <div className="topbar-title"></div>
        <div onClick={()=>toggleMenu(!menuState)} className="menu-icon">
          { !menuState ? <i class="bi bi-list"></i> : <i class="bi bi-x-lg"></i> }
        </div>
      </div>
      <div className="topbar-menu">
        { menuState ? <Menu/> : null }
      </div>
    </div>
  );
}
