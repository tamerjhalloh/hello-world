import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>  I ma {person.name}. I am {person.age} yeas old. I know {person.skill}</h2>
        </div>
    )
}

export default Person
