import './Main.css'
import SideBar from "../SideBar/SideBar"
import TopBar from "../TopBar/TopBar"
import {useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom';
export default function Main(props)
{
  const location = useLocation();
  const [menuState,toggleMenu] = useState(false)
  useEffect(()=>{
    toggleMenu(false);
  },[location]);
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