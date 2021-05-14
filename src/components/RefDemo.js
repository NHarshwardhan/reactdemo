import React, { Component } from 'react'

export class Refdemo extends Component {

    constructor(props) {
        super(props)    
        this.inputRef = React.createRef()

    }
    
    clickHandler = ()=>{
       this.inputRef.current.focus()
    }
    showValue = () =>{
        console.log(this.inputRef.current.value)
    }
    render() {
        
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Set Focus</button>
                <button onClick={this.showValue}>Print Value</button>

            </div>
        )
    }
}

export default Refdemo
