import React, { Component } from 'react'
import RFInput from './RFInput'

class RFParentInput extends Component {
    constructor(props) {
        super(props);    
        this.inputRef = React.createRef();
    }
    
    clickHandler = () => {
      this.inputRef.current.focus();  
    };

    render() {
        return (
            <div>
                 <RFInput ref={this.inputRef} />
                 <button onClick={this.clickHandler}> Focus Input </button>              
            </div>
        )
    }
}

export default RFParentInput
