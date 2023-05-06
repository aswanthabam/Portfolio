import { Component } from 'react';
import './ProjectView.css'

class ProjectView extends Component {
    state = {}
    render() { 
        return (
            <div className='project-view'>
                <div className='side'>
                    <div className='icon'>
                        <i className={this.props.icon}></i>
                    </div>
                    <div className='grid'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className='content'>

                    <h2 className='head'>{this.props.title}</h2>
                    <p>{this.props.children}</p>
                    <a href={this.props.link}>View Project</a>
                </div>
            </div>
        );
    }
}
 
export default ProjectView;