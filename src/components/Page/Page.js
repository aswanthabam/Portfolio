import { Component } from "react";
import "./Page.css"
import bg from "../../images/star-trails-1846734_1920.jpg"
class Page extends Component {
    state = {}
    render() { 
        return (
        <div className={"page page-"+this.props.num+(this.props.blurred ? " blurred" : " normal")+(this.props.fixedHeight?" fixed":"")+(this.props.min ? " min" : "")} id={this.props.id}>
            <div className="bg"></div>
            <img className={"background"+(this.props.blurred ? " blurred" : " normal")} src={bg}></img>
            {this.props.children}
        </div>);
    }
}
 
export default Page;