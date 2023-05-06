import { Component } from 'react';
import './SkillBubble.css'

class SkillBubble extends Component {
    state = { }
    render() { 
        return (
            <div className='skill-bubble'>
                <i className={this.props.icon}></i>
                <h2 className='title'>{this.props.title}</h2>
            </div>
        );
    }
}
 
export default SkillBubble;