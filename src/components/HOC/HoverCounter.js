import React, { Component } from 'react'
import updatedComponent from './HocImplement'
export class Hovercounter extends Component {
    /* constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    incrementCount=()=>{
        this.setState(prevState=>{
           return {count:prevState.count +1}
        })
    }
     */
    render() {
        // const{count} = this.state
        const {count, incrementCount} = this.props
        return (
            <div>
                {/* <h1 onMouseOver={this.incrementCount} >{this.props.name}Hovered {count} times</h1> */}
                <h1 onMouseOver={incrementCount} >Hovered {count} times</h1>
            </div>
        )
    }
}

export default updatedComponent(Hovercounter,10)
