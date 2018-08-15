import React, {Component} from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Footer from './components/Footer';
import './css/App.css';

class App extends Component {
    render() {
        return (
            <div className="frame-wrapper">

                <Header/>

                <main>
                    <Intro/>
                </main>

                <Footer/>

            </div>
        );
    }
}

export default App;
