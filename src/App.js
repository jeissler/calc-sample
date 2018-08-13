import React, {Component} from 'react';
import Header from './components/Header.js'
import './App.css';

class App extends Component {
    render() {
        const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            month = months[new Date().getMonth() + 1] + '.';

        return (
            <div className="frame-wrapper">

                <Header month={month}/>

                <main>
                    <p className="intro">
                        We're just getting this started.
                    </p>
                </main>

                <footer>

                </footer>

            </div>
        );
    }
}

export default App;
