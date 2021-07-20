import React from 'react'

function FuncitonClick() {
    function buttonClicked () { console.log('Button clicked');} 
    return (
        <div>
            <button onClick={ buttonClicked}> Click (Function)</button>
        </div>
    )
}

export default FuncitonClick
