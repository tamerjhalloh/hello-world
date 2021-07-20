//import React from 'react'

// function Greet()
// {
//     return <h1>Hello Tamer</h1>
// }

// const Greet = (props) => { 
//     //props.name = "Omer"
//     return (
//         <div>
//             <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//             {props.children}
//         </div>
//     );
// }

// Destructing props - parameters
// const Greet = ({name, heroName, children}) => { 
//     //props.name = "Omer"
//     return (
//         <div>
//             <h1>Hello {name} a.k.a {heroName}</h1>
//             {children}
//         </div>
//     );
// }

// Destructing props - body
const Greet = (props) => { 
    //props.name = "Omer"
    const {name, heroName, children} = props;
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {children}
        </div>
    );
}
export default Greet 