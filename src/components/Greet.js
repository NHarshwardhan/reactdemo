import React from 'react'

/* export default function Greet() {
    return (
        <div>
            <h1>Koenig Solutions Pvt Ltd.</h1>
        </div>
    )
} */

/* const Greet = () => <h1>Hello Mike</h1>

export default Greet   */

/* 

This allows to import Component with AnyName
import myGreet from './components/Greet' in app.js file

*/

/* 
 export const Greet = () => <h1>Koenig Solutions Pvt Ltd..</h1>

 Above code is Named Export
 In this situtation , You have to import component with exact same name
 import {Greet} from './components/Greet' in app.js file
*/



// Props demo

export default function Greet(props) {
    // props.name="Nishant" Not possible to update
    return (
        <div>
            <h1>Hello {props.name} { props.surname}</h1>
            {props.children}
        </div>
    )
} 



