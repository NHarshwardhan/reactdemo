import React, { useEffect,useRef } from 'react'

function Uncontrolled() {
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return (
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    )
}

export default Uncontrolled
