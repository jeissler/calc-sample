import React, {Component} from "react";

class FormInput extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <label>
                <span>{this.props.label}</span>
                <input
                    name={this.props.name}
                    type='number'
                    value={this.props.value}
                    onInput={this.props.onInput} />
            </label>
        )
    }
}

export default FormInput