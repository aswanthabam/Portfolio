import { Component } from "react";
import "./TopBar.css"
class TopBar extends Component {
    state = { }
    render() { 
        return <div className="topbar">
            <div className="container">
                <div className="left">
                    {/* <div className="menu_icon">
                        <i class="bx bx-menu"></i>
                    </div> */}
                    <div className="menu_texts">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                        <span><i className='bi bi-list'></i></span>
                    </div>
                </div>
                <div className="icons">
                    <i className="bx bxl-youtube"></i>
                    <i className="bx bxl-instagram"></i>
                    <i className="bx bxl-linkedin"></i>
                </div>
            </div>
        </div>;
    }
}
 
export default TopBar;