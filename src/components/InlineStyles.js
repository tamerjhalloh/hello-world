import React from 'react'

const heading ={
    fontSize : '82px',
    color : 'blue'
}

function InlineStyles() {
    return (
        <div>
             <h1 className="error"> Error</h1> 

            <h1 style={heading}>Inline Styles</h1>
        </div>
    )
}

export default InlineStyles