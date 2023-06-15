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
        if (this.state.count !== 0) {
            this.setState({count: this.state.count-1});
        } else {
            alert("Cannot be less than 0");
        }
    }

    render() {
        const containerStyle = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
        };
      
        const buttonStyle = {
            margin: '0 10px',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#337ab7',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
        };
      
        const countStyle = {
            fontSize: '24px',
            fontWeight: 'bold',
            margin: '20px 0'
        };
      
        return (
            <div style={containerStyle}>
              <button style={buttonStyle} onClick={this.increment}>Increment</button>
              <h1 style={countStyle}>{this.state.count}</h1>
              <button style={buttonStyle} onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
  
}


export default IncrementDecrement;