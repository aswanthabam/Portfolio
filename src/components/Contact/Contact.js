import { Component } from 'react';
import './Contact.css'

class Contact extends Component {
    state = {val:{}}
    onSubmit(e) {
        e.preventDefault();
    }
    render() { 
        return (
            <div className='contact'>
                <h2 className='underline'>CONTACT ME</h2>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className='name'>
                        <input name='firstname' placeholder='First Name' onChange={(e) => {
                            this.setState({...this.state,firstname:e.currentTarget.value});
                        }} required></input>
                        <input name='secondname' placeholder='Second Name'  onChange={(e) => {
                            this.setState({...this.state,secondname:e.currentTarget.value});
                        }}></input>
                    </div>
                    <input name='email' type='email' placeholder='E-mail' onChange={(e) => {
                            this.setState({...this.state,email:e.currentTarget.value});
                        }} required></input>
                    <input name='subject' placeholder='Subject' onChange={(e) => {
                            this.setState({...this.state,subject:e.currentTarget.value});
                        }} required></input>
                    <textarea placeholder='Message'  onChange={(e) => {
                            this.setState({...this.state,message:e.currentTarget.value});
                        }} required></textarea>
                    <button>Send</button>
                </form>
            </div>
        );
    }
}
 
export default Contact;