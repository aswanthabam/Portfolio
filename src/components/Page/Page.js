import { Component } from "react";
import "./Page.css"
import bg from "../../images/star-trails-1846734_1920.jpg"
class Page extends Component {
    state = {}
    render() { 
        return <div className={"page page-"+this.props.num} id={this.props.id}>
            <img className={"background"+(this.props.blurred ? " blurred" : "")} src={bg}></img>
            {this.props.children}
        </div>;
    }
}
 
export default Page;