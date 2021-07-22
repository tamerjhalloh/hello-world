import React, { Component } from 'react'

class HoverCounter2 extends Component {
    
    render() {
        const {count, incrementHandler} = this.props;
        return (
            <h2 onMouseOver={incrementHandler}> Hovered {count} times </h2>
        )
    }
}

export default HoverCounter2
