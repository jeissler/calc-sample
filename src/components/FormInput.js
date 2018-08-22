import React, {Component} from "react";

class FormInput extends Component {
    render() {
        return(
            <label>
                <span>{this.props.label}</span>
                <input
                    name={this.props.name}
                    type={this.props.type}
                    min={this.props.min}
                    max={this.props.max}
                    value={this.props.value}
                    onChange={this.props.onInput} />
            </label>
        )
    }
}

export default FormInput