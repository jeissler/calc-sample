import React, {Component, Fragment} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import LifeCalculator from "./components/LifeCalculator";
import Footer from "./components/Footer";
import Promo from "./components/Promo";

import "./css/App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Header/>

                    <Hero/>

                    <main>
                        <Route exact path="/" component={Intro}/>
                        <Route exact path="/calc" component={LifeCalculator}/>
                    </main>

                    <Route path="/calc" component={Promo}/>

                    <Footer/>

                </Fragment>
            </Router>
        );
    }
}

export default App;
