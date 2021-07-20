import React, { Component } from 'react'

class ClassClick extends Component { 

    buttonClicked () { console.log('Button clicked');}  
    render() {
      
        return (
            <div>
                 <button onClick={this.buttonClicked}> click (Class)</button>
            </div>
        )
    }
}

export default ClassClick
