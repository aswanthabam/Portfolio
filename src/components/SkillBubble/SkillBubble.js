import { Component } from 'react';
import './SkillBubble.css'

class SkillBubble extends Component {
    render() { 
        
        return (
            <div className={'skill-bubble'+(this.props.visible ? ' visible':' back')}>
                <i className={this.props.icon + ' bx-tada-hover'}></i>
                <h2 className='head'>{this.props.title}</h2>
            </div>
        );
    }
}
 
export default SkillBubble;