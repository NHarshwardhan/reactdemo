import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    /* 
     if we update the state of any component like the below the webpage will not re-render itself because React State will not be able to detect the changes made.
    */
   /*  increment(){
        this.state.count = this.state.count + 1
        console.log(this.state.count)
    } */
    
    /* 
     React provides its own method setState(). setState() method takes two parameter and expects an object which should contain the set of values to be updated. 
     
     Once the update is done the method implicitly calls the render() method to repaint the page.

     Hence the correct method of updating the value of a state will be similar to the code below.

    */

       /*  increment(){
            this.setState({
                count:this.state.count + 1
            })
            console.log(this.state.count)
        } */

    /* 
     1) Observe console, value is 0 after increment 1
     It means , console value is 1 less than the rendered value
     This is because calls to setState is asynchronous.

     SO What is Happening,
     Console.log is being called before the state actually set.
     Many time in ur application you want to execute some code only after the state has been updated.

     TO Handle such situtation,
     You can pass in callback function as the 2nd parameter of setState.
    */    

            increment(){
                this.setState({
                    count:this.state.count + 1
                },()=>{
                    console.log('Callback value = '+this.state.count)
                })
                console.log(this.state.count)
            }
     /* 
       Above code is working fine bcz of a very simple scenario
       let try to make scenario little complex,

       I am going to create a method i.e. incrementFive and within body I simply calls
       increment() five times   
     */
            incrementFive(){
              
               this.increment()
               this.increment()
               this.increment()
               this.increment()
               this.increment()
            }

     /* 
      after clicking on button the value changes to 1 instead of changing to five
      In Console, 0 is printed 5 times, callback=1 five times

      Reason : 
       React may group multiple setState calls into a single update for better performance, so WHat happens in our scenario,

       All the 5 state calls done on 1 single go and updated value does not carry over 
       between the diffrent calls,

       SO whenever you have to update the state based on previous state ,we need to pass a function as argument to setstate method instead of passing in an object
     */

            increment(){
                this.setState((prevState)=>({
                    count:prevState.count +1
                }))
                
            }
            
            //Use props as well
           /*  increment(){
                this.setState((prevState,props)=>({
                    count:prevState.count +props
                }))
                
            } */


    render() {
        return (
           /*  <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=>this.increment()}>Increment</button>
            </div> */
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=>this.incrementFive()}>Increment</button>
               
           </div>
        )
    }
}

export default Counter
