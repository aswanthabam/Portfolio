import './Main.css'
import SideBar from "../SideBar/SideBar"
import TopBar from "../TopBar/TopBar"
import {useState} from 'react'
export default function Main(props)
{
  const [menuState,toggleMenu] = useState(false)
  return (
    <div className="main">
      <SideBar menuState={menuState} toggleMenu={toggleMenu} />
      <div className={menuState ? 'content menu-opened' : 'content'}>
        <div className="cont">
          <TopBar menuState={menuState} toggleMenu={toggleMenu} />
          { props.children }
        </div>
      </div>
    </div>
  );
}