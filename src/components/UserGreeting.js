import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {
        // if : does not work in jsx code
        // if(this.state.isLoggedIn)
        // {
        //     return  <div>  Welcome Tamer  </div>   
        // }
        // else{
        //     return  <div> Welcome Guest  </div>   
        // }

        // Element Veriables
        // let message;
        //  if(this.state.isLoggedIn)
        // {
        //     message = <div>  Welcome Tamer  </div>   
        // }
        // else{
        //     message =    <div> Welcome Guest  </div>   
        // }

        // return (
        //     <div>{message}</div>
        // )

        // Ternary Conditional Operator
        // return (
        //     this.state.isLoggedIn ? 
        //     <div>  Welcome Tamer  </div>  :
        //     <div>  Welcome Guest  </div> 
        // )

        // Short Circuit operator
        return this.state.isLoggedIn && <div>  Welcome Tamer  </div>   
    }
}

export default UserGreeting
