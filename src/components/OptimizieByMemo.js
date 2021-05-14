import React,{useState,useMemo} from 'react'

function Optimiziebymemo() {
    const [counterone, setCounterone] = useState(0)
    const [countertwo, setCountertwo] = useState(0)

    const incrementOne = ()=>{
         setCounterone(counterone + 1)
    }
    const incrementTwo = ()=>{
         setCountertwo(countertwo + 1)
    }
    
    /*  const isEven = ()=>{
         return counterone %2 == 0
     }
 */
   /*  const isEven = ()=>{
        let i=0;
        while(i<200000000) i++
        return counterone %2 == 0
    }
 */
    /* 
    Loop really does not effect a return value but it does slow down the rate at which we compute
    where the counter 1 is odd or even
    */
     /* 
      but the things here when I click button 2  still there is still a delay with UI updates.
      This is strange,why is counter too slow as well,
      well that is bcz every time the state updates the component re-rerenders.
      when the component rerenders these even function called again.
      the function is slow and hence even when we update counter to the UI update is slow

      So what we need is a way to tell react not to recalculate certain value when unnecessary.
      especially which one take a long time to compute,

      In our example, wen eed to tell react not to calculate whether counter1 is even or odd,when we
      are changeing counter2 values
      This is where memo hooks comes into this picture

      useMemo is a hook that will only recompute the cached value,when one of the dependecies has changed,
      this optimization heads to avoid expensive calculations on every render.

      impot useMemo hook
      :first arg of useMemo is a function  whose return value needs to be cached,
      In our example this wud be the arrow function to calculate if a number is odd or even
      :second parameter will be dependecy that is counterOne.

     */ 
    
      const isEven = useMemo(()=>{
        let i=0;
        while(i<200000000) i++
        return counterone %2 == 0
    },[counterone])
     /* 
      when i clicked btn2  updates are way faster,this is bcz react is now using cached value
      of iseven function to display where the count 1 is odd or even
      since the value never changed for counter 1 ,there is no need to recompute this odd or even value
      react simple use the cached value form previous render.
      this is how memo hook can be used for preformance optimization

      cache the result of an invoked function use memo
      cache a function use callback
     */
    return (
        <div>
             <div>
                 <button onClick={incrementOne} >Count one - {counterone}</button>
                 {/* <span>{isEven()?'Even':'Odd'}</span> */}
                 <span>{isEven?'Even':'Odd'}</span>
                 
             </div>
             <div>
                 <button onClick={incrementTwo} >Count one - {countertwo}</button>
                 {/* 
                 When click btn2 even/odd text remain uneffected
                  */}
             </div>
        </div>
    )
}

export default Optimiziebymemo


/* 
Suppose we got an new requirement
1) Next to button I need to dispplay the count value is even or odd number

*/

/* 
THis even funtion is ok...
but at some point of time we come accorrs with logic that take good amount of time to execute.
that is a function is not so good with performance it.
let's add some code to induce some slowness into our function.
so within the isEven function ,take a while loop that simply iterates for a long time.
*/