import { Component } from "react";
import "./Header.css"
import me from "../../images/me.png";
class Header extends Component {
    state = { }
    render() { 
        return <div className="header">
            <div className="me">
                <img src={me}></img>
            </div>
            <div className="description">
                <div>
                    <h2 className="title">Aswanth V C</h2>
                    <span>Web & Android Developer</span>
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