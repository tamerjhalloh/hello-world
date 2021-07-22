import React from 'react'

function ColumnsFragment() {
    const items = [
        {
            id : 1,
            name : "Tamer"
        },
        {
            id : 2,
            name : "Nasim"
        }
    ]
    return (
        items.map(item => (
        <React.Fragment key={item.id}>
            <tr>
                <td> Name</td>
                <td> {item.name}</td>
            </tr>
        </React.Fragment>
        ))
    )
}

export default ColumnsFragment
