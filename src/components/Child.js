import React, { Component } from 'react'

export class Child extends Component {
    constructor(props) {
        
        super(props)
        /* Parent to child code */
        /*   this.state = {
                data : this.props.dataParentToChild
            } */
    }

     /* Child to Parent Code */
     onTrigger = (event) => {
        console.log(event)
        this.props.parentCallback("Data from child");
        event.preventDefault();
    }

    /* Why Event Added here     
    Ans : - 
    React has an internal event system that gets triggered every time a certain action is taken by the user.
     
    When you click on the button above, the event variable will be logged as a SyntheticBaseEvent object in your console:

    The event argument passed into handleClick is React’s own Synthetic event. It will always get send into your event handler function.

    React’s Synthetic events are basically wrappers around the native DOM events. 

    since Synthetic events are just wrappers, the internal default behavior of the DOM object will still be triggered. One problem with the native DOM events is that it sometimes triggers a behavior that you don’t need.
 
    For example, a form’s submit button in React will always trigger a browser refresh to submit the data into a backend system. This is bad because the behavior you defined in the onSubmit event function will be ignored by the browser. 
    
    modern web applications tend to run the form validation process on the client-side in order to save time and bandwidth. To do so, you need to run your own defined behavior.

    To cancel the native behavior of the submit button, you need to use React’s event.preventDefault() function:

    */
    
    render() {
        // Parent to Child Code
        // const {data}  = this.state

       

        return (
            /* Parent to Child UI */
             <div>

              {/* <h3>Child Component<hr/></h3>
                <h5>{data}</h5> */}

               {/* Child to Parent UI  */}
               <form onSubmit = {this.onTrigger}>
                   <input type = "submit" value = "Submit"/>
               </form>

            </div> 

        
        )
    }
}

export default Child
