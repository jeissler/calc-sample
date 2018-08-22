import React, {Component} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import LifeCalculator from './components/LifeCalculator';
import Footer from './components/Footer';
import './css/App.css';

class App extends Component {
    render() {
        return (
            <div className="frame-wrapper">
                <Header/>

                <Hero/>

                <main>
                    {/* TODO: add router */}
                    <Intro/>
                    <LifeCalculator/>
                </main>

                <Footer/>

            </div>
        );
    }
}

export default App;
