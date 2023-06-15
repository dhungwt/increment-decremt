import React, { Component, ReactPropTypes} from 'react'; 

class IncrementDecrement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }
    decrement = () => {
        this.setState({count: `${this.state.count=="0"?alert("Cannot be less than 0"):this.state.count - 1}`})
    }

    render() {
        return (
            <div className="container">
                <button onClick={this.increment}>Increment</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.decrement}>Decrement</button> 
            </div>
        );
    }
  
}


export default IncrementDecrement;