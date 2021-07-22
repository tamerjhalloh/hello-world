import React, { Component } from 'react'

class ClickCounter2 extends Component {
   

    render() {
        const {count, incrementHandler} = this.props;
        return ( 
                <button onClick={incrementHandler}> Clicked {count} times </button>
             )
    }
}

export default ClickCounter2
