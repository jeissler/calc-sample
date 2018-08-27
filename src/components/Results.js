import React from "react";

const Results = (props) => {
    if(!props.is_valid)
        return (
            <React.Fragment>
                Oh no, we've reached an error state!
            </React.Fragment>
        );

    return (
        <React.Fragment>
            {props.retire_yrs} years to retirement
            <br/>
            {props.life_total} total needed
            <br/>
            {props.life_savings} total saved
        </React.Fragment>
    )
};

export default Results