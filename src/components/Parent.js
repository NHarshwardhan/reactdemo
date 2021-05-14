import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {

    constructor(props) {
        super(props)
    
        /* Parent To Child Code */
        /* this.state = {
             data:'Data from Parent'
        } */

        /* Child To Parent Code */
        this.state={
            data:null
        }
    }

    /* 1)Create a callback function in the parent component. This callback function will get the data from the child component.  */
    /* Child To Parent code */
    handleCallBack = (childData) =>{
        this.setState({data: childData})
    }

   
    render() {
        const {data}  = this.state
        return (
            <div>
               {/*  <h4>Parent Data  = {data}, passing to Child Component</h4>
                <Child dataParentToChild = {data}/> */}

                {/* Child To Parent UI */}
                 <Child parentCallback = {this.handleCallBack}/>
                 <h5>Parent component with Child Data = {data}</h5>
            </div>
        )
    }
}

export default Parent
