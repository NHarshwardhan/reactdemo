//  import React,{useState,useEffect} from 'react'
 
//  export default function Useeffectcounttitlefunction() {

//     const [count, setCount] = useState(0)

//     useEffect(()=>{
//         document.title = `You clicked ${count} times`
//     }) 
            /* 
            When we specifying useEffect, we are requesting React, to execute the function that is passed as an argument everytime the component renders.

            useEffect runs after every render of component,

            THis is quite same that we are trying to do with class component as well

            On Initial render, we want to run some code
                componentDidMount(){
                document.title = `Clicked ${this.state.count} times`

            and on every render after that  , we want to execute same code.
            componentDidUpdate(){       
                document.title = `Clicked ${this.state.count} times`
            }

            With Hooks, we have useEffect for that exact same purpose.

            It runs after the both renders and after every update

            Note : - 
                useEffect runs after every render
                useEffect place inside the component, by doing this we can easily access the component state and props
                without having to write any additional code

            }

            */
//      return (
//          <div>
//               <button onClick={()=>setCount(count+1)} >Click {count} times</button>
//          </div>
//      )
//  }

/* ------------------------------------useEffect() conditionally run effects--------------------------------------------------- */


import React,{useState,useEffect} from 'react'

export default function Useeffectcounttitlefunction() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    /* useEffect(()=>{
        document.title = `You clicked ${count} times`
    })  */

    useEffect(()=>{
        console.log('useEffect - updating document title')
        document.title = `You clicked ${count} times`
    },[count]) 
    
    /* Take away
      IN  order to run conditionally effect , pass the second parameter of useEffect
      Second parameter is an array of value that the effect depends on
      If value does not change between render, the effect is simplay not run
      so Good optimization technic to keep in mind
    */
    return (
        <div>
          <input type="text" value={name} onChange={e=>{setName(e.target.value)}}/>

          <button onClick={()=>setCount(count+1)} >Click {count} times</button>

        </div>
    )
}
/* 
after typing name it is still updating dcoument title, This is not optimal
There is no necessity to update the document titile, if it is not even changing b/w renders

So How do we tell react to conditionally run useEffect only count value changes.
In class component,
we check the compare previous state with current state and only update if there is difference.

In Functional Component,
we conditionally execute the effect ,we pass in second parameter
This paramenter is an array
In this array we need to speicfy either state or props that we need to watch for

If only those props and state specify in this array were to change, the effect would be executed
In this scenario, we need to effect to be excuted only the count value changes
so within array we include count


*/

 