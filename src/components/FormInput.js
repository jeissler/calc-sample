import React, {Component} from "react";

class FormInput extends Component {
    render() {
        const is_valid = (!this.props.min || this.props.value >= this.props.min)
                        && (!this.props.max || this.props.value <= this.props.max),
                err_msg = 'Input error, please correct the above value';

        return(
            <label>
                {/* TODO: range min/max labels */}
                <span>{this.props.label}</span>

                <input
                    name={this.props.name}
                    type={this.props.type}
                    min={this.props.min}
                    max={this.props.max}
                    value={this.props.value}
                    onChange={this.props.onInput} />

                {!is_valid &&
                    <span className="form-input__err">*{this.props.err_msg ? this.props.err_msg : err_msg}</span>
                }
            </label>
        )
    }
}

export default FormInput