import React, {Component} from "react";
import FormInput from "./FormInput";
import Results from "./Results";

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
            yr_savings: 5,
            life_savings: 20000
        };

        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(event) {
        const target = event.target,
            name = target.name;

        this.setState({[name]: parseInt(target.value, 10)});

        this.calculateAmount();
        this.getRangeValues();
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
            own_home = this.state.own_rent === 1,
            life_home = own_home ? this.state.own_yrs * this.state.mo_home : retire_yrs * this.state.mo_home,
            life_expenses = (this.state.mo_expenses * 12 + inflate) * (retire_yrs + 20),
            life_total = life_home + life_expenses - this.state.life_savings,
            yr_savings = (this.state.yr_savings / 100) * this.state.yr_income,
            life_savings = yr_savings * retire_yrs + this.state.life_savings,
            is_valid = [retire_yrs, life_total, life_savings].every(prop => !isNaN(prop) && prop > 0);

        return {
            is_valid: is_valid,
            retire_yrs: retire_yrs,
            life_total: life_total.toLocaleString('en', num_config),
            life_savings: life_savings.toLocaleString('en', num_config)
        };
    }

    getRangeValues() {
        return {
            retire_min: this.state.age + 10 <= 65 ? this.state.age + 10 : this.state.age,
            retire_max: this.state.age >= 65 ? this.state.age + 10 : 75
        }
    }

    render() {
        const {is_valid, retire_yrs, life_total, life_savings} = this.calculateAmount(),
            {retire_min, retire_max} = this.getRangeValues();

        return (
            <section className="life-calc">
                <p className="life-calc__intro">
                    Knowing what you realistically need to retire comfortably is half the battle.
                </p>

                <form className="life-calc__form">
                    {/* age grid */}
                    <fieldset className="life-calc__age">
                        <div>
                            <FormInput label='Current Age'
                                       name='age'
                                       type='number'
                                       value={this.state.age}
                                       min={18}
                                       max={99}
                                       err_msg='Please enter a valid age'
                                       onInput={this.handleInput}/>

                            <FormInput label={`Retriement Age ${this.state.age_retire}`}
                                       name='age_retire'
                                       type='range'
                                       min={retire_min}
                                       max={retire_max}
                                       value={this.state.age_retire}
                                       onInput={this.handleInput}/>
                        </div>
                    </fieldset>


                    <fieldset className="life-calc__expenses">
                        <div>
                            <FormInput label='Monthly Rent/Mortgage'
                                       name='mo_home'
                                       type='number'
                                       currency={true}
                                       value={this.state.mo_home}
                                       onInput={this.handleInput}/>

                            <FormInput label='Monthly Expenses'
                                       type='number'
                                       currency={true}
                                       name='mo_expenses'
                                       value={this.state.mo_expenses}
                                       onInput={this.handleInput}/>
                        </div>

                        {/* TODO: checkbox for own/rent + reveal payoff yrs */}
                    </fieldset>


                    <fieldset className="life-calc__savings">
                        <div>
                            <FormInput label='Yearly Income'
                                       name='yr_income'
                                       type='number'
                                       currency={true}
                                       min={0}
                                       value={this.state.yr_income}
                                       onInput={this.handleInput}/>

                            <FormInput label='Retirement Account'
                                       name='life_savings'
                                       type='number'
                                       currency={true}
                                       value={this.state.life_savings}
                                       max={1000000}
                                       onInput={this.handleInput}/>

                            <FormInput label={`Yearly Savings ${this.state.yr_savings}%`}
                                       type='range'
                                       name='yr_savings'
                                       value={this.state.yr_savings}
                                       min='0'
                                       max='35'
                                       onInput={this.handleInput}/>
                        </div>
                    </fieldset>
                </form>

                <aside className="life-calc__results">
                    <Results
                        is_valid={is_valid}
                        life_total={life_total}
                        life_savings={life_savings}
                        retire_yrs={retire_yrs} />
                </aside>
            </section>
        )
    }
}

export default LifeCalculator