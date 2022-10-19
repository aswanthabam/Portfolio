//import {Link} from 'react-router-dom';
//import Menu from '../Menu/Menu'
import './TopBar.css'
//import {useState} from 'react'
//import {Link} from 'react-router-dom'
export default function TopBar({menuState,toggleMenu})
{
 // const {menuState,toggleMenu} = ...props;
  return (
    <div className="topbar">
      <div className="topbar-head">
        <div onClick={()=>toggleMenu(!menuState)} className="menu-icon">
          { !menuState ? <i class="bi bi-list"></i> : <i class="bi bi-x-lg"></i> }
        </div>
        <div className="topbar-title">
          <div className="socialmedia">
            <a href="https://youtube.com/c/abamtech"><i className="bi bi-youtube"/></a>
            <a href="https://www.facebook.com/avctech.official/"><i className="bi bi-facebook"/></a>
            <a href="https://instagram.com/avc.tech"><i className="bi bi-instagram"/></a>
          </div>
        </div>
      </div>
    </div>
  );
}
