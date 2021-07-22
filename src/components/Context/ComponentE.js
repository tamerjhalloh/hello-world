import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

class ComponentE extends Component {
    // Instead of ComponentE.contextType = UserContext
    // It has 2 limitation
    // 1- works just with class Component
    // 2- can be set with only one context 
    static contextType = UserContext
    render() {
        return  (
            <div>
                Merhaba {this.context} = [C]
                <ComponentF />
            </div>
        )
    }
}

//ComponentE.contextType = UserContext

export default ComponentE
