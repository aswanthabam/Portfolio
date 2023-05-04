import { Component } from "react";

class Main extends Component {
    state = {}
    render() { 
        return <div className="main">
            {this.props.children}
        </div>;
    }
}
 
export default Main;