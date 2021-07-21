import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             usermame : '',
             comments : '',
             topic : ''
        }
    }
    
    handleUsernameChange = (event) => {
        this.setState({
            usermame : event.target.value
       })
    };

    handleCommentsChange = (event) => {
        this.setState({
            comments : event.target.value
       })
    };

    handleTopicChange = (event) => {
        this.setState({
            topic : event.target.value
       })
    };


    handleSubmit = (event) => {
        alert(`${this.state.usermame} ${this.state.comments} ${this.state.topic}`);
        event.preventDefault();
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.usermame} 
                    onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea type="text" value={this.state.comments} 
                    onChange={this.handleCommentsChange} ></textarea>
                </div>
                <div>
                    <label>Topics</label>
                    <select   value={this.state.topic} 
                    onChange={this.handleTopicChange} >
                        <option value="react">react</option>
                        <option value="angular">angular</option>
                        <option value="vue">vue</option>

                    </select>
                </div>
                <div>
                    <button type="submit">submit</button>
                </div>
            </form>
        )
    }
}

export default Form
