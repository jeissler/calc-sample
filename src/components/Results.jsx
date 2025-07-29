const Error = () => {
    return "Oh no, we're unable to calculate your savings and retirement!"
};

const Result = (props) => {
    return (
        <>
            <h3>{props.retire_yrs} years to retirement</h3>
            <h3>{props.life_total} total needed&sup1;</h3>
            <h3>{props.life_savings} total saved</h3>

            {/* TODO: add charts, animation, etc. */}
        </>
    )
};

export default function Results(props) {
    return props.is_valid ? <Result {...props}/> : <Error/>
}