import { Component } from 'react';
import './Projects.css'
import ProjectView from '../ProjectView/ProjectView';

class Projects extends Component {
    state = { }
    render() { 
        return (
            <div className='projects'>
                <h2 className='underline title'>Projects</h2>
                <div className='container'>
                    <ProjectView title='AVC Manager' icon='bx bxl-react'>
                        <p>
                        AVC Manager is a user-friendly Android app that optimizes device performance by freeing
up storage space and streamlining activities. With features like Space Cleanup and
WhatsApp status saving, AVC Manager is a must-have tool for anyone looking to improve
their device's efficiency.
                        </p>
                    </ProjectView>
                    <ProjectView title='Vijnana Website' icon='bx bxl-android'>
                        <p>
                            Commodo eiusmod anim id minim consequat et ipsum reprehenderit. Exercitation ut cupidatat commodo veniam. Consectetur et nisi exercitation officia. Labore consequat ad dolore ex fugiat excepteur. Minim aliquip ut ullamco ut ipsum dolor ad nisi aliquip duis duis dolore. Laborum do eu esse commodo cillum enim consequat sint labore et et.
                        </p>
                    </ProjectView>
                    <ProjectView title='RoboCAR' icon='bx bxl-android'>
                        <p>
                            Commodo eiusmod anim id minim consequat et ipsum reprehenderit. Exercitation ut cupidatat commodo veniam. Consectetur et nisi exercitation officia. Labore consequat ad dolore ex fugiat excepteur. Minim aliquip ut ullamco ut ipsum dolor ad nisi aliquip duis duis dolore. Laborum do eu esse commodo cillum enim consequat sint labore et et.
                        </p>
                    </ProjectView>
                    <ProjectView title='Treasure Tracker' icon='bx bxl-react'>
                        <p>
                            Commodo eiusmod anim id minim consequat et ipsum reprehenderit. Exercitation ut cupidatat commodo veniam. Consectetur et nisi exercitation officia. Labore consequat ad dolore ex fugiat excepteur. Minim aliquip ut ullamco ut ipsum dolor ad nisi aliquip duis duis dolore. Laborum do eu esse commodo cillum enim consequat sint labore et et.
                        </p>
                    </ProjectView>
                </div>
            </div>
        );
    }
}
 
export default Projects;