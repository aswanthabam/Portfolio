import { Component } from "react";
import './Activities.css';
class Activities extends Component {
    state = {}
    componentDidMount() {
        let path = document.getElementsByClassName('activities-path')[0];
        let pathLength = path.getTotalLength();

        path.style.strokeDasharray = pathLength + ' ' + pathLength;
        path.style.strokeDashoffset = pathLength;

        window.addEventListener('scroll',() => {
            if(document.querySelector('.activities').getBoundingClientRect().top <= document.querySelector('.activities').getBoundingClientRect().height / 5) {
                var scrollPercentage = (-1 * document.querySelector('.activities').getBoundingClientRect().top + document.querySelector('.activities').getBoundingClientRect().height / 5) / document.querySelector('.activities').getBoundingClientRect().height;
                var ll = pathLength * scrollPercentage;
                path.style.strokeDashoffset =  pathLength - ll;
                var mScroll = document.querySelector('.activities .content').getBoundingClientRect().top * -1 / document.querySelector('.activities .content').getBoundingClientRect().height * 100;
                // if(mScroll >= 0) {
                    console.log(mScroll)
                    if(mScroll >= 60) {
                        document.querySelector('.activity4').style.opacity = 1;
                        document.querySelector('.circle4').style.opacity = 1;
                    }else {
                        document.querySelector('.activity4').style.opacity = 0;
                        document.querySelector('.circle4').style.opacity = 0;
                    }
                    if(mScroll >= 40) {
                        document.querySelector('.activity3').style.opacity = 1;
                        document.querySelector('.circle3').style.opacity = 1;
                    }else {
                        document.querySelector('.activity3').style.opacity = 0;
                        document.querySelector('.circle3').style.opacity = 0;
                    }
                    if(mScroll >= 10) {
                        document.querySelector('.activity2').style.opacity = 1;
                        document.querySelector('.circle2').style.opacity = 1;
                    }else {
                        document.querySelector('.activity2').style.opacity = 0;
                        document.querySelector('.circle2').style.opacity = 0;
                    }
                    if(mScroll >= -10) {
                        document.querySelector('.activity1').style.opacity = 1;
                        document.querySelector('.circle1').style.opacity = 1;
                    }else {
                        document.querySelector('.activity1').style.opacity = 0;
                        document.querySelector('.circle1').style.opacity = 0;
                    }
                // }
            }
        });
    }
    render() { 
        return (
            <div className="activities">
                <h2 className='underline title'>Recent Activities</h2>
                <div className="content">
                    <div className="line-container">
                        <svg width="245" height="1168" viewBox="0 0 245 1166" fill="none" preserveAspectRatio="xMidYMax meet">
                            <path className="activities-path" d="M106.5 4.5C-112.5 134 80.4998 273.667 156 340.5C261.5 456 130 565.5 42.5 633C-59 750 80.5 853.5 156 917.5C259.5 1005.24 156 1108 106.5 1162" stroke="#4A839599" stroke-width="7" stroke-linecap="round"/>
                            <circle className="circle1" cx="6" cy="132" r="10" fill="#4A8395"/>
                            <circle className="circle2" cx="195" cy="422" r="10" fill="#4A8395"/>
                            <circle className="circle3" cx="8" cy="708" r="10" fill="#4A8395"/>
                            <circle className="circle4" cx="200" cy="1006" r="10" fill="#4A8395"/>
                        </svg> 
                    </div>

                    <div className="activities-container">
                        <div className="left">
                            <div className="activity-none"></div>
                            <div className="activity activity2" >
                                <span className="date">
                                    12 - 12 - 2023
                                </span>
                                <span className="title" >
                                    Participated in Workshop
                                </span>
                                <span className="description">
                                    I participated in a three-day hands-on workshop on Artificial Intelligence (AI) and Machine Learning (ML) at Mary Matha Arts and Science College in Mananthavady. The workshop provided a comprehensive introduction to the field of AI and ML, covering both theoretical concepts and practical applications.
                                </span>
                            </div>
                            <div className="activity-none"></div>
                            <div className="activity activity4" >
                                <span className="date">
                                    12 - 12 - 2023
                                </span>
                                <span className="title" >
                                    Participated in Workshop
                                </span>
                                <span className="description">
                                    I participated in a three-day hands-on workshop on Artificial Intelligence (AI) and Machine Learning (ML) at Mary Matha Arts and Science College in Mananthavady. The workshop provided a comprehensive introduction to the field of AI and ML, covering both theoretical concepts and practical applications.
                                </span>
                            </div>
                        </div>
                        <div className="right">
                            <div className="activity activity1" >
                                <span className="date">
                                    12 - 12 - 2023
                                </span>
                                <span className="title" >
                                    Participated in Workshop
                                </span>
                                <span className="description">
                                    I participated in a three-day hands-on workshop on Artificial Intelligence (AI) and Machine Learning (ML) at Mary Matha Arts and Science College in Mananthavady. The workshop provided a comprehensive introduction to the field of AI and ML, covering both theoretical concepts and practical applications.
                                </span>
                            </div>
                            <div className="activity-none"></div>
                            <div className="activity activity3" >
                                <span className="date">
                                    12 - 12 - 2023
                                </span>
                                <span className="title" >
                                    Participated in Workshop
                                </span>
                                <span className="description">
                                    I participated in a three-day hands-on workshop on Artificial Intelligence (AI) and Machine Learning (ML) at Mary Matha Arts and Science College in Mananthavady. The workshop provided a comprehensive introduction to the field of AI and ML, covering both theoretical concepts and practical applications.
                                </span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}
 
export default Activities;