import './SideBar.css'
import Menu from '../Menu/Menu'

export default function SideBar({menuState,toggleMenu})
{
  return (
    <div className={menuState ? 'sidebar menu-opened' : 'sidebar'}>
      <div className="sidebar-menu">
        { menuState && <Menu/> }
      </div>
    </div>
  );
}