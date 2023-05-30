import { Component } from 'react';
import './Projects.css'
import ProjectView from '../ProjectView/ProjectView';
import axios from 'axios'
class Projects extends Component {
    state = { loaded:false,failed:false}
    componentDidMount() {
        axios.get("https://avctechbackend.vercel.app/api/projects/get",{}).then(res=>{
            if(res.data.status == 200)
                this.setState({
                    ...this.state,
                    loaded:true,
                    data:res.data.content
                })
            else this.setState({
                ...this.state,
                loaded:true,
                failed:true
            })
        })
    }
    render() { 
        return (
            <div className='projects'>
                <h2 className='underline title'>Projects</h2>
                <div className='container'>
                    {this.state.loaded ? (this.state.failed ? "Failed to load data" : this.state.data.projects.map(x => 
                        <ProjectView title={x.name} icon='bx bxl-react'>
                            <p>
                            {x.description}
                            </p>
                        </ProjectView>
                    )) : "loading"}
                </div>
            </div>
        );
    }
}
 
export default Projects;