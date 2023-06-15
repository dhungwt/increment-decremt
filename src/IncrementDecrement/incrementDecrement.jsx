import React, { Component } from 'react'; 

class incrementDecrement extends Component {
    constructor(props) {
        super(props); 
    }
    render() {
        return (
            <div class="container">
                <button>Increment</button>
                <h1>{this.props.number}</h1>
                <button>Decrement</button>
            </div>
        )
    }
}


export default incrementDecrement;