
import './Header.css'
import meBw from'../../images/me-bw.png'
import {Link} from 'react-router-dom'
//import meBw from '../images/me-bw.png'
export default function Header()
{
  return (
    <div class="header">
      <div className="header-title">
        <h1 className="name">Aswanth V C</h1>
        <span className="caption">Full-Stack Developer</span>
      </div>
      <div className="header-description">
        <div className="frame1">
          <p className="text">
            I'm a full stack developer, currently studying BCA. i love coding and making aesthetic wwebsites. I've completed many projects using several backend frameworks like Django, Laravel etc. using python and php and I'm familiar with databases like MongoDB, PostgreSQL etc. I have also created many front-end designs using ReactJS, Angular and also using Plain HTML,Css and Js. Go checkout my projects... for any queries feel free to contact me.
          </p>
          <div className="buttons">
            <Link to="about"><button className="btn btn-1">Contact Me</button></Link>
            <Link to="projects"><button className="btn btn-2">View Projects</button></Link>
          </div>
        </div>
        <img className="my-image" src={meBw} alt="Aswanth V C"/>
      </div>
    </div>
  );
}