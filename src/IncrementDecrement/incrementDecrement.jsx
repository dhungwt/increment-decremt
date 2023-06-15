import React, { Component, ReactPropTypes} from 'react'; 
import React, { useState } from "react";

class incrementDecrement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({count: this.state.count +1})
    }
    decrement = () => {
        this.setState({count: this.state.count -1})
    }

    render() {
        return (
            <div class="container">
                <button onClick="increment()">Increment</button>
                <h1>{this.state.number}</h1>
                <button onClick="decrement()">Decrement</button>
            </div>
        )
    }
   
}


export default incrementDecrement;