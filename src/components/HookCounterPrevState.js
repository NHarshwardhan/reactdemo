/* import React, { useState } from 'react'

export default function Hookcounterprevstate() {
    const initialState = 0
    const [count, setCount] = useState(initialState)

    return (
        <div>
            Count : {count}
            <br/>
            <button onClick={()=>setCount(initialState)}>Reset</button>
            <button onClick={()=>setCount(count + 1 )}>Increment</button>
            <button onClick={()=>setCount(count - 1)}>Decrement</button>
        </div>
    )
} */

/* 
Everything looks fine, no Problem here, 
But this implementation and previous implmentation , Both are unsafe
Although it looks like its working, It is not the right way to change the count value
let's understand with example, with very unlikely piece of code

*/

import React, { useState } from 'react'

export default function Hookcounterprevstate() {
    const initialState = 0
    const [count, setCount] = useState(initialState)
     
    const incrementFive = ()=>{
        for(let i = 0; i<5 ;i++){
            //  setCount(count + 1)
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            Count : {count}
            <br/>
            {/* <button onClick={()=>setCount(initialState)}>Reset</button>
            <button onClick={()=>setCount(count + 1 )}>Increment</button>
            <button onClick={()=>setCount(count - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button> */}

            <button onClick={()=>setCount(initialState)}>Reset</button>
            <button onClick={()=>setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={()=>setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
            
        </div>
    )
}
