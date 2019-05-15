import React, { Component } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            status : false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ status: !this.state.status });
    }

    render () {
        return  <button 
                    className={`btn ${(this.state.status ? 'btn-primary' : 'btn-warning')}`}
                    onClick={this.handleClick}> 
                        {this.state.status ?  'Blue'  : 'Yellow'}
                        {this.state.status ?  <FaThumbsUp /> : <FaThumbsDown />}
                </button>
    }
}
export default MyButton