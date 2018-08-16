import React, {Component} from 'react';
import FormInput from './FormInput';

class LifeCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 23,
            age_retire: 65,
            mo_expenses: 500,
            mo_home: 1400,
            own_rent: 1,
            own_yrs: 27,
            yr_income: 85000,
            yr_savings: 5000,
            life_savings: 20000
        };

        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(event) {
        const target = event.target,
            name = target.name;

        this.setState({[name]: parseInt(target.value)});

        this.calculateAmount();
    }

    calculateAmount() {
        const num_config = {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        };

        const retire_yrs = this.state.age_retire - this.state.age,
            inflate = (this.state.yr_income / retire_yrs),
            own_home = this.state.own_rent = 1,
            life_home = own_home ? this.state.own_yrs * this.state.mo_home : retire_yrs * this.state.mo_home,
            life_expenses = (this.state.mo_expenses * 12 + inflate) * (retire_yrs + 20),
            life_total = life_home + life_expenses - this.state.life_savings,
            life_savings = this.state.yr_savings * retire_yrs + this.state.life_savings;

        return {
            retire_yrs: retire_yrs,
            life_total: life_total.toLocaleString('en', num_config),
            life_savings: life_savings.toLocaleString('en', num_config)
        };
    }

    render() {
        const {retire_yrs, life_total, life_savings} = this.calculateAmount();

        return (
            <section className='life-calc'>
                <p className='life-calc__intro'>
                    Knowing what you realistically need to retire comfortably is half the battle.
                </p>

                <form className='life-calc__form'>
                    {/* age grid */}
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

                    {/* input slider expenses 500 range */}

                    {/* rent/own grid */}
                    <div className="life-calc__home">
                        {/* TODO: checkbox for own/rent + add to calc */}
                        <FormInput
                            label='Monthly Rent/Mortgage'
                            name='mo_home'
                            value={this.state.mo_home}
                            onInput={this.handleInput} />
                    </div>

                    {/* input slider income 20k range */}

                    <FormInput
                        label='Retirement Account'
                        name='life_savings'
                        value={this.state.life_savings}
                        onInput={this.handleInput} />
                </form>

                <aside className='life-calc__results'>
                    {retire_yrs} years to retirement
                    <br/>
                    {life_total} total needed
                    <br/>
                    {life_savings} total saved
                </aside>
            </section>
        )
    }
}

export default LifeCalculator