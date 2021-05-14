import React,{useState} from 'react'


export default function Hookcounter() {
    // const state = useState()
    // console.log(state)
    /* 
    The value returned by useState() consists of an array with two values

    The first value is the initial (or starting) value of the state variable, while the second value is a reference to the function that can be used to update the variable.

    One can always use array destructuring to assign both values at once so that they can be used in the component.
    */

    /* Destructuring Array  */
    const [count,setCount] = useState(0)

    return (
        <div>
            <button onClick={()=> setCount(count + 1)}>Count {count}</button>
        </div>
    )
}
