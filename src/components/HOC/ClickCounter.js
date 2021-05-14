import React, { Component } from 'react'
import updatedComponent from './HocImplement'
export class Clickcounter extends Component {
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
    } */
    // Cut above code and place in HOC file
    
    render() {
        // const{count} = this.state
        const {count, incrementCount} = this.props
        console.log(this.props.name)
        return (
            <div>
                {/* <button onClick={this.incrementCount} >{this.props.name}Clicked {count} times</button> */}
                <button onClick={incrementCount} >Clicked {count} times</button>
                

           
            </div>
        )
    }
}

// export default Clickcounter
export default updatedComponent(Clickcounter,5)
