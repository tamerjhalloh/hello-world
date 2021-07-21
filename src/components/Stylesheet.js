import React, { Component } from 'react'
import './myStyles.css'

 class Stylesheet extends Component { 
    render() {
        let className = this.props.primary ? 'primary' : '';
        return (
            <div>
             <h1 className={`${className} font-xl`}> Style Sheets </h1>   
            </div>
        )
    }
}

export default Stylesheet
