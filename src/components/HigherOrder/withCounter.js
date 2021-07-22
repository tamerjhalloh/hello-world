import React from 'react'

 const withCounter = (WrappedComponent, incrementNumber) => {
    class WithCounter extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count : 0
            }
        }
    
        incrementCount = () => {
            this.setState(prevStat => {
                return{ count: prevStat.count + incrementNumber}
            })
        }

        render(){
            console.log(this.props)
            return <WrappedComponent 
            count={this.state.count}
            incrementCount={this.incrementCount}
            // pass rest of props
            {...this.props}
              />
        }
    }
    return WithCounter;
 };

 export default withCounter