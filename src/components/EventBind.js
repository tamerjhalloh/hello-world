import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
        super(props);  
        this.state = {
           message : 'Hello'
        }

       // this.clickHandler = this.clickHandler.bind(this);
      }

    // clickHandler () {
    //     console.log(this);
    //     this.setState({
    //         message : 'Bye'
    //     })


    // }



    // 1- bind in the render method - not good 
    //this.clickHandler.bind(this)

    // 2- bind in the render method 2 method (arrow fn) - not good 
    //() => this.clickHandler()

    // 3- bind in the constuctor => it happens once (best)
    // this.clickHandler = this.clickHandler.bind(this);

    // 4- class property as arrow function
    // clickHandler = () => {
    //     this.setState({
    //         message : 'Bye'
    //     });
    // }
  

    clickHandler = () => {
        this.setState({
            message : 'Bye'
        });
    }

    render() {
        return (
            <div>
                <div> {this.state.message}</div>
                 <button onClick={this.clickHandler}> click </button>
            </div>
        )
    }
}

export default EventBind
