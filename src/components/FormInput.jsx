export default function FormInput(props) {
    const is_valid = (!props.min || props.value >= props.min)
                    && (!props.max || props.value <= props.max),
            err_msg = 'Input error, please correct the above value',
        container_class= props.currency ? '--symbol' : '';

    return(
        <label>
            {/* TODO: range min/max labels */}
            <span>{props.label}</span>

            <div className="form-input__container">
                {props.currency &&
                    <span className={`form-input__container${container_class}`}>$</span>
                }

                <input
                    className={!is_valid ? "form-input__err" : undefined}
                    name={props.name}
                    type={props.type}
                    min={props.min}
                    max={props.max}
                    value={props.value}
                    onChange={props.onInput} />
            </div>

            {!is_valid &&
                <small className="form-input__err">*{props.err_msg ? props.err_msg : err_msg}</small>
            }
        </label>
    )
}