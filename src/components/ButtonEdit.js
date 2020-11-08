import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class ButtonEdit extends Component {

    state = {
        redirect: false
    }

    handleClick = (event) => {
        this.setState({
            redirect: true
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={'cars/edit/'+this.props.car.id}/>
        }
        return <button onClick={this.handleClick}>
            Edit
        </button>
    }
}

export default ButtonEdit;