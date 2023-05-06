import { Component } from 'react';
import './Skills.css'
import SkillBubble from '../SkillBubble/SkillBubble';

class Skills extends Component {
    state = {
        visible: false
    }
    render() { 
        window.onscroll = () => {
            if(window.scrollY > document.getElementsByClassName('skills')[0].offsetHeight * 1.7) {
               this.setState({visible:true});
            }else this.setState({visible:false})
        };
        return (
            <div className='skills'>
                <h2 className='title underline'>WHAT'S MY SKILLS ?</h2>
                <div className='skill-box'>
                    <SkillBubble title="React" icon="bx bxl-react" visible={this.state.visible}/>
                    <SkillBubble title="Flutter" icon="bx bxl-flutter" visible={this.state.visible}/>
                    <SkillBubble title="NodeJS" icon="bx bxl-nodejs" visible={this.state.visible}/>
                    <SkillBubble title="Git" icon="bx bxl-git" visible={this.state.visible}/>
                    <SkillBubble title="Android" icon="bx bxl-android" visible={this.state.visible}/>
                    <SkillBubble title="Django" icon="bx bxl-django" visible={this.state.visible}/>
                    <SkillBubble title="Wordpress" icon="bx bxl-wordpress" visible={this.state.visible}/>
                    <SkillBubble title="Native" icon="bx bxl-react" visible={this.state.visible}/>

                </div>
            </div>
        );
    }
}
 
export default Skills;