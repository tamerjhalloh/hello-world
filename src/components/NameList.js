import React from 'react'
//import Person from './Person';

function NameList() {
     const names = ["Foo", "Bar", "Baz", "Foo"];
    // const persons = [
    //     {
    //         id: 1,
    //         name : "Foo",
    //         age : 30, 
    //         skill : "React"
    //     },
    //     {
    //         id: 2,
    //         name : "Bar",
    //         age : 33, 
    //         skill : "Angular"
    //     },
    //     {
    //         id: 3,
    //         name : "Baz",
    //         age : 26, 
    //         skill : "Vue"
    //     }

    // ];
    // use index value as a key using index parameter
    const namesList = names.map((name, index) => <h2 key={index}> {index}-{name}</h2>)
    //const personList = persons.map((person) => <Person key={person.id} person={person}></Person>) 

    return (
        <div> {namesList}</div>
    )
}

export default NameList
