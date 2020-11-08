import React, {Component} from 'react';
import ButtonDelete from "./ButtonDelete";
import ButtonEdit from "./ButtonEdit";

class CarItem extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.car.id}</td>
                <td>{this.props.car.mark}</td>
                <td>{this.props.car.model}</td>
                <td>{this.props.car.color}</td>
                <td>
                    <ButtonEdit car={this.props.car}/>
                    <ButtonDelete id={this.props.car.id}/>
                </td>
            </tr>
        )
    }
}

export default CarItem;