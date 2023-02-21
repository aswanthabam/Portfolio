import { Component } from "react";
import "./HomeComponent.css";
import ME from '../../images/ME.png'
class HomeComponent extends Component {
    render() { 
        return (
            <div className="home-page-1">
                <div className="content">
                    <div className="salutation">
                        Hello, <span>i' m</span>
                    </div>
                    <div className="name">
                        Aswanth V C
                    </div>
                    <div className="work">
                        Full Stack & Android Developer
                    </div>
                    <div className="des">
                        Explore my portfolio and discover my skills in Android and full-stack development. Let's collaborate to bring your ideas to reality.
                    </div>
                    <div className="contact">
                        <a href="#">Let's Talk</a>
                    </div>
                    <div className="get-in-touch">
                        <span>Check Out My </span>
                        <div className="icon">
                            <a href="/"><i className="bi bi-instagram"></i></a>
                            <a href="/"><i className="bi bi-twitter"></i></a>
                            <a href="https://www.linkedin.com/in/aswanth-vc-2612b91b9/"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="me">
                    <img src={ME} alt="ME" />
                </div>
            </div>
        );
    }
}
 
export default HomeComponent;