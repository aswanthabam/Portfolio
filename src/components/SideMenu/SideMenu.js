import { Component } from "react";
import "./SideMenu.css"

class SideMenu extends Component {
    state = { }
    render() { 
        return <div className="sidemenu">
            <a href="#home"><i class='bx bxs-home-alt-2 bx-tada-hover' ></i></a>
            <a href="#about"><i class='bx bxs-info-circle bx-tada-hover' ></i></a>
            <a href="#projects"><i class='bx bxs-grid-alt bx-tada-hover' ></i></a>
            <a href="#contact"><i class='bx bxs-contact bx-tada-hover' ></i></a>
        </div>;
    }
}
 
export default SideMenu;