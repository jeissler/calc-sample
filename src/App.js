import React, {Component, Fragment} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import LifeCalculator from "./components/LifeCalculator";
import Footer from "./components/Footer";
import "./css/App.css";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>

                <Hero/>

                <main>
                    <Router>
                        <Fragment>
                            <Route exact path="/" component={Intro}/>
                            <Route exact path="/calc" component={LifeCalculator}/>
                        </Fragment>
                    </Router>
                </main>

                <Footer/>

            </Fragment>
        );
    }
}

export default App;
