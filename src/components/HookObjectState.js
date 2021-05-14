import React, { useState } from 'react'

export default function Hookobjectstate() {
    const [name,setName] = useState({firstname:'',lastname: ''})

    return (
        <div>
            <form>
                <input 
                   type="text" 
                   value={name.firstname}
                //    onChange={e => console.log(e) }
                // onChange={e => setName({firstname:e.target.value}) }
                onChange={e => setName({...name,firstname:e.target.value}) }

                   />
                <input 
                   type="text" 
                   value={name.lastname}
                //    onChange={e => console.log(e) }
                // onChange={e => setName({lastname:e.target.value}) }
                onChange={e => setName({...name,lastname:e.target.value}) }

                   />
                  <h2>Your First Name is - {name.firstname}</h2> 
                  <h2>Your last name is - {name.lastname}</h2>
                  <h3>{JSON.stringify(name)}</h3>
            </form>
        </div>
    )
}

/* 
when I start typing in first name , lastname property remove from state variable
when I start typing in last name , firstname property disappered from state variable

This  reason happens:
Bcz useState does not automatically merge and update object.

This is key difference to setState which you come acrross in class Components
setState will merge state,where as useState set a function will not merge the state,
You have to do it mannually.

Its not difficult, bcz we can use spread operator to handle the mannual merge

The spread operator is commonly used to make shallow copies of JS objects.

ex: - setName({...name,firstname:e.target.value})
How will you read this ?
ans : 
- copy every property in the name object then just overwrite firstname field with different value

- Make the replica of name object then only update lastname property to the new value

- spread operator is feature of es6 , which is very common operator used now.
*/