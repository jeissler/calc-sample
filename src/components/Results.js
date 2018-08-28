import React, {Fragment} from "react";

const Results = (props) => {
    if(!props.is_valid)
        return (
            <Fragment>
                Oh no, we've reached an error state!
            </Fragment>
        );

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

export default Results