import {Link} from 'react-router-dom'
function Description()
{
  return (
    <div className="description">
      <h3>Hello my name is Aswanth,</h3>
      <p>I'm a full stack developer, currently studying BCA. i love coding and making aesthetic wwebsites. I've completed many projects using several backend frameworks like Django, Laravel etc. using python and php and I'm familiar with databases like MongoDB, PostgreSQL etc. I have also created many front-end designs using ReactJS, Angular and also using Plain HTML,Css and Js. Go checkout my projects... for any queries feel free to contact me.</p>
      <Link to="/about"><button>Contact Me</button></Link> 
      <Link to="/projects"><button>View Projects</button></Link>
    </div>
  );
}

export {Description};