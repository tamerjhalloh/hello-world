import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
             count : 0
        };
    }
    
    incrementCount = () => {
        this.setState(prevStat => {
            return{ count: prevStat.count + 1};
        });
    }

    render() {
        return (
            <div>
                {this.props.children(this.state.count, this.incrementCount)}     
            </div>
        )
    }
}

export default Counter
