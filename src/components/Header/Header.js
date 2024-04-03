import { Component } from "react";
import "./Header.css"
import me from "../../images/me-bw 1.png";
class Header extends Component {
    state = { }
    render() { 
        return <div className="header">
            <div className="me">
                <img src={me} alt="Aswanth V C"></img>
            </div>
            <div className="description">
                <div>
                    <h2 className="title">Aswanth V C</h2>
                    <span>Web & Android Developer</span>
                    <p>
                    I am a skilled BCA student with a strong passion for web and android development. My love for all aspects of IT and technology has led me to explore and learn about various fields. I am dedicated to delivering high-quality results with meticulous attention to detail. With a creative mindset and a strong work ethic, I am committed to bringing innovative ideas to life. Whether it's designing a website or developing an app, I strive to create solutions that are user-friendly and impactful.
                    </p>
                    <div className="buttons">
                        <a href="#contact">Contact</a>
                        <a href="#projects" style={{color:"#111"}}>Projects</a>
                    </div>
                </div>
            </div>
        </div>;
    }
}
 
export default Header;