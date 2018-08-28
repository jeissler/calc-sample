import React, {Fragment} from "react";

const Error = () => {
    return "Oh no, we've reached an error state!"
};

const Result = (props) => {
    return (
        <Fragment>
            {props.retire_yrs} years to retirement
            <br/>
            {props.life_total} total needed
            <br/>
            {props.life_savings} total saved
        </Fragment>
    )
};

const Results = (props) => {
    return props.is_valid ? <Result {...props}/> : <Error/>
};

export default Results