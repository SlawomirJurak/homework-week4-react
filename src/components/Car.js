import React, {Component} from 'react';

class Car extends Component {

    state = {
        car: {}
    }

    componentDidMount() {
        let id = this.props.match.params.id;

        if (isNaN(parseInt(id, 10))) {
            this.setState({
                car : {}
            });
        }
        else {
            fetch('http://localhost:8080/cars/' + id)
                .then(result => result.text())
                .then(text => {
                    if (text) {
                        let car = JSON.parse(text);

                        this.setState({car});
                    } else {
                        let car = {};

                        this.setState({car});
                    }
                });
        }
    }

    render() {
        if (!this.state.car.id) {
            return (
                <div>
                    Undefined Car
                </div>
            )
        }
        return (
            <div>
                <div>{this.state.car.id}</div>
                <div>{this.state.car.mark}</div>
                <div>{this.state.car.model}</div>
                <div>{this.state.car.color}</div>
            </div>
        )
    }
}

export default Car;