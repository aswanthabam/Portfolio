import { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    state = {}
    render() { 
        return (
            <div className='footer'>
                <div className='one'>
                    <a href="https://avctech.web.app">AVC Tech</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                    <a href="https://youtube.com/c/abamtech">Youtube</a>
                </div>
                <div className='two'>
                <a href="https://abam.herokuapp.com">ABAM</a>
                <a href="https://linkedin.com/aswanthvc">Linkedin</a>
                <a href="https://instagram.com/avc.tech">Instagram</a>
                <a href="https://facebook.com/avctech">Facebook</a>
                </div>
                <div className='three'>
                    <div className='content'>
                        <h3>Thank you for taking the time to view my portfolio. If you have any questions or would like to discuss a project, feel free to get in touch. I look forward to hearing from you!</h3>
                    </div>
                </div>
                <div className='tail'>
                    <i className='bi bi-c-circle'></i> Aswanth V C (AVC Tech 2023)
                </div>
            </div>
        );
    }
}
 
export default Footer;