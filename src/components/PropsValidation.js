import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class Propsvalidation extends Component {
    render() {
        return (
            <div>
                <h1>Your name is {this.props.name}</h1>
                <h2>Your Age is  {this.props.age}</h2>
            </div>
        )
    }
}

Propsvalidation.propTypes={
      name:PropTypes.string.isRequired,
      age:PropTypes.number
}

Propsvalidation.defaultProps={
    name:"JohnCena"
}
export default Propsvalidation
