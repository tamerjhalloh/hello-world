import React, { PureComponent } from 'react'

export class RegComponent extends PureComponent {
    render() {
        console.log("********* Regular Component Render *******")

        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegComponent
