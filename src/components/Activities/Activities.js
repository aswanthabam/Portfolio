import { Component } from "react";
import './Activities.css';
import axios from 'axios';
class Activities extends Component {
    state = {
        activities:[],
        loaded:false,
        error:false
    }
    componentDidMount() {
        var width = window.screen.width;
        let path = width > 767 ? document.querySelectorAll('.activities-path')[0] : document.querySelectorAll('.activities-path')[1];
        let pathLength = path.getTotalLength();

        path.style.strokeDasharray = pathLength + ' ' + pathLength;
        path.style.strokeDashoffset = pathLength;

        window.addEventListener('scroll',() => {
            if(document.querySelector('.activities').getBoundingClientRect().top <= document.querySelector('.activities').getBoundingClientRect().height / 5) {
                var scrollPercentage = (-1 * document.querySelector('.activities').getBoundingClientRect().top + document.querySelector('.activities').getBoundingClientRect().height / 5) / document.querySelector('.activities').getBoundingClientRect().height;
                var ll = pathLength * scrollPercentage;
                path.style.strokeDashoffset =  pathLength - ll;
                var mScroll = document.querySelector('.activities .content').getBoundingClientRect().top * -1 / document.querySelector('.activities .content').getBoundingClientRect().height * 100;
                
                if(mScroll >= 50) {
                    (width > 767 ? document.querySelectorAll('.activity4')[0] :document.querySelectorAll('.activity4')[1]).style.opacity = 1;
                    (width > 767 ? document.querySelectorAll('.circle4')[0] : document.querySelectorAll('.circle4')[1]).style.opacity = 1;
                }else {
                    (width > 767 ? document.querySelectorAll('.activity4')[0] :document.querySelectorAll('.activity4')[1]).style.opacity = 0;
                    (width > 767 ? document.querySelectorAll('.circle4')[0] : document.querySelectorAll('.circle4')[1]).style.opacity = 0;
                }
                if(mScroll >= 30) {
                    (width > 767 ? document.querySelectorAll('.activity3')[0] :document.querySelectorAll('.activity3')[1]).style.opacity = 1;
                    (width > 767 ? document.querySelectorAll('.circle3')[0] : document.querySelectorAll('.circle3')[1]).style.opacity = 1;
                }else {
                    (width > 767 ? document.querySelectorAll('.activity3')[0] :document.querySelectorAll('.activity3')[1]).style.opacity = 0;
                    (width > 767 ? document.querySelectorAll('.circle3')[0] : document.querySelectorAll('.circle3')[1]).style.opacity = 0;
                }
                if(mScroll >= 0) {
                    (width > 767 ? document.querySelectorAll('.activity2')[0] :document.querySelectorAll('.activity2')[1]).style.opacity = 1;
                    (width > 767 ? document.querySelectorAll('.circle2')[0] : document.querySelectorAll('.circle2')[1]).style.opacity = 1;
                }else {
                    (width > 767 ? document.querySelectorAll('.activity2')[0] :document.querySelectorAll('.activity2')[1]).style.opacity = 0;
                    (width > 767 ? document.querySelectorAll('.circle2')[0] : document.querySelectorAll('.circle2')[1]).style.opacity = 0;
                }
                if(mScroll >= -20) {
                    (width > 767 ? document.querySelectorAll('.activity1')[0] :document.querySelectorAll('.activity1')[1]).style.opacity = 1;
                    (width > 767 ? document.querySelectorAll('.circle1')[0] : document.querySelectorAll('.circle1')[1]).style.opacity = 1;
                }else {
                    (width > 767 ? document.querySelectorAll('.activity1')[0] :document.querySelectorAll('.activity1')[1]).style.opacity = 0;
                    (width > 767 ? document.querySelectorAll('.circle1')[0] : document.querySelectorAll('.circle1')[1]).style.opacity = 0;
                }
                
            }
        });
        axios.get('https://avctechbackend.vercel.app/api/me/activities/get?priority=1&count=4').then(res => {
            if(res.data.status === 200) {
                this.setState({
                    activities:res.data.content.data,
                    loaded:true,
                    error:false
                });
            }else {
                this.setState({
                    loaded:true,
                    error:true,
                    activities:[]
                })
            }
        }).catch(err=>{
            // console.log(err);
            this.setState({loaded:true,error:true});
        })
    }
    render() { 
        var [act1,act2,act3,act4] = this.state.activities;
        return (
            <div className="activities">
                <h2 className='underline title'>Recent Activities</h2>
                {this.state.loaded && this.state.error && <span>Error occured</span>}
                        {!this.state.loaded && <span>Loading ...</span>}
                <div className="content">
                    <div className="line-container">
                        <svg className="desktop" width="215" height="1168" viewBox="0 0 215 1166" fill="none" preserveAspectRatio="xMidYMax meet">
                            <path className="activities-path" d="M106.5 4.5C-112.5 134 80.4998 273.667 156 340.5C261.5 456 130 565.5 42.5 633C-59 750 80.5 853.5 156 917.5C259.5 1005.24 156 1108 106.5 1162" stroke="#4A839599" stroke-width="7" stroke-linecap="round"/>
                            <circle className="circle1" cx="6" cy="132" r="10" fill="#4A8395"/>
                            <circle className="circle2" cx="195" cy="422" r="10" fill="#4A8395"/>
                            <circle className="circle3" cx="8" cy="708" r="10" fill="#4A8395"/>
                            <circle className="circle4" cx="200" cy="1006" r="10" fill="#4A8395"/>
                        </svg> 
                        <svg className='mobile' width="100%" height="auto" viewBox="0 0 332 1108" fill="none" preserveAspectRatio="xMinYMin meet">
                          <path className="activities-path"  d="M6.5 0C6.5 230.5 6.5 259.5 52 259.5C253.5 259.5 301.5 248.5 301.5 291C301.5 479.4 301.5 529.5 253.5 529.5C55.9 529.5 6.5 526.5 6.5 582C6.5 795.451 6.5 776.5 52 799.5C253.5 799.5 299 791 301.5 852C301.5 1036 301.5 1065.5 253.5 1065.5C126.5 1065.5 129 1063.5 129 1107.5" stroke="#4A839599" stroke-width="7" stroke-linecap="round"/>
                          <circle className="circle1" cx="7" cy="115" r="10" fill="#4A8395"/>                          
                          <circle className="circle2" cx="302" cy="395" r="10" fill="#4A8395"/>
                          <circle className="circle3" cx="7" cy="665" r="10" fill="#4A8395"/>
                          <circle className="circle4" cx="302" cy="935" r="10" fill="#4A8395"/>
                        </svg>
                        



                    </div>

                    <div className="activities-container desktop">
                        {this.state.loaded && !this.state.error && <>
                        <div className="left">
                            <div className="activity-none"></div>
                            {
                                act2 &&
                                <div className="activity activity2" >
                                    <span className="date">
                                        {new Date(act2.date).toLocaleString('es-CL',{day:'numeric',month:'numeric',year:'numeric'})}
                                    </span>
                                    <span className="title" >
                                        {act2.name}
                                    </span>
                                    <span className="description">
                                        {act2.description}
                                    </span>
                                </div>
                            }
                            <div className="activity-none"></div>
                            {
                                act4 &&
                                <div className="activity activity4" >
                                    <span className="date">
                                        {new Date(act4.date).toLocaleString('es-CL',{day:'numeric',month:'numeric',year:'numeric'})}
                                    </span>
                                    <span className="title" >
                                        {act4.name}
                                    </span>
                                    <span className="description">
                                        {act4.description}
                                    </span>
                                </div>
                            }
                        </div>
                        <div className="right">
                        {
                                act1 &&
                                <div className="activity activity1" >
                                    <span className="date">
                                        {new Date(act1.date).toLocaleString('es-CL',{day:'numeric',month:'numeric',year:'numeric'})}
                                    </span>
                                    <span className="title" >
                                        {act1.name}
                                    </span>
                                    <span className="description">
                                        {act1.description}
                                    </span>
                                </div>
                            }
                            <div className="activity-none"></div>
                            {
                                act3 &&
                                <div className="activity activity3" >
                                    <span className="date">
                                        {new Date(act3.date).toLocaleString('es-CL',{day:'numeric',month:'numeric',year:'numeric'})}
                                    </span>
                                    <span className="title" >
                                        {act3.name}
                                    </span>
                                    <span className="description">
                                        {act3.description}
                                    </span>
                                </div>
                            }
                        </div> </> }
                    </div>
                    
                    <div className="activities-container mobile">
                            {
                                act1 &&
                                <div className="activity activity1" >
                                    <span className="date">
                                        {new Date(act1.date).toLocaleString('es-CL',{day:'numeric',month:'numeric',year:'numeric'})}
                                    </span>
                                    <span className="title" >
                                        {act1.name}
                                    </span>
                                    <span className="description">
                                        {act1.description}
                                    </span>
                                </div>
                            }
                            {
                                act2 &&
                                <div className="activity activity2" >
                                    <span className="date">
                                        {new Date(act2.date).toLocaleString('es-CL',{day:'numeric',month:'numeric',year:'numeric'})}
                                    </span>
                                    <span className="title" >
                                        {act2.name}
                                    </span>
                                    <span className="description">
                                        {act2.description}
                                    </span>
                                </div>
                            }
                            {
                                act3 &&
                                <div className="activity activity3" >
                                    <span className="date">
                                        {new Date(act3.date).toLocaleString('es-CL',{day:'numeric',month:'numeric',year:'numeric'})}
                                    </span>
                                    <span className="title" >
                                        {act3.name}
                                    </span>
                                    <span className="description">
                                        {act3.description}
                                    </span>
                                </div>
                            }
                            {
                                act4 &&
                                <div className="activity activity4" >
                                    <span className="date">
                                        {new Date(act4.date).toLocaleString('es-CL',{day:'numeric',month:'numeric',year:'numeric'})}
                                    </span>
                                    <span className="title" >
                                        {act4.name}
                                    </span>
                                    <span className="description">
                                        {act4.description}
                                    </span>
                                </div>
                            }
                            
                    </div>
                    
                </div>
            </div>
        );
    }
}
 
export default Activities;