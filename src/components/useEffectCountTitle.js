/* import React, { Component } from 'react'

export class Useeffectcounttitle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate(){       
        document.title = `Clicked ${this.state.count} times`
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.setState({count:this.state.count + 1})} >Click {this.state.count} times</button>
            </div>
        )
    }
}

export default Useeffectcounttitle
 */

/* ------------------------------------useEffect() conditionally run effects--------------------------------------------------- */
/* 
In previos example, we learn ,useEffect run after every single render
In Some case applying the effect after every render might create performance problem,
so we need a way to conditionally run an effect from functional component.
*/

// First example with class component
/* 
 1) Set a Input field take a name from user
*/
import React, { Component } from 'react'

export class Useeffectcounttitle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             name:''
        }
    }
    
    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
    }
   /*  componentDidUpdate(){       
        console.log('updating document title')
        document.title = `Clicked ${this.state.count} times`
    } */
    
    // Optimize code
    componentDidUpdate(prevProps,prevState){     
        
        if(prevState.count !== this.state.count){
            console.log('updating document title')
            document.title = `Clicked ${this.state.count} times`
        }
      //Go to Browser check
      /* 
       Click on the button , we can see title is updated
       start typing a name document title is not updated, so we are conditionally updating the title,only when the 
       appropriate variable changes i.e. only count variable changes
       noe lets see the same implmenation with functionalComponent
      */
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e=>{this.setState({name:e.target.value})}}/>
                {/* 
                 After typing into text box we are still getting log statement[updating document title]
                 the count value is still 1
                 so we are basically setting document title, same string 7 times,which is sort of unneccessary.

                 TO Optimize this we can compare count value before and after the update and if at all the count value changed,
                   we then conditionally update the title.
                  
                 */}
                <button onClick={()=>this.setState({count:this.state.count + 1})} >Click {this.state.count} times</button>
            </div>
        )
    }
}

export default Useeffectcounttitle