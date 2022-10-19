import {Link,useLocation} from 'react-router-dom';
import './Menu.css'
export default function Menu()
{
  const location = useLocation()
  const menuItems = [
    {
      name:"Home",
      link:"/",
      icon:"bi bi-house",
      current:location.pathname==="/"
    },
    {
      name:"Projects",
      link:"/projects",
      icon:"bi bi-info-lg",
      current:location.pathname==="/projects"
    },
    {
      name:"About",
      link:"/about",
      icon:"bi bi-info-lg",
      current:location.pathname==="/about"
    }
  ];
  
  return (
    <div className="menu">
      {menuItems.map((obj)=>{return (
          <MenuItem {...obj}/> );})}
    </div>
  );
}

function MenuItem({name,link,icon,current,...rest})
{
  return (
    <div className="menu-item">
      <span className={current ? "menu-link cur" : "menu-link"}><Link to={link}><i className={icon}></i> <span className="name">{name}</span></Link></span>
    </div>
  );
}