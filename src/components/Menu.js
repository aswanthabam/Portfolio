import {Link} from 'react-router-dom';
import '../styles/Menu.css'
export default function Menu()
{
  const menuItems = [
    {
      name:"Home",
      link:"/",
      icon:"bi bi-house"
    },
    {
      name:"About",
      link:"/about",
      icon:"bi bi-info-lg"
    }
  ];
  
  return (
    <div className="menu">
      {menuItems.map((obj)=>{return (
          <MenuItem {...obj}/> );})}
    </div>
  );
}

function MenuItem({name,link,icon,...rest})
{
  return (
    <div className="menu-item">
      <span className="menu-link"><Link to={link}><i className={icon}></i> <span className="name">{name}</span></Link></span>
    </div>
  );
}