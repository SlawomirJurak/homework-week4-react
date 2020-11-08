import React, {Component} from 'react';
import CarItem from "./CarItem";

class Cars extends Component {

    state = {
        cars: []
    };

    componentDidMount() {
        fetch('http://localhost:8080/cars')
            .then(result => result.json())
            .then(cars => {
                this.setState({cars});
            });
    }

    render() {
        if (this.state.cars.length === 0) {
            return (
                <div>
                    No cars in database
                </div>
            )
        }
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Mark</th>
                        <th>Model</th>
                        <th>Color</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.cars.map(car => <CarItem key={car.id} car={car}/>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Cars;