import { Component } from 'react';
import './Skills.css'
import SkillBubble from '../SkillBubble/SkillBubble';

class Skills extends Component {
    state = { }
    render() { 
        return (
            <div className='skills'>
                <h2 className='title underline'>What is my skills?</h2>
                <div className='skill-box'>
                    <SkillBubble title="React" icon="bx bxl-react"/>
                </div>
            </div>
        );
    }
}
 
export default Skills;