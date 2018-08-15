import React, {Component} from 'react';
import FormInput from './FormInput';

class LifeCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 23,
            age_retire: 65,
            expenses: 500,
            mortgage: 1400,
            income: 85000
        };

        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(event) {
        const target = event.target,
            name = target.name;

        this.setState({[name]: target.value})
    }

    calculateAmount() {
        return this.state.age_retire - this.state.age;
    }

    render() {
        const total = this.calculateAmount();

        return (
            <section className='life-calc'>
                <p className='life-calc__intro'>
                    Knowing what you realistically need to retire comfortably is half the battle.
                </p>

                <form className='life-calc__form'>
                    <div className='life-calc__age'>
                        <FormInput
                            label='Current Age'
                            name='age'
                            value={this.state.age}
                            onInput={this.handleInput} />

                        <FormInput
                            label='Retriement Age'
                            name='age_retire'
                            value={this.state.age_retire}
                            onInput={this.handleInput} />
                    </div>
                </form>

                <aside className='life-calc__results'>
                    {total} years to retirement
                </aside>
            </section>
        )
    }
}

export default LifeCalculator