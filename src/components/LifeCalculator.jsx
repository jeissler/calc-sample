import { useState } from "react";
import FormInput from "./FormInput";
import Results from "./Results";

export default function LifeCalculator() {
    const [state, setState] = useState({
        age: 23,
        age_retire: 65,
        mo_expenses: 500,
        mo_home: 1400,
        own_rent: 1,
        own_yrs: 27,
        yr_income: 85000,
        yr_savings: 5,
        life_savings: 20000
    });

    const handleInput = (event) => {
        const target = event.target,
            name = target.name;

        setState(prevState => ({
            ...prevState,
            [name]: parseInt(target.value, 10)
        }));
    };

    const calculateAmount = () => {
        const num_config = {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        };

        const retire_yrs = state.age_retire - state.age,
            inflate = (state.yr_income / retire_yrs),
            own_home = state.own_rent === 1,
            life_home = own_home ? state.own_yrs * state.mo_home : retire_yrs * state.mo_home,
            life_expenses = (state.mo_expenses * 12 + inflate) * (retire_yrs + 20),
            life_total = life_home + life_expenses - state.life_savings,
            yr_savings = (state.yr_savings / 100) * state.yr_income,
            life_savings = yr_savings * retire_yrs + state.life_savings,
            is_valid = [retire_yrs, life_total, life_savings].every(prop => !isNaN(prop) && prop > 0);

        return {
            is_valid: is_valid,
            retire_yrs: retire_yrs,
            life_total: life_total.toLocaleString('en', num_config),
            life_savings: life_savings.toLocaleString('en', num_config)
        };
    };

    const getRangeValues = () => {
        return {
            retire_min: state.age + 10 <= 65 ? state.age + 10 : state.age,
            retire_max: state.age >= 65 ? state.age + 10 : 75
        }
    };

    const {is_valid, retire_yrs, life_total, life_savings} = calculateAmount(),
        {retire_min, retire_max} = getRangeValues();

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
                                   value={state.age}
                                   min={18}
                                   max={99}
                                   err_msg='Please enter a valid age'
                                   onInput={handleInput}/>

                        <FormInput label={`Retriement Age ${state.age_retire}`}
                                   name='age_retire'
                                   type='range'
                                   min={retire_min}
                                   max={retire_max}
                                   value={state.age_retire}
                                   onInput={handleInput}/>
                    </div>
                </fieldset>


                <fieldset className="life-calc__expenses">
                    <div>
                        <FormInput label='Monthly Rent/Mortgage'
                                   name='mo_home'
                                   type='number'
                                   currency={true}
                                   value={state.mo_home}
                                   onInput={handleInput}/>

                        <FormInput label='Monthly Expenses'
                                   type='number'
                                   currency={true}
                                   name='mo_expenses'
                                   value={state.mo_expenses}
                                   onInput={handleInput}/>
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
                                   value={state.yr_income}
                                   onInput={handleInput}/>

                        <FormInput label='Retirement Account'
                                   name='life_savings'
                                   type='number'
                                   currency={true}
                                   value={state.life_savings}
                                   max={1000000}
                                   onInput={handleInput}/>

                        <FormInput label={`Yearly Savings ${state.yr_savings}%`}
                                   type='range'
                                   name='yr_savings'
                                   value={state.yr_savings}
                                   min='0'
                                   max='35'
                                   onInput={handleInput}/>
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