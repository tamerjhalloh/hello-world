import React, { Component } from 'react'
import MemoComp from './MemoComp';
// import PureComponentDemo from './PureComponentDemo';
// import RegComponent from './RegComponent';

export class PureParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : "Tamer"
        }
    }
    

    componentDidMount()
    {
        setInterval(() => {
            this.setState({
                name : "Tamer"
            });
        }, 2000);
    }

    render() {
        console.log("********* Parent Component Render *******")
        return (            
            <div>
                Parent Component
                {/* <RegComponent name={this.state.name} />
                <PureComponentDemo name={this.state.name} /> */}
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default PureParentComponent
