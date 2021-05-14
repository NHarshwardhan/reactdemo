import React, { useState } from 'react'

function Controlledcompo() {
    const[name,setName]= useState({firstname:'',lastname:''})

    return (
        <div>
            <form>
                <input 
                   type="text" 
                   value={name.firstname}
                   onChange={e => setName({...name,firstname:e.target.value}) }

                   />
                <input 
                   type="text" 
                   value={name.lastname}
                   onChange={e => setName({...name,lastname:e.target.value}) }
                />
                  <h2>Your First Name is - {name.firstname}</h2> 
                  <h2>Your last name is - {name.lastname}</h2>
                  <h3>{JSON.stringify(name)}</h3>
            </form>        
        </div>
    )
}

export default Controlledcompo
